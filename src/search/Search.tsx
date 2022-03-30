import React, { useState } from "react";

const Search = ({ handleSearch }: any) => {
  const [keyword, setKeyword] = useState("");
  console.log(keyword);
  return (
    <div>
      {" "}
      <div className="mt-20">
        <div className="container col-lg- ">
          <div className="space-y-10">
            <div className="box input__box d-flex align-items-center space-x-20">
              <input
                onChange={(t) => setKeyword(t.target.value)}
                style={{ color: "white" }}
                type="text"
                className="form-control"
                placeholder="Enter your search..."
                value={keyword}
              />
              <div>
                <div
                  style={{
                    fontFamily: "boston",
                    fill: "black",
                    color: "black",
                    backgroundColor: "#f8c307",
                  }}
                  onClick={() => handleSearch(keyword)}
                  className="btn "
                >
                  Search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
