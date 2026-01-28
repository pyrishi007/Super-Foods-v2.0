import "./AboutUS.css";
import page1 from "../../Assets/Freelance Creative Portfolio Website_2.png";
import { SharedUtlityBasedInfo } from "../../utils/SharedUtlityBasedInfo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUS = () => {
  const settings = { //This is slick whixh is used for crousal like effect
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="AboutUs-page">
        <img className="page" src={page1} alt="" srcset="" />
      </div>
      <div className="page" id="page-2">
        <div className="upper-card-contanier">
          <div className="cards-carousel">
            <Slider {...settings}> 
              {SharedUtlityBasedInfo[0]?.about_usCardsinfo?.map((eachCard) => {
                const {image,title,info} = eachCard //Object Destruturing
                return ( 
                  <div className="upper-whole-carousel-card">
                    <div className="whole-carousel-card">
                      <div className="img-card">
                        <div className="card-image">
                          <img src={image} alt="" srcset="" />
                        </div>
                      </div>
                      <div className="card-info">
                        <p id="text">{title}</p>
                        <p id="info">{info}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
