import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@mui/material";
import Box from "@mui/material/Box";
import ethIcon from "../../Images/liquidity/ethereumToken.png";
import tethIcon from "../../Images/liquidity/tetherToken.png";
import rightArrow from "../../Images/liquidity/table/rightArrow.png";
import liquidityTableLastRowDropdown from "../../Images/liquidity/liquidityTableLastRowDropdown.png";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import liquidityTokenDropdown from "../../Images/liquidity/liquidityTokenDropdown.png";

function Tables() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        marginBlock: "28px",
        marginInline: "0px",
        width: "100%",
        height: "645px",
        borderRadius: "10px",
        padding: "0px 15px",
      }}
    >
      <Table
        sx={{
          width: "100%",
          border: "none",
          position: "relative",
          padding: "0px 10px",
        }}
      >
        <TableBody>
          {[...Array(7)].map((_, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.10) !important",
              }}
            >
              {/* <TableCell
              sx={{
                borderBottom: "1px solid gray",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "0 16px",
              }}
            >
              <img src={ethIcon} alt="First Icon" style={{ marginRight: 8 }} />
              <img src={tethIcon} alt="Second Icon" />
            </TableCell> */}
              <TableCell
                className="liqudityTableIconBox"
                sx={{ width: "9%", pr: "0 !important", borderBottom: "grey" }}
              >
                <Box sx={{ position: "relative", top: "2px" }}>
                  <img
                    src={ethIcon}
                    alt="Second Icon"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <img
                    src={tethIcon}
                    alt="Second Icon"
                    style={{
                      width: "43px",
                      height: "43px",
                      position: "relative",
                      left: "-10px",
                      top: "2px",
                    }}
                  />
                </Box>
              </TableCell>
              <TableCell sx={{ borderBottom: "grey" }}>
                <Box>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "rgba(156, 156, 156)",
                    }}
                  >
                    Symbol
                  </p>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    SGD / USD
                  </p>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "grey",
                }}
              >
                <Box>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "rgba(156, 156, 156)",
                      textAlign: "start",
                    }}
                  >
                    Interest
                  </p>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "white",
                      fontWeight: 700,
                      textAlign: "start",
                    }}
                  >
                    3.2%
                  </p>
                </Box>
              </TableCell>
              <TableCell sx={{ borderBottom: "grey" }}>
                <Box>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "rgba(156, 156, 156)",
                      textAlign: "center",
                    }}
                  >
                    Tenor
                  </p>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "white",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    1 year
                  </p>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "grey",
                  position: "relative",
                  left: "70px",
                }}
              >
                <Box>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "rgba(156, 156, 156)",
                      textAlign: "center",
                    }}
                  >
                    Rating
                  </p>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "white",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    AA
                  </p>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "grey",
                  position: "relative",
                  left: "50px",
                }}
              >
                <Box>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "rgba(156, 156, 156)",
                      textAlign: "end",
                    }}
                  >
                    Expiry
                  </p>
                  <p
                    className="customTxtForLiqTable"
                    style={{
                      color: "white",
                      fontWeight: 700,
                      textAlign: "end",
                    }}
                  >
                    04/12/23
                  </p>
                </Box>
              </TableCell>
              <TableCell
                className="liquidityTableLastArrow"
                sx={{
                  width: "10%",
                  position: "relative",
                  left: "40px",
                  top: "5px",
                  borderBottom: "grey",
                }}
              >
                {/* <img src={rightArrow} alt="" /> */}
                <Box className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                  <img
                    src={liquidityTokenDropdown}
                    alt="liquidityTokenDropdown"
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <Box
            sx={{
              position: "absolute",
              padding: "15px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box className="liquidityTableLastRowFlexLeftItem">
                <Button
                  sx={{
                    "&.MuiButton-root": {
                      textTransform: "none",
                      borderColor: "gray",
                      color: "white",
                      background: "rgba(255, 255, 255, 0.04)",
                      p: "8px 16px",
                      ml: "-12px",
                    },
                  }}
                >
                  Item Per Page: 5
                  <img
                    src={liquidityTableLastRowDropdown}
                    alt="liquidityTableLastRowDropdown"
                  />
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: "-2px" }}>
                <Box>
                  <Box className="liquidityTableLastRowFlexLeftItem">
                    <Button
                      sx={{
                        "&.MuiButton-root": {
                          textTransform: "none",
                          borderColor: "gray",
                          color: "rgba(255, 255, 255, 0.5)",
                          background: "rgba(255, 255, 255, 0.04)",
                          p: "8px 14px",
                          fontWeight: "bold",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      <KeyboardArrowLeftOutlinedIcon
                        sx={{ position: "relative", left: "-10px" }}
                      />
                      <span> Prev 5</span>
                    </Button>
                  </Box>
                </Box>
                <Box
                  style={{
                    color: "#fff",
                    display: "flex",
                    marginInline: "18px",
                    fontWeight: "bold",
                  }}
                  className="liquidityTableLastRowFlexLeftItem"
                >
                  <span
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "12px",
                      padding: "10px 15px 32px 15px",
                      position: "relative",
                      top: "-2px",
                    }}
                    className="liquidityTableLastRowFlexLeftItem"
                  >
                    1
                  </span>
                  <span
                    style={{
                      padding: "12px 12px 8px 12px",
                      color: "rgba(255, 255, 255, 0.6)",
                      borderRadius: "5px",
                    }}
                    className="liquidityTableLastRowFlexLeftItem"
                  >
                    2
                  </span>
                  <span
                    style={{
                      marginBlock: "auto",
                      color: "rgba(255, 255, 255, 0.6)",
                      padding: "4px 12px 8px 12px",
                      borderRadius: "5px",
                    }}
                    className="liquidityTableLastRowFlexLeftItem"
                  >
                    3
                  </span>
                  <span
                    style={{
                      marginBlock: "auto",
                      color: "rgba(255, 255, 255, 0.6)",
                      padding: "3px 12px 8px 12px",
                      borderRadius: "5px",
                    }}
                    className="liquidityTableLastRowFlexLeftItem"
                  >
                    ...
                  </span>
                  <span
                    style={{
                      padding: "12px 12px 8px 12px",
                      color: "rgba(255, 255, 255, 0.6)",
                      borderRadius: "5px",
                    }}
                    className="liquidityTableLastRowFlexLeftItem"
                  >
                    8
                  </span>
                </Box>
                <Box className="liquidityTableLastRowFlexLeftItem">
                  <Button
                    sx={{
                      "&.MuiButton-root": {
                        textTransform: "none",
                        borderColor: "gray",
                        color: "white",
                        background: "rgba(255, 255, 255, 0.04)",
                        p: "8px 14px",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    <span>Next 5</span>
                    <KeyboardArrowRightOutlinedIcon
                      sx={{ position: "relative", left: "12px" }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </TableFooter>
        {/* <TableFooter sx={{ borderTop: "red " }}>
        <TableRow>
          <TablePagination
            sx={{ color: "white" }}
            rowsPerPageOptions={[5, 10, 25]}
            colSpan={7}
            count={7}
            rowsPerPage={7}
            page={1}
            // onPageChange={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter> */}
      </Table>
    </Box>
  );
}

export default Tables;
