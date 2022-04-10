import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Search = ({ handleSearch }: any) => {
  const [keyword, setKeyword] = useState("");
  console.log(keyword);
  return (
    <div>
      {" "}
      <div className="mt-20 web ">
        <div className="container col-lg- ">
          <div className="space-y-10">
            <div className="box input__box d-flex align-items-center space-x-20 ">
              <form
                style={{ width: "100%" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className=" row ">
                  <div className="col-2" style={{ width: "85%" }}>
                    <input
                      onChange={(t) => setKeyword(t.target.value)}
                      style={{ color: "white" }}
                      type="text"
                      className="form-control"
                      placeholder="Enter your search..."
                      value={keyword}
                    />
                  </div>

                  <div className="col">
                    <Button
                      style={{
                        fontFamily: "boston",
                        fill: "black",
                        color: "black",
                        backgroundColor: "#f8c307",
                        margin: "5px",
                      }}
                      type="submit"
                      onClick={() => handleSearch(keyword)}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mobile ">
        <div className="container col-lg- ">
          <div className="space-y-10">
            <div className="box input__box d-flex align-items-center space-x-20 ">
              <form
                style={{ width: "100%" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className=" row ">
                  <div className="col-12">
                    <input
                      onChange={(t) => setKeyword(t.target.value)}
                      style={{ color: "white" }}
                      type="text"
                      className="form-control"
                      placeholder="Enter your search..."
                      value={keyword}
                    />
                  </div>

                  <div className="col text-center">
                    <Button
                      style={{
                        fontFamily: "boston",
                        fill: "black",
                        color: "black",
                        backgroundColor: "#f8c307",
                        margin: "5px",
                      }}
                      type="submit"
                      onClick={() => handleSearch(keyword)}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
