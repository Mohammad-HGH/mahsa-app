import NavbarComponent from "./shared/Navbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import firstImage from "./assets/img/image1.png";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="d-flex flex-row-reverse align-items-center">
            <div>
              <img src={firstImage} alt="" />
            </div>
            <div className="flex-column">
              <h3>Fire Up Your Business With Us</h3>
              <p>
                Are you one of the thousands of Iphone owners who has no idea.{" "}
              </p>

              <InputGroup className="mb-3 mt-3">
                <InputGroup.Text
                  style={{
                    background: "transparent",
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  aria-label="Last name"
                  placeholder="Find services"
                />
                <InputGroup.Text>Search</InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex flex-row-reverse align-items-center">
            <div>
              <img src={firstImage} alt="" />
            </div>
            <div className="flex-column">
              <h3>Fire Up Your Business With Us</h3>
              <p>
                Are you one of the thousands of Iphone owners who has no idea.{" "}
              </p>

              <InputGroup className="mb-3 mt-3">
                <InputGroup.Text
                  style={{
                    background: "transparent",
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  aria-label="Last name"
                  placeholder="Find services"
                />
                <InputGroup.Text>Search</InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex flex-row-reverse align-items-center">
            <div>
              <img src={firstImage} alt="" />
            </div>
            <div className="flex-column">
              <h3>Fire Up Your Business With Us</h3>
              <p>
                Are you one of the thousands of Iphone owners who has no idea.{" "}
              </p>

              <InputGroup className="mb-3 mt-3">
                <InputGroup.Text
                  style={{
                    background: "transparent",
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  aria-label="Last name"
                  placeholder="Find services"
                />
                <InputGroup.Text>Search</InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex flex-row-reverse align-items-center">
            <div>
              <img src={firstImage} alt="" />
            </div>
            <div className="flex-column">
              <h3>Fire Up Your Business With Us</h3>
              <p>
                Are you one of the thousands of Iphone owners who has no idea.{" "}
              </p>

              <InputGroup className="mb-3 mt-3">
                <InputGroup.Text
                  style={{
                    background: "transparent",
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  aria-label="Last name"
                  placeholder="Find services"
                />
                <InputGroup.Text>Search</InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="row">
        <div className="container">
          <div className="col-6">
            <p>
              n publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available.
            </p>
          </div>
          <div className="col-6">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
