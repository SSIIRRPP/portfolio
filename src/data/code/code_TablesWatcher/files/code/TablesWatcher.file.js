// context created so Tables can consume its methods and states
export const TablesWatcherContext = React.createContext();

// utility to create a IntersectionObserver's thresholds array
const buildThresholdArray = (steps) => {
  const thrsholdArray = [];
  for (let i = 0; i < steps; i++) {
    thrsholdArray.push(Number((i / steps).toFixed(2)));
  }
  thrsholdArray.push(1);
  return thrsholdArray;
};

// visibility ratio to consider the table is visible
// used at IntersectionObserver's observe method callback,
// and in usaTableVisibility hook.
export const visibilityRatio = 0.9;

let thresholdArray = buildThresholdArray(6);

// IntersectionObserver options
const observerOptions = {
  rootMargin: "0px 0px 0px",
  threshold: thresholdArray,
};

const TablesWatcher = ({ children }) => {
  // ref to the layout component, which has the scroll functionality
  // ref.current is never undefined, because this component is always mounted
  const { mainRef } = useContext(LayoutContext);
  // ref to store the IntersectionObserver's instance
  const observer = useRef(null);
  // state to store IntersectionObserver's entries.
  // format: { [tableUuid]: entry }
  const [entries, setEntries] = useState({});
  // state to store table's visibilities states
  const [visibilities, setVisibilities] = useState({});
  // state to store tables HTMLElements, so they can be manupilated imperatively
  // format: { [tableUuid]: ref.current }
  const [tablesRefs, setTablesRefs] = useState({});
  // state to store which tables need attention from the server,
  // and are not in the layout view
  const [tablesPositions, setTablesPositions] = useState({
    top: new Set(),
    bottom: new Set(),
  });

  // registers table to the IntersectionObserver and saves its data to the states
  const registerTable = useCallback((tableRef) => {
    if (observer.current) {
      const tableId = tableRef.current.getAttribute("data-table-uuid");
      observer.current.observe(tableRef.current);
      setTablesRefs((t) => ({ ...t, [tableId]: tableRef.current }));
      setEntries((t) => ({ ...t, [tableId]: null }));
      setVisibilities((t) => ({ ...t, [tableId]: false }));
      // returns true or false to indicate useTAbleVisibility
      // if its the table was successfully registered or not.
      return true;
    } else {
      // this shouldn't be ever executed, but I wanted to make sure
      return false;
    }
  }, []);

  const handleVisibility = useCallback((entries) => {
    // saves the visibility status and the entry of each
    // IntersectionObserverEntry target's, using the
    // data-table-uuid attribute set in Table.js
    let entriesUpdate = {};
    let visibilitesUpdate = {};
    entries.forEach((entry) => {
      const tableUuid = entry.target.getAttribute("data-table-uuid");
      entriesUpdate = {
        ...entriesUpdate,
        [tableUuid]: entry,
      };
      let isVisible = false;
      if (entry.intersectionRatio > visibilityRatio) {
        isVisible = true;
      }
      visibilitesUpdate = {
        ...visibilitesUpdate,
        [tableUuid]: isVisible,
      };
    });
    setEntries((s) => ({ ...s, ...entriesUpdate }));
    setVisibilities((s) => ({ ...s, ...visibilitesUpdate }));
  }, []);

  useEffect(() => {
    // Instantiates IntersectionObserver on the first mount
    // Won't be executed again until re-render of the whole layout
    const options = {
      root: mainRef.current,
      ...observerOptions,
    };
    const _observer = new IntersectionObserver(handleVisibility, options);

    observer.current = _observer;

    return () => {
      // disconnects the IntersectionObserver when unmounting
      _observer.disconnect();
      // removes instance from observer's ref, so new
      // tables can't be registered
      observer.current = null;
    };
  }, [handleVisibility, mainRef]); // doesn't update

  return (
    <TablesWatcherContext.Provider
      value={{
        tablesRefs,
        visibilities,
        entries,
        tablesPositions,
        setTablesPositions,
        registerTable,
      }}
    >
      {
        // shows the attention icons if there are tables
        // that need attention from the server.
      }
      <FloatingPriorityIcon position="top" count={tablesPositions.top.size} />
      <FloatingPriorityIcon
        position="bottom"
        count={tablesPositions.bottom.size}
      />
      {children}
    </TablesWatcherContext.Provider>
  );
};
