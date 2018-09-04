import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  UncontrolledCarousel,
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardDeck,
  CardTitle, 
  CardSubtitle, 
  Button} from 'reactstrap';
import ExpandText from 'react-expand-text';
import "./Stuff.css"
 
class Stuff extends Component {
  render() {
    return (
      <div>
      <div>
        <h2 id="stuff">STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>

      <div>
        <CardDeck className="detail-card">
          <CardBody className="card">
            <CardTitle><h2 id="card-h2">;oseijfv;oijsefv</h2></CardTitle>
              <CardSubtitle>;oakjef</CardSubtitle>
              <CardText id="card-abv">;lajsdlvkjhsdv</CardText>
              <CardText id="card-description">
                
              </CardText>
              <CardText style={{color: "grey"}}>Click text for full description &#9663;</CardText>
            {/* Opens modal */}
              <Button id="card-button" size="sm" color="primary" onClick={this.toggle}>
                Be Notified!
              </Button>
          </CardBody>
          <CardBody className="card">
            <CardTitle><h2 id="card-h2">;oseijfv;oijsefv</h2></CardTitle>
              <CardSubtitle>;oakjef</CardSubtitle>
              <CardText id="card-abv">;lajsdlvkjhsdv</CardText>
              <CardText id="card-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos molestias, eius magni obcaecati harum blanditiis culpa hic. Maxime quaerat voluptatum possimus harum ab dicta cumque quisquam asperiores, expedita sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos molestias, eius magni obcaecati harum blanditiis culpa hic. Maxime quaerat voluptatum possimus harum ab dicta cumque quisquam asperiores, expedita sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos molestias, eius magni obcaecati harum blanditiis culpa hic. Maxime quaerat voluptatum possimus harum ab dicta cumque quisquam asperiores, expedita sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos molestias, eius magni obcaecati harum blanditiis culpa hic. Maxime quaerat voluptatum possimus harum ab dicta cumque quisquam asperiores, expedita sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos molestias, eius magni obcaecati harum blanditiis culpa hic. Maxime quaerat voluptatum possimus harum ab dicta cumque quisquam asperiores, expedita sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos molestias, eius magni obcaecati harum blanditiis culpa hic. Maxime quaerat voluptatum possimus harum ab dicta cumque quisquam asperiores, expedita sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos molestias, eius magni obcaecati harum blanditiis culpa hic. Maxime quaerat voluptatum possimus harum ab dicta cumque quisquam asperiores, expedita sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos molestias, eius magni obcaecati harum blanditiis culpa hic. Maxime quaerat voluptatum possimus harum ab dicta cumque quisquam asperiores, expedita sapiente!
              </CardText>
              <CardText style={{color: "grey"}}>Click text for full description &#9663;</CardText>
            {/* Opens modal */}
              <Button id="card-button" size="sm" color="primary" onClick={this.toggle}>
                Be Notified!
              </Button>
          </CardBody>
          <CardBody className="card">
            <CardTitle><h2 id="card-h2">;oseijfv;oijsefv</h2></CardTitle>
              <CardSubtitle>;oakjef</CardSubtitle>
              <CardText id="card-abv">;lajsdlvkjhsdv</CardText>
              <CardText id="card-description">
                
              </CardText>
              <CardText style={{color: "grey"}}>Click text for full description &#9663;</CardText>
            {/* Opens modal */}
              <Button id="card-button" size="sm" color="primary" onClick={this.toggle}>
                Be Notified!
              </Button>
          </CardBody>
        </CardDeck>
      </div>
    </div>
    );
  }
}
 
export default Stuff;