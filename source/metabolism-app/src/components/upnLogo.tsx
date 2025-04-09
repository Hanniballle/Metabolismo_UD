import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const UpnLogo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
        <Image src="/logo-upn.png" alt="Upn Logo" layout="responsive" width={500} height={500} />
    </Box>
  );
}

export default UpnLogo;