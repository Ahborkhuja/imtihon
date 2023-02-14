import image from "../../../utils/image_imports";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import "../main/body.css";
function Body() {
  return (
    <>
      <div style={{ height: "80vh" }}>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.slide1}
              alt="First slide"
            />
            <Carousel.Caption className='text-black caption d-flex flex-column gap-4' style={{}}>
              <h2 className='fText'>Face Makeup Brush</h2>
              <p className="title">
                Skincare Brush Set <br />
                Sale 30% Off
              </p>
              <button className='slidebut'>Shop now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.slide2}
              alt="Second slide"
            />

            <Carousel.Caption className='text-black caption d-flex flex-column gap-4 ' style={{}}>
              <h2 className='fText'>Morneva Shampoo</h2>
              <p className="title">
                Scalpcare Shampoo <br />
                Sale 40% Off
              </p>
              <button className='slidebut'>Shop now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.slide3}
              alt="Third slide"
            />

            <Carousel.Caption className='text-black caption d-flex flex-column gap-4' style={{}}>
              <h2 className='fText'>Runway Lip Palette Red</h2>
              <p className="title">
                Lipscare Lipsticks <br />
                Sale 60% Off
              </p>
              <button className='slidebut'>Shop now</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Body