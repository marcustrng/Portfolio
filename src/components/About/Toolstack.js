import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiLinux,
    SiPostman,
    SiIntellijidea, SiSwagger, SiDocker,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSwagger/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux/>
            </Col>
        </Row>
    );
}

export default Toolstack;
