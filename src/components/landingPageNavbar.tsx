import {
  Navbar,
  NavItem,
  NavItemContainer,
} from "./landingPageComponents/CustomComponents";
import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  Toolbar,
} from "@mui/material";
import Link from "@mui/material/Link";

// icons
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// Components
import NavDrawerForMob from "./landingPageComponents/navDrawerForMob";

// Images
import logo from "../Images/landingPage/landing-page/BLOCKHOUSE.png";

function AccessSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/*---------- navbar -----------*/}
      {isMobile ? (
        <>
          <Toolbar
            style={{
              height: "96px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              padding: "0px",
            }}
          >
            <Typography variant="h4" flexGrow={"1"} color={"white"}>
              BlockHouse
            </Typography>
            <NavDrawerForMob />
          </Toolbar>
        </>
      ) : (
        <Navbar>
          <NavItemContainer>
            <Link href="/BorrowPage" underline="none">
              <NavItem>For Borrowers</NavItem>
            </Link>
            <Link
              href="https://aadityak.substack.com/"
              underline="none"
              target={"_blank"}
            >
              <NavItem>Resources</NavItem>
            </Link>
          </NavItemContainer>
          <Link href="/" underline="none">
            <Box sx={{ width: "240px", height: "40px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={logo}
                alt="logo"
              />
            </Box>
          </Link>
          <NavItemContainer>
            <Box sx={{ height: "24px", width: "24px" }}>
              <DarkModeOutlinedIcon
                sx={{ color: "white", height: "100%", width: "100%" }}
              />
            </Box>
            <Link href="/CommingSoon" underline="none">
              <NavItem style={{ color: "#659BEB" }}>Launch Exchange</NavItem>
            </Link>
          </NavItemContainer>
        </Navbar>
      )}
    </>
  );
}

export default AccessSection;
