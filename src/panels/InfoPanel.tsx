import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { getFundInfo } from "../services/dataService";
import { FundInfo } from "../data/models";

export default function InfoPanel() {
  const [fundInfo, setFundInfo] = React.useState<FundInfo>();
  React.useEffect(() => {
    getFundInfo().then((data: FundInfo) => {
      setFundInfo(data);
    });
  }, []);

  return (
    <PanelBar>
  <PanelBarItem expanded={true} title="Fund Managers">
    <div>
      {fundInfo && fundInfo.managers.map((item, idx) => (
        <div className="manager" key={idx}>
          <img src={`/team/${item.firstName}-${item.lastName}.jpg`}
            alt={item.firstName + ' ' + item.lastName} />
          <span className="manager-info">
            <h2>{item.firstName + ' ' + item.lastName}</h2>
            <p>{item.position}</p>
          </span>
        </div>
      ))}
    </div>
  </PanelBarItem>

  <PanelBarItem title={"Fund Details"}>
    {fundInfo && fundInfo.quarters.map((quarter, idx) => (
              <PanelBarItem title={quarter.title} key={idx}>
                <ul className="fund-detail-list">
                  {quarter.details.map((detail, index) => (
                    <li key={index}>
                      <span>{detail.name}:</span>
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </PanelBarItem>
            ))}
</PanelBarItem >


</PanelBar>
  );
}
