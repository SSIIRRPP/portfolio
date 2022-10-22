// Table.js
const Table = ({ table /*  table's data, containing an uuid */, children }) => {
  const tableRef = useRef(null);
  return (
    <div ref={tableRef} data-table-uuid={table.uuid}>
      {children && tableRef.current
        ? typeof children.type === "string"
          ? children
          : cloneElement(children, { tableRef })
        : null}
    </div>
  );
};
