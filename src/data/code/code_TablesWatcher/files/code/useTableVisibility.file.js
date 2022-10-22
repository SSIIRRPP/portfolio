// hook consumed by the tables to register them to the TablesWatcher
const useTableVisibility = ({
  tableRef,
  check, // wheter the table requieres server's attention or not
  watch, // properties to watch even if 'check' doesn't change
}) => {
  const { registerTable, setTablesPositions, entries } =
    useContext(TablesWatcherContext);
  const [hideDirection, setHideDirection] = useState(null);
  const [registeredTable, setRegisteredTable] = useState(false);

  const tableUuid = useMemo(
    // attribute set on Table.js to identify the HTMLElement on the
    // IntersectionObserver's observe callback's entries
    () => tableRef.current.getAttribute("data-table-uuid"),
    [tableRef]
  );

  const entry = useMemo(() => entries[tableUuid], [entries, tableUuid]);

  useEffect(() => {
    if (!registeredTable) {
      registerTable(tableRef) && setRegisteredTable(true);
    }
    // not returning a "unregisterTable" method because the tables are always rendered
    // below the TablesWatcher component, and this just disconnects
    // the IntersectionObserver when unmounting
  }, [tableRef, registerTable, registeredTable]);

  useEffect(() => {
    // wheter the table is in main layout view or not
    const isNotVisible = entry.intersectionRatio < visibilityRatio;
    if (entry && check && isNotVisible) {
      const { top } = entry.boundingClientRect;
      const { bottom: fB, top: fT } = entry.rootBounds;
      // checks if the Table is in the above or the below part
      // of the non visible portion of the layout
      if (top - fT > (fB - fT) / 2) {
        setHideDirection("bottom");
      } else {
        setHideDirection("top");
      }
    } else {
      setHideDirection(null);
    }
  }, [entry, check, watch]);

  useEffect(() => {
    if (hideDirection) {
      // if hideDirection, table needs attention and is not in server's view,
      // so its uuid is set on the TablesWatcher's tablePosition's states
      if (hideDirection === "top") {
        setTablesPositions((s) => {
          let set1 = new Set(s.top);
          let set2 = new Set(s.bottom);
          set1.add(tableUuid);
          set2.delete(tableUuid);
          return {
            top: set1,
            bottom: set2,
          };
        });
      } else {
        setTablesPositions((s) => {
          let set1 = new Set(s.top);
          let set2 = new Set(s.bottom);
          set1.delete(tableUuid);
          set2.add(tableUuid);
          return {
            top: set1,
            bottom: set2,
          };
        });
      }
    } else {
      // if no hideDirection, either the table doesn't need
      //  attention, or it's in server's view.
      setTablesPositions((s) => {
        let set1 = new Set(s.top);
        let set2 = new Set(s.bottom);
        set1.delete(tableUuid);
        set2.delete(tableUuid);
        return {
          top: set1,
          bottom: set2,
        };
      });
    }

    // in the future I consider moving this logic to TablesWatcher too,
    // because there are too many calls to setTablesPosition, so it would be more efficient
    // to set this warnings inside the IntersectionObserver's callback, or a hook that watches
    // which tables need attention and modify this sets in a single call
  }, [hideDirection, tableUuid, setTablesPositions]);
};
