import React, { Component } from "react";
import CardComponent from "./CardComponent";
import "./MainComponent.css";
import $ from "jquery";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          heading: "heading1",
          description: "description",
        },
        {
          heading: "heading2",
          description: "description",
        },
        {
          heading: "heading3",
          description: "description",
        },
        {
          heading: "heading4",
          description: "description",
        },
        {
          heading: "heading5",
          description: "description",
        },
        {
          heading: "heading6",
          description: "description",
        },
        {
          heading: "heading7",
          description: "description",
        },
        {
          heading: "heading8",
          description: "description",
        },
        {
          heading: "heading9",
          description: "description",
        },
        {
          heading: "heading10",
          description: "description",
        },
        {
          heading: "heading11",
          description: "description",
        },
        {
          heading: "heading12",
          description: "description",
        },
        {
          heading: "heading13",
          description: "description",
        },
        {
          heading: "heading14",
          description: "description",
        },
        {
          heading: "heading15",
          description: "description",
        },
        {
          heading: "heading16",
          description: "description",
        },
      ],
    };
  }
   
  render() {
    const { cards } = this.state;
    let cardsCopy = cards;
    let slicedCardsArray = [];
    for (let index = 0; index < cardsCopy.length; index++) {
      let startIndex = index;
      let endIndex = index + 6;
      let slicedCards = cardsCopy.slice(startIndex, endIndex);
      slicedCardsArray.push(slicedCards);
      index = endIndex - 1;
    }
    console.log(slicedCardsArray);
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          {
            slicedCardsArray.map((slicedArray,index)=>{
              return(
                <li data-target="#carouselExampleSlidesOnly" data-slide-to={index} className={index===0?"active":""}></li>
              )
            })
          }
          
         
        </ol>
        <div className="carousel-inner">
          {slicedCardsArray.map((groupOfSix, index) => {
            return (
              <div
                key={index}
                className={
                  index === 0 ? "carousel-item active " : "carousel-item"
                }
              >
                <div class="cardLayout">
                  {groupOfSix.map((card, cardIndex) => {
                    return (
                      <div className="cardHolder" key={cardIndex}>
                        <CardComponent
                          heading={card.heading}
                          description={card.description}
                        ></CardComponent>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    );
  }
}

export default MainComponent;
