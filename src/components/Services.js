import { Card } from "react-bootstrap"
import { DropdownButton, Dropdown, Row, Col, CardGroup } from "react-bootstrap"
import delivery from '../assets/img/delivery.jpg';
import marketing from '../assets/img/marketing.jpg';
import designer from '../assets/img/designer.jpg';
// import  from "react-bootstrap";
// import { Container } from "react-dom"

const Servises = () => {
    return (

        <Row xs={1} md={3} className="g-4 ccardgroup">

            <Col>
                <Card className="ccard">
                    <Card.Img className="cimg" variant="top" src={delivery} />
                    <Card.Body className="cbody">
                        <Card.Title variant="center" className="ctitle">خدمة التوصيل السريع</Card.Title>
                        <Card.Text className="ctext">نقوم بتوصيل طلباتكم لعملائكم بأسرع وقت ممكن!</Card.Text>
                        <div className="cdropdown">
                            <Dropdown drop="down-centered" size="lg">
                                <Dropdown.Toggle size="lg">
                                    الإطلاع على الباقات
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div className="container">
                                        <div className="row rowtest">

                                            <div className="col-12 align-item-center">
                                                <h2 style={{ justifyContent: "center", display: "flex" }}>الخدمة + السعر</h2>
                                                <p style={{ justifyContent: "center", display: "flex" }}> التوصيل الفوري لأي عميل في <span className="drospan"> جدة ومكة </span> </p>
                                                <p style={{ justifyContent: "center", display: "flex" }}> ويكون السعر </p>
                                                <p style={{ justifyContent: "center", display: "flex" }}><span className="drospan"> بناءً على المسافة بين المتجر والعميل </span> </p>
                                            </div>

                                        </div>

                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Body>

                </Card>
            </Col>

            <Col>
                <Card className="ccard">
                    <Card.Img className="cimg" variant="top" src={marketing} />
                    <Card.Body className="cbody">
                        <Card.Title variant="center" className="ctitle">خدمة التسويق الاحترافي</Card.Title>
                        <Card.Text className="ctext">نقوم بالتسويق الفعال لكم!</Card.Text>
                        <div className="cdropdown">
                            <Dropdown drop="down-centered">
                                <Dropdown.Toggle size="lg">
                                    الإطلاع على الباقات
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div className="container">
                                        <div className="row rowtest">

                                            <div className="col-12 align-item-center">
                                                <h2 style={{ justifyContent: "center", display: "flex" }}>الخدمة + السعر</h2>
                                                <p style={{ justifyContent: "center", display: "flex" }}>إنشاء حملة إعلانية على المنصات التالية:</p>
                                                <p style={{ justifyContent: "center", display: "flex" }}>TikTok - <span className="drospan">Snapchat</span> - Instagram</p>
                                                <p style={{ justifyContent: "center", display: "flex" }}>وتشمل تصميم بوست الإعلان</p>
                                                <p style={{ justifyContent: "center", display: "flex" }}> فقط بـ <span className="drospan"> 150 ريال </span> </p>
                                                {/* <ui style={{}}>
                                                    <li style={{ listStyleType: "circle", justifyContent: "start",  }}>سناب شات</li>
                                                    <li style={{ listStyleType: "circle", justifyContent: "start", display: "flex" }}>انستقرام</li>
                                                    <li style={{ listStyleType: "circle", justifyContent: "start", display: "flex" }}>تيك توك</li>
                                                </ui> */}
                                            </div>

                                        </div>

                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="ccard">
                    <Card.Img className="cimg" variant="top" src={designer} />
                    <Card.Body className="cbody">
                        <Card.Title variant="center" className="ctitle">خدمة التصميم الابداعي</Card.Title>
                        <Card.Text className="ctext">نقوم بتصميم أفضل المنشورات الخاصة بمنتجاتكم والتي تساعدكم بشكل فعال في التسويق</Card.Text>
                        <div className="cdropdown">
                            <Dropdown drop="down-centered">
                                <Dropdown.Toggle size="lg">
                                    الإطلاع على الباقات
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div className="container">
                                        <div className="row rowtest">

                                            <div className="col-12 align-item-center">
                                                <h2 style={{ justifyContent: "center", display: "flex" }}>الخدمة + السعر</h2>
                                                <p style={{ justifyContent: "center", display: "flex" }}> تصميم ثلاثة بوستات انستقرام <span className="drospan"> 100 ريال </span> </p>
                                                <p style={{ justifyContent: "center", display: "flex" }}> تصميم منيو احترافي <span className="drospan"> 100 ريال </span> </p>
                                            </div>

                                        </div>

                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
}


export default Servises