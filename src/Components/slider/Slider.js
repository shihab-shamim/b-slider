import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({attributes}) => {
    const { sliders ,icon} = attributes;
    return (
        <Carousel
        // akbar cole last a jaye atke thakbe 
        wrap={true}
        prevIcon={<span className='icon prev'  dangerouslySetInnerHTML={{ __html: icon }} />} // Custom Prev Icon
        nextIcon={
          <span className='icon'
        //   style={{color:"red", backgroundColor:"black", width:"20px",height:"20px"}}
            
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        }
            interval={3000} // 3 seconds per slide
            style={{ width: "700px",  }}
        >
            {sliders.map((slide, index) => (  
                <Carousel.Item key={index}>
                    <div style={{  
                        height: "500px",  
                        overflow: "hidden",  
                        display: "flex",  
                        alignItems: "center",  
                        justifyContent: "center",  
                        backgroundColor: "#ddd"  
                    }}>  
                        <img  
                            className="d-block w-100"  
                            src={slide.img}  
                            alt={`Slide ${index + 1}`}  
                            style={{ height: "100%", objectFit: "cover" }}  
                        />  
                    </div>  

                    <Carousel.Caption style={{  
                        backgroundColor: "rgba(0, 0, 0, 0.6)",  
                        padding: "10px",  
                        borderRadius: "5px",  
                        maxWidth: "80%",  
                        margin: "auto"  
                    }}>  
                        <h3 style={{ fontSize: "18px", margin: "5px 0" }}>{slide.title}</h3>  
                        <p style={{ fontSize: "14px", margin: "0" }}>{slide.desc}</p>  
                    </Carousel.Caption>  
                </Carousel.Item>  
            ))}  
        </Carousel>
    );
};

export default Slider;
