import React from "react";
import Gallery from "../../Components/Gallery/Gallery";

import fireplace1 from "../../images/fireplace1lg.jpg";

import productsList from '../../JsonLists/itemsList'


const mainHeader = "קונדימנטום קורוס בליקרה נונסט";
const mainText = <span>גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן לורם איפסום דולור סיט אמט,<br/><br/> קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</span>

const MainGallery = () => {
  return <Gallery mainHeader={mainHeader} mainText={mainText} mainImage={fireplace1} galleryItems={productsList} />;
};

export default MainGallery;
