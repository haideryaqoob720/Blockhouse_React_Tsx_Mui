import { Box, styled, Typography, Button } from "@mui/material";
import heroImg from "../../Images/landingPage/landing-page/landing-bg.png";
import assetsBg from "../../Images/landingPage/asset-lifeCycle/asset-bg.png";
import footerBg from "../../Images/landingPage/footer/footerBg.png";

// hero section

export const Navbar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  margin: "0 auto",
  height: "96px",
  borderBottom: `1px solid hsla(0,0%,100%,.12)`,
});

export const NavItemContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "48px",
});

export const NavItem = styled(Typography)({
  fontSize: "16px",
  color: "white",
});

export const HeroContainer = styled(Box)({
  width: "80%",
  margin: "0 auto",
});

export const HeroContent = styled(Box)({
  marginTop: "180px",
  "@media (max-height: 900px)": {
    marginTop: "100px",
  },
  "@media (max-height: 800px)": {
    marginTop: "50px",
  },
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "72px",
});

export const TopContainer = styled(Box)({
  background: `url(${heroImg})`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100vh",
  height: "100vh",
  "@media (max-height: 724px)": {
    paddingBottom: "100px",
    height: "auto",
  },
  width: "100%",
});

export const HeroHeading = styled(Typography)({
  fontSize: "72px",
  "@media (max-width: 1302px)": {
    fontSize: "60px",
  },
  color: "white",
  lineHeight: "72px",
  fontFamily: "Open Sans",
  letterSpacing: "-4px",
});

export const HeroHeadingSpan = styled(Typography)({
  color: "#659beb",
  lineHeight: "72px",
  display: "block",
});

export const HeroText = styled(Typography)({
  fontSize: "18px",
  "@media (max-width: 1302px)": {
    fontSize: "15px",
  },
  lineHeight: "32px",
  color: "white",
  width: "66%",
  fontFamily: "Open Sans",
  fontWeight: "300",
});

export const HeroBtn = styled(Button)({
  color: "white",
  fontSize: "18px",
  padding: "20px",
  width: "100%",
  borderRadius: "6px",
  background: "#17181D",
  whiteSpace: "nowrap",
  textTransform: "none",
  ":hover": {
    background: "#17181D",
  },
});

export const HeroBtnBorder = styled(Box)({
  background: "linear-gradient(to right, #131bd3, #6195eb)",
  width: "236px",
  fontSize: "18px",
  padding: "1px",
  borderRadius: "6px",
  marginTop: "-24px",
  ":hover": {
    background: "linear-gradient(to left, #131bd3, #6195eb)",
  },
});

// Assets Lifecycle Page

export const AssetsLifeCycleContainer = styled(Box)({
  background: `url(${assetsBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "0 auto",
});

export const AssetsTopContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-10px",
});

export const AssetsHeading = styled(Typography)({
  color: "white",
  fontWeight: "300",
  fontSize: "48px",
  lineHeight: "48px",
  fontFamily: "open sans",
  width: "400px",
  letterSpacing: "-2px",
});

export const AssetsText = styled(Box)({
  fontSize: "18px",
  lineHeight: "32px",
  fontWeight: "300",
  color: "white",
  width: "422px",
  marginTop: "48px",
});

export const AssetsCardContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  padding: "64px 0 120px 0",
  width: "100%",
  // backgroundColor: 'yellow',
});

export const AssetsCard = styled(Box)({
  background:
    "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
  border: `1px solid rgba(255, 255, 255, 0.12)`,
  backdropFilter: "blur(32px)",
  borderRadius: "12px",
  width: "23.40%",
  minHeight: "307px",
  "@media (max-width: 1420px)": {
    minHeight: "350px",
  },
  boxSizing: "border-box",
  padding: "32px 22px",
  zIndex: "99",
});

export const CardTopText = styled(Typography)({
  fontSize: "58px",
  lineHeight: "58px",
  fontWeight: "bold",
  color: "#F6AF40",
  fontFamily: "'Phudu', cursive",

  transform: "rotate(-90deg)",
  width: "fit-content",
});

export const CardMiddleText = styled(Typography)({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: "300",
  color: "white",
  margin: "30px 0px 16px 10px",
  fontFamily: "open sans",
});

export const CardBottomText = styled(Typography)({
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "300",
  color: "white",

  fontFamily: "open sans",
});

// Products Page

export const ProductsContainer = styled(Box)({
  paddingBlock: "120px",
  width: "80%",
  margin: "0 auto",
});

export const ProductTopText = styled(Typography)({
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "open sans",
  lineHeight: "20px",
  color: "#659BEB",
  marginBottom: "16px",
});

export const ProductsTopRightSec = styled(Box)({
  width: "50%",
  display: "flex",
  gap: "24px",
});

export const ProductTopCard = styled(Box)({
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  width: "312px",
  padding: "32px",
  // background: "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(101, 155, 235, 0.12) 101.13%)",
});

export const ProductTopMiddleText = styled(Typography)({
  fontSize: "30px",
  lineHeight: "36px",
  fontWeight: "300",
  color: "white",
  margin: "32px 0 16px 0",
  fontFamily: "open sans",
});

export const ProductBottomCardHeading = styled(Typography)({
  fontSize: "20px",
  width: "125%",
  lineHeight: "24px",
  fontWeight: "300",
  color: "white",
  marginBottom: "16px",
  fontFamily: "open sans",
});

export const ProductBottomCard = styled(Box)({
  background:
    "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  padding: "0px 32px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  width: "85.2%",
  // boxSizing: "border-box",
  minHeight: "170px",
  maxHeight: "auto",
});

// Proof page

export const ProofCardsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",

  gap: "32px",
  marginTop: "64px",
});

export const ProofCard = styled(Box)({
  background:
    "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  padding: "8px",
  width: "33%",
  minHeight: "510px",
  "@media (max-width: 1400px)": {
    minHeight: "560px",
  },
  maxHeight: "auto",
});

// access

export const AccessContainer = styled(Box)({
  background: `url(${footerBg})`,
  backgroundPosition: "center",
  margin: "0 auto",
  height: "528px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const FooterButtonBox = styled(Box)({
  display: "flex",
  width: "100%",
  gap: "24px",
  justifyContent: "center",
  marginTop: "85px",
});

// footer

export const FooterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  margin: "0 auto",
  paddingBlock: "28px",
});

export const IconBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  gap: "24px",
});

export const CopyRightText = styled(Typography)({
  fontSize: "16px",
  lineHeight: "24px",
  color: "white",
});
