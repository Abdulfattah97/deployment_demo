import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Awamer-Logo.jpeg";
import andriod from "../assets/img/footer-playstore.png";
import apple from "../assets/img/footer-appstore.png";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/tiktok.svg";
import navIcon3 from "../assets/img/twitter.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}


          <Col size={12} sm={3} className="text-center" >
            <p className="fh">قريباً على...</p>
            <img src={apple}></img>
            <br />
            <img src={andriod}></img>

          </Col>

          <Col size={12} sm={3} className="text-center" >
            <p className="fh">تواصل معنا</p>
            <p>العنوان: جدة، شارع الملك فهد</p>
            <p>الإيميل:  awamer.sa@gmail.com</p>
            <p>الجوال:  6106 604 50 966+</p>
          </Col>

          <Col size={12} sm={3} className="text-center">
            <p className="fh">خدماتنا</p>
            <p>خدمة التوصيل السريع</p>
            <p>خدمة التسويق الإحترافي</p>
            <p>خدمة التصميم</p>
          </Col>

          <Col size={12} sm={3} className="text-center">
            <div className="social-icon">
              <a href="https://www.instagram.com/awamer_sa/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.tiktok.com/@awamer_sa"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://twitter.com/Awamer_sa"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>جميع الحقوق محفوظة 2022</p>
          </Col>

        </Row>

      </Container>
    </footer>
  )
}
