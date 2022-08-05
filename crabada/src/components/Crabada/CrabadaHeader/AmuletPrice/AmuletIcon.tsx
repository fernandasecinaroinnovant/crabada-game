import avax from "../../../../assets/SVG/avax.svg";
import cra from "../../../../assets/SVG/cra.svg";
import tus from "../../../../assets/SVG/tus.svg";
import cram from "../../../../assets/SVG/cram.svg";

const images: any = {
  avax,
  cra,
  tus,
  cram,
};

const getImageByKey = (key: string): any => {
  return key.length > 0 ? images[key.toLowerCase()] : null;
};

export default getImageByKey;
