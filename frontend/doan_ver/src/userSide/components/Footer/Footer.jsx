import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./footer.css";
import logo from "../../../assets/images/eco-logo.png";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" className="mb-4" md="12">
                        <div className="footer__quick-links">
                            <h1 className="text-white">SHIP HÀNG TOÀN QUỐC</h1>
                        </div>
                        <p className="footer__text mt-4">
                            Mọi nơi trên đất nước Việt Nam
                        </p>
                    </Col>
                    <Col lg="5" className="mb-4" md="3">
                        <div className="footer__quick-links">
                            <h1 className="text-white">TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM</h1>
                        </div>
                        <p className="footer__text mt-4">
                            Chúng tôi không chiu bất kỳ trách nhiệm nào đối với việc người
                            dùng nhận hàng bị lỗi hay sản phẩm bị hỏng
                        </p>
                    </Col>
                    <Col lg="3" md="3">
                        <div className="footer__quick-links">
                            <h1 className="text-white">THÔNG TIN LIÊN HỆ</h1>
                            <ListGroup className="mb-3 footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-map-pin-line"></i>
                                    </span>
                                    <p>399 Quang Trung Hà Đông</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-phone-line"></i>
                                    </span>
                                    <p>0377315794</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-mail-line"></i>
                                    </span>
                                    <p>nguyenhaidangcode@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col md="12">
                        <p className="footer__copyright">
                            Copyrignt {year} developed by Hai Dang All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
