import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./WhoWeAre.scss";

import fireplace1 from "../../images/fireplace1lg.jpg";
import fireplace2 from "../../images/fireplace2lg.jpg";
import fireplace3 from "../../images/fireplace3lg.jpg";

const WhoWeAre = () => {
  return (
    <Container fluid={true} className="who-container">
      <div className="who-header">
        <h1 className="who-headers-text">לורם איפסום דולור</h1>
      </div>
      <Row className="who-row">
        <Col md={6} className="who-col who-img-col" style={{ backgroundImage: `url(${fireplace1})` }}></Col>
        <Col md={6} className="who-col">
          <p>
            לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. להאמית
            קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט.
            סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום
            בלינך רוגצה. לפמעט מוסן מנת. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
            ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
          </p>
        </Col>
      </Row>
      <Row className="who-row">
        <Col md={6} className="who-col who-col-right">
          <p>
            מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון
            ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק.
            קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי. הועניב היושבב שערש שמחויט - שלושע
            ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא
            התידם הכייר וק.
          </p>
        </Col>
        <Col md={6} className="who-col who-img-col" style={{ backgroundImage: `url(${fireplace3})` }}></Col>
      </Row>
      <Row className="who-row">
        <Col md={6} className="who-col who-img-col" style={{ backgroundImage: `url(${fireplace2})` }}></Col>
        <Col md={6} className="who-col">
          <p>
            לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. להאמית
            קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט.
            סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום
            בלינך רוגצה. לפמעט מוסן מנת. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
            ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
          </p>
        </Col>
      </Row>
      <Row className="who-lower-row">
        <div className="who-lower-row-container">
            <p>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.
              קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת
              יבש, כאנה ניצאחו נמרגי שהכים תוק
            </p>
          <Link to="/contact" className="who-lower-button">
            צור קשר
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default WhoWeAre;
