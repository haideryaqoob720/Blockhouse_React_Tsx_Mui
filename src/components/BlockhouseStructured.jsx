import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@material-ui/core/Typography";

// component
import DashboardHeder_Sidebar from "./liquidityComponent/dashboardHeder_Sidebar";
import mainContainerSearchIcon from "../Images/liquidity/mainContainerSearchIcon.png";
import StructuredBox from "./structuredComponents/structuredBox";

// Images
import liquidityTableLastRowDropdown from "../Images/liquidity/liquidityTableLastRowDropdown.png";

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <DashboardHeder_Sidebar />

        <Box
          component="main"
          className="blockHouseLiquidityContainerr"
          sx={{
            height: "100vh",
          }}
        >
          <Toolbar />
          {/* <LiquidityTable /> */}
          <Box sx={{ width: "93%", margin: "0 auto", mt: "50px", pr: "30px" }}>
            <Typography variant="body" className="tableHeadingTxt" >
              Overview
            </Typography>

            <Box className="structuredSearchRow" sx={{
              display: "flex",
            }}>
              <Box sx={{ flex: '0 0 72%', maxWidth: '72%' }} className="inputSearchWidthMeida">
                <Box className="mainContainerSearchDiv">
                  <span>
                    <img
                      src={mainContainerSearchIcon}
                      alt="mainContainerSearchIcon"
                    />
                  </span>
                  <input
                    type="search"
                    className="mainContainerSearch"
                    placeholder="Search"
                  />
                </Box>
              </Box>
              <Box sx={{ flex: '0 0 9%', maxWidth: '9%', ml: '24px', mr: '24px' }} className="mainContainerSearchDiv2">
                <center>
                  <Box className="rightSearchBoxStructured" style={{ float: 'right' }}>
                    ETH Type
                    <img
                      src={liquidityTableLastRowDropdown}
                      alt="liquidityTableLastRowDropdown"
                    />
                  </Box>
                </center>
              </Box>
              <Box sx={{ flex: '0 0 15%', maxWidth: '15%' }} className="mainContainerSearchDiv3">
                <center>
                  <Box className="rightSearchBoxStructured" style={{ float: 'right' }}>
                    Sort By: Newest first
                    <img
                      src={liquidityTableLastRowDropdown}
                      alt="liquidityTableLastRowDropdown"
                    />
                  </Box>
                </center>
              </Box>
            </Box>
          </Box>
          {/* ---------------- here ------------- */}
          <Box>
            <StructuredBox />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
