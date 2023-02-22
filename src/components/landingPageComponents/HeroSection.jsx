// MUI IMPORTS
import {
  HeroBtn,
  HeroBtnBorder,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroHeadingSpan,
  HeroText,
  TopContainer,
} from "./CustomComponents";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Link from "@mui/material/Link";

// COmponents
import LandingPageNavbar from "../landingPageNavbar";

function HeroSection() {

  return (
    <TopContainer>
      {/*---------- navbar -----------*/}
      <LandingPageNavbar />


      {/*---------- hero section ------------*/}

      <HeroContainer>
        <HeroContent>
          <HeroHeading variant="h1">
            Tap Into the
            <HeroHeadingSpan variant="span">Next Generation</HeroHeadingSpan>
            of Credit Trading
          </HeroHeading>
          <HeroText>
            Trade bonds electronically with minimal trading fees, instant settlement, and access to novel investment products
          </HeroText>
          <HeroBtnBorder>
            <Link href="/CommingSoon" underline="none">
              <HeroBtn style={{ height: '64px' }}
                startIcon={
                  <FileDownloadOutlinedIcon
                    sx={{ marginRight: "15px", width: "24px", height: "24px" }}
                  />
                }
              >
                See Active Deals
              </HeroBtn>
            </Link>
          </HeroBtnBorder>
        </HeroContent>
      </HeroContainer>
    </TopContainer>
  );
}

export default HeroSection;
