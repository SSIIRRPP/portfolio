const Layout = ({ children }) => {
  // ref to attach to the main layout html element.
  const layoutRef = useRef(null);
  // state to store if the the screen did trigger a touch event,
  // so it's probable that there is no cursor in the screen,
  // and NMouseParallax component can be deactivated
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const el = layoutRef.current;
    const rm = () => {
      el.removeEventListener('touchstart', handleTouch);
    };
    const handleTouch = () => {
      setTouch(true);
      // removes the listener once a touch event is triggered
      rm();
    };
    if (el) {
      el.addEventListener('touchstart', handleTouch);
      return rm;
    }
  }, [el]);

  return (
    <LayoutProvider
      value={{
        layoutRef,
        touch,
        // ...restOfProps
      }}
    >
      {children}
    </LayoutProvider>
  );
};
