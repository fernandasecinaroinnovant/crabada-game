import HideIcon from "../../../../assets/SVG/HideIcon";
import NFTIcon from "../../../../assets/SVG/nft.svg";
import "./CrabPricesHeader.scss";

const CrabPricesHeader: React.FC<{}> = () => {
  return (
    <div className="crab-prices">
      <div className="crab-prices-title">Crab Prices</div>
      <div className="crab-prices-insight">
        <div className="profile">
          <img src={NFTIcon} alt="NFT Icon" />
          <span className="user-insight">Miko's Insights</span>
        </div>
        <HideIcon />
      </div>
    </div>
  );
};

export default CrabPricesHeader;
