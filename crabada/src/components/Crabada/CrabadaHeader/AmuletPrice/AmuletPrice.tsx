import "./amulet-price.scss";
import getImageByKey from "./AmuletIcon";

const AmuletPrice: React.FC<{
  amuletName: string;
  amuletPrice: number;
  difference: number;
}> = (props) => {
  const { amuletName, amuletPrice, difference } = props;
  return (
    <div className="amulet-price-container">
      <img src={getImageByKey(amuletName)} className="amulet-icon"></img>
      <span>{amuletName}</span>
      <span>${amuletPrice}</span>
      <div className={`difference ${difference < 0 && "red"}`}>
        {difference > 0 && "+"}
        {difference}
      </div>
    </div>
  );
};

export default AmuletPrice;
