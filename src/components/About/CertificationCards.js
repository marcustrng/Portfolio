import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {SiCoursera} from "react-icons/si";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{height: '16rem'}}/>
            <Card.Body>
                <Card.Title className="purple">{props.title}</Card.Title>
                <Button variant="primary" href={props.ghLink} target="_blank">
                    <SiCoursera/> &nbsp;
                    Coursera
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
