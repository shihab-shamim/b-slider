import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// present code 

const Slider = ({ attributes }) => {
  const { sliders, icon ,effect,autoPlay,arrowButton,showPagination,interrogation,wrap} = attributes;

  return (
    <Carousel
    pause={interrogation?"hover":false}
    controls={arrowButton}
    indicators={showPagination}
    slide={true}
    fade={effect==="fade"?true:false}
    touch={true}
    
   keyboard={true}
    className='caroselWrapper vertical-carousel'
      wrap={wrap} 
      prevIcon={
        <span  style={{ position:"relative", zIndex: '3' }}
          className='icon prev'
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      } 
      nextIcon={
        <span style={{position:"relative",zIndex:"3"}}
          className='icon'
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      } 
      interval={autoPlay?.enabled?autoPlay?.interval:autoPlay?.time} 
      // pause={"hover"}
      
    >
      {sliders.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
          className='caroselContainer'
           
          >
            {/* Image with Overlay */}
            <img
              className='d-block w-100'
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
            <div
            className='overly'
             
            ></div>

            {/* Caption */}
            <Carousel.Caption
            className='caption'
             
            >
              <h3 style={{ fontSize: '18px', margin: '5px 0' }}>{slide.title}</h3>
              <p style={{ fontSize: '14px', margin: '0' }}>{slide.desc}</p>
             {slide?.buttonTest && <Button  variant="outline-light" style={{ fontSize: '14px', marginTop: '50px' }}>{slide?.buttonTest}</Button>}
              

            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
