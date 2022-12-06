import React from "react";
import {Col, Row} from "react-bootstrap";
import CertificationCards from "../About/CertificationCards";
import CloudApplicationDevelopmentFoundations
    from "../../Assets/Certifications/CloudApplicationDevelopmentFoundations.png";
import IBMFullStackSoftwareDeveloper from "../../Assets/Certifications/IBMFullStackSoftwareDeveloper.png";

function Certifications() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={4} className="project-card">
                <CertificationCards
                    imgPath={IBMFullStackSoftwareDeveloper}
                    isBlog={false}
                    title="IBM Full Stack Software Developer Specialization"
                    ghLink="https://www.coursera.org/account/accomplishments/specialization/certificate/8UHKKBS8F3PJ"
                />
            </Col>

            <Col md={4} className="project-card">
                <CertificationCards
                    imgPath={CloudApplicationDevelopmentFoundations}
                    isBlog={false}
                    title="Cloud Application Development Foundations Specialization"
                    ghLink="https://www.coursera.org/account/accomplishments/specialization/certificate/4PJNMAHZM55S"
                />
            </Col>
        </Row>
    );
}

export default Certifications;
