import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const IconShow = ({ path }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    import(`../../assets/icons/${path}`).then((m) => setIcon(m.default));
  }, [path]);

  return icon ? <img src={icon} /> : <Skeleton variant="circular" />;
};

export default IconShow;
