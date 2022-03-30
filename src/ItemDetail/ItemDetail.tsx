import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { getNftDetails } from "../service/api";
import { useEffect, useState } from "react";
import { PhotoCamera } from "@material-ui/icons";
import { fontSize } from "@mui/system";

export default function ItemDetail() {
  let { nftId } = useParams();
  const [nftDetails, setNftDetails] = useState<any>({});

  const getNft = async () => {
    const res = await getNftDetails(nftId);
    setNftDetails(res.mint);
  };
  console.log(nftDetails, "nftDetails");
  useEffect(() => {
    getNft();
  }, [nftId]);

  const theme = useTheme();

  return (
    <>
      <div className="container  " style={{ paddingTop: "2rem" }}>
        <div className="item_details">
          <div className="row justify-content-center sm:space-y-20">
            <div className="col-lg-4">
              <img
                className="item_img"
                src={nftDetails?.image}
                alt={nftDetails?.name}
              />
            </div>

            <div className="col-lg-6">
              <div className="space-y-20 ">
                <div className="box">
                  <div className="space-y-20">
                    <div className="container ">
                      <h4 className="text-center">
                        <span style={{ fontFamily: "boston", color: "black" }}>
                          {" "}
                          {nftDetails?.name}
                        </span>
                      </h4>
                    </div>
                    <div className="hr"></div>
                  </div>
                  <br></br>
                  <Box>
                    <Grid
                      container
                      rowSpacing={3}
                      columnSpacing={{ xs: 1, sm: 3, md: 3 }}
                    >
                      {nftDetails?.rank_explain?.map((attribute: any) => (
                        <Grid item xs={4}>
                          <Card
                            style={{
                              padding: "10px",
                              backgroundColor: "#0b1b27",
                            }}
                          >
                            <h6 style={{ color: "rgb(247 220 90)" }}>
                              {attribute?.attribute}
                            </h6>
                            <span style={{ color: "white" }}>
                              {" "}
                              {attribute.value === "" ? "N/A" : attribute.value}
                            </span>
                            <br></br>

                            <span
                              style={{ color: "#FFEF7E", fontSize: "0.9rem" }}
                            >
                              {" "}
                              {attribute.times_seen_per + "% Have This Trait "}
                            </span>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </div>
                <div className="space-y-20 ">
                  <div className="box text-centre">
                    <Box
                      style={{
                        backgroundColor: "#0b1b27",
                        borderRadius: "0.2rem",
                        padding: "0.7rem",
                      }}
                    >
                      <div className="col-auto ">
                        <div className="text-center">
                          <p
                            className="txt _bold color_black"
                            style={{
                              color: "rgb(247 220 90)",
                            }}
                          >
                            Mint Address
                          </p>
                          <span
                            style={{
                              fontFamily: "Aldrich",
                              color: "white",
                              fontSize: "0.9rem",
                            }}
                            className="color_text"
                          >
                            {nftDetails.mint}
                          </span>
                        </div>
                      </div>
                      <div className="row justify-content-evenly align-items-center">
                        <div className="col-auto">
                          <div className="text-center">
                            <p
                              className="txt _bold color_black"
                              style={{
                                color: "rgb(247 220 90)",
                              }}
                            >
                              Rarity
                            </p>
                            <span
                              style={{
                                fontFamily: "Aldrich",
                                color: "white",
                                fontSize: "0.9rem",
                              }}
                              className=" color_text"
                            >
                              {nftDetails?.rank_title}
                            </span>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="text-center">
                            <p
                              className="txt _bold color_black"
                              style={{
                                color: "rgb(247 220 90)",
                              }}
                            >
                              Moon Rank
                            </p>
                            <span
                              style={{
                                fontFamily: "Aldrich",
                                color: "white",
                                fontSize: "0.9rem",
                              }}
                              className=" color_text"
                            >
                              <span
                                className=" mb-4 p-1"
                                style={{
                                  backgroundColor: "#01022e",
                                  color: "rgb(247 220 90)",

                                  margin: "0.3rem",
                                }}
                              >
                                ⍜
                                <span
                                  style={{
                                    fontFamily: "boston",
                                    color: "#feffff",

                                    padding: "0.7rem",
                                  }}
                                >
                                  {nftDetails?.rank}
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </div>
                </div>
                <div className="d-flex space-x-20"></div>
                <div className="container p-0 ">
                  <h2 className="text-center">
                    <a
                      style={{
                        fontFamily: "boston",
                        fill: "black",
                        color: "black",
                        backgroundColor: "#f8c307",
                      }}
                      href="#"
                      className="btn w-100 "
                    >
                      <i className="ri-search-line"></i>Download
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
