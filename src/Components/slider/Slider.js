import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Slider = ({ attributes }) => {
  const { sliders, icon } = attributes;

  return (
    <Carousel
    className='caroselWrapper vertical-carousel'
    // className="vertical-carousel
      wrap={true} // Carousel will wrap to the first slide after the last
      prevIcon={
        <span  style={{ position: 'relative', zIndex: '3' }}
          className='icon prev'
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      } // Custom Prev Icon
      nextIcon={
        <span style={{position:"relative",zIndex:"3"}}
          className='icon'
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      } // Custom Next Icon
      interval={3000} // 3 seconds per slide
      // style={{ width: '700px' }}
    >
      {sliders.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
          className='caroselContainer'
            // style={{
            //   position: 'relative',
            //   height: '500px',
            //   overflow: 'hidden',
            //   display: 'flex',
            //   alignItems: 'center',
            //   justifyContent: 'center',
            //   backgroundColor: '#ddd',
            // }}
          >
            {/* Image with Overlay */}
            <img
              className='d-block w-100'
              src={slide.img}
              alt={`Slide ${index + 1}`}
              // style={{ height: '100%', objectFit: 'cover' }}
            />
            <div
            className='overly'
              // style={{
              //   position: 'absolute',
              //   top: 0,
              //   left: 0,
              //   right: 0,
              //   bottom: 0,
              //   backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              //   zIndex: 1, 
              // }}
            ></div>

            {/* Caption */}
            <Carousel.Caption
            className='caption'
              // style={{
              //   position: 'absolute',
              //   bottom: '100px',
              //   left: "100px",
              //   right:"100px",
              //   height:"200px",
              //   backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              //   padding: '10px',
              //   borderRadius: '5px',
              //   maxWidth: '100%',
              //   textAlign: 'center', 
              //   zIndex: 2, 
              // }}
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
