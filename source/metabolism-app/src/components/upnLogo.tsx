import React from "react";
import { Box } from "@mui/material";

const UpnLogo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
        <img src="/logo-upn.png" alt="Upn Logo" style={{width: "100%"}} />
    </Box>
  );
}

export default UpnLogo;