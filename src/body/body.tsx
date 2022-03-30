import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { getIdFromName, trimString } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

export default function Body({ data }: any) {
  let navigate = useNavigate();

  const handleNFTNavigation = (nft: any) => {
    console.log(nft);
    const id = getIdFromName(nft?.name);
    navigate(`/nft/${id}`);
  };

  return (
    <div className="overflow-hidden">
      <section className="section ranking mt-20">
        <div className="container">
          <div className="box d-flex table-responsive">
            <table className="table ranking ">
              <thead>
                <tr>
                  <th scope="col">
                    <span style={{ fontFamily: "boston", color: "black" }}>
                      Moon Rank
                    </span>
                  </th>
                  <th scope="col">
                    <span style={{ fontFamily: "boston", color: "black" }}>
                      Image
                    </span>
                  </th>

                  <th scope="col">
                    <span style={{ fontFamily: "boston", color: "black" }}>
                      Name
                    </span>
                  </th>
                  <th scope="col">
                    <span style={{ fontFamily: "boston", color: "black" }}>
                      Rarity
                    </span>
                  </th>
                  {/* <th scope="col">
                    <span style={{ fontFamily: "boston", color: "black" }}>
                      Att. Count
                    </span>
                  </th> */}
                  <th scope="col">
                    <span style={{ fontFamily: "boston", color: "black" }}>
                      Attributes
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((nft: any, index: any) => (
                  <tr onClick={() => handleNFTNavigation(nft)}>
                    <td>
                      <span
                        className=" mb-4 p-1"
                        style={{ color: "rgb(247 220 90)" }}
                      >
                        ⍜
                      </span>
                      <span>{nft?.rank}</span>
                    </td>
                    <td>
                      <a href="">
                        <div className="collection space-x-10">
                          <div className="media">
                            <img src={nft.image} className="collection__img" />
                          </div>
                        </div>
                      </a>
                    </td>

                    <td>
                      <span
                      // style={{
                      //   width: "160px",
                      //   whiteSpace: "nowrap",
                      //   overflow: "hidden",
                      //   textOverflow: "ellipsis",
                      //   display: "inline-block",
                      // }}
                      >
                        {nft.name}
                      </span>
                    </td>
                    <td>
                      <span>{nft.rank_title}</span>
                    </td>
                    {/* <td>
                      <span>{nft.rank_explain.length}</span>
                    </td> */}

                    <td>
                      <span
                        style={{
                          width: "160px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "inline-block",
                        }}
                      >
                        {nft.attr_values_arr + ","}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <br />
    </div>
  );
}
