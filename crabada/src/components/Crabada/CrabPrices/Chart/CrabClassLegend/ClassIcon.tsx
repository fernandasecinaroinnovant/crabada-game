import prime from "../../../../../assets/SVG/prime.svg";
import bulk from "../../../../../assets/SVG/bulk.svg";
import craboid from "../../../../../assets/SVG/craboid.svg";
import ruined from "../../../../../assets/SVG/ruined.svg";
import gem from "../../../../../assets/SVG/gem.svg";
import organic from "../../../../../assets/SVG/organic.svg";
import surge from "../../../../../assets/SVG/surge.svg";
import sunken from "../../../../../assets/SVG/sunken.svg";

const images: any = {
  prime,
  bulk,
  craboid,
  ruined,
  gem,
  organic,
  surge,
  sunken,
};

const getImageByKey = (key: string): any => {
  return key.length > 0 ? images[key.toLowerCase()] : null;
};

export default getImageByKey;
