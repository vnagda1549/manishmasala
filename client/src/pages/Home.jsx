import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../css/HomeStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <section className="product-images-section">
          <Container>
            <Row>
              <Col md={12} className="product-image" data-aos="fade-in">
                <Carousel
                  indicators={false}
                  controls={true}
                  interval={3000}
                  wrap={true}
                >
                  <Carousel.Item>
                    <Row>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/aamchurpowder.jpg"
                          alt="Malavani Masala"
                        />
                        {/* <Carousel.Caption>
                          <h3>Malavani Masala</h3>
                          <p>High-quality spices to enhance your meals.</p>
                        </Carousel.Caption> */}
                      </Col>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/acharsambhar.jpg"
                          alt="Garam Masala"
                        />
                        {/* <Carousel.Caption>
                          <h3>Garam Masala</h3>
                          <p>Aromatic blends for a delightful experience.</p>
                        </Carousel.Caption> */}
                      </Col>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/agrimasala.jpg"
                          alt="Cumin"
                        />
                        {/* <Carousel.Caption>
                          <h3>Cumin</h3>
                          <p>Freshly sourced spices from the best farms.</p>
                        </Carousel.Caption> */}
                      </Col>
                    </Row>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Row>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/blackpepper.jpg"
                          alt="Turmeric"
                        />
                        {/* <Carousel.Caption>
                          <h3>Turmeric</h3>
                          <p>Golden spice for health and flavor.</p>
                        </Carousel.Caption> */}
                      </Col>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/chillipowder.jpg"
                          alt="Chili Powder"
                        />
                        {/* <Carousel.Caption>
                          <h3>Chili Powder</h3>
                          <p>Adds a spicy kick to any dish.</p>
                        </Carousel.Caption> */}
                      </Col>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/garammasala.jpg"
                          alt="Coriander"
                        />
                        {/* <Carousel.Caption>
                          <h3>Coriander</h3>
                          <p>Essential spice with a citrusy aroma.</p>
                        </Carousel.Caption> */}
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/garammasala.jpg"
                          alt="Coriander"
                        />
                        {/* <Carousel.Caption>
                          <h3>Coriander</h3>
                          <p>Essential spice with a citrusy aroma.</p>
                        </Carousel.Caption> */}
                      </Col>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/malavanimasala.jpg"
                          alt="Coriander"
                        />
                        {/* <Carousel.Caption>
                          <h3>Coriander</h3>
                          <p>Essential spice with a citrusy aroma.</p>
                        </Carousel.Caption> */}
                      </Col>
                      <Col md={4}>
                        <img
                          className="d-block w-100"
                          src="/images/turmericpowder.jpg"
                          alt="Coriander"
                        />
                        {/* <Carousel.Caption>
                          <h3>Coriander</h3>
                          <p>Essential spice with a citrusy aroma.</p>
                        </Carousel.Caption> */}
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5 text-center slogans-section">
          <h2 className="animate__animated animate__fadeInUp">Slogans</h2>
          <p className="animate__animated animate__fadeInUp">
            "Bringing the essence of India to your kitchen."
          </p>
          <p
            className="animate__animated animate__fadeInUp"
            data-aos-delay="200"
          >
            "Spice up your life with our authentic blends."
          </p>
          <p
            className="animate__animated animate__fadeInUp"
            data-aos-delay="400"
          >
            "Quality spices for quality meals."
          </p>
        </section>

        <section className="my-5 text-center">
          <Container>
            <Row>
              <Col md={12} className="info-card" data-aos="fade-right">
                <h2 className="animate__animated animate__fadeInRight">
                  About Our Brand
                </h2>
                <p>
                  Founded in 2023, ManishMasala has come a long way from its
                  beginnings. When we first started out, our passion for
                  providing the best spices drove us to start our own business.
                </p>
                <p>
                  We hope you enjoy our products as much as we enjoy offering
                  them to you. If you have any questions or comments, please
                  don't hesitate to contact us.
                </p>
                <p>
                  <strong>Sincerely,</strong>
                  <br /> Founder
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5 spice-info-section">
          <Container>
            <Row className="align-items-center" data-aos="fade-right">
              <Col md={4}>
                <img
                  src="/images/garammasala.jpg"
                  alt="Garam Masala"
                  className="img-fluid"
                />
              </Col>
              <Col md={8}>
                <h3>Garam Masala</h3>
                <p>
                  Garam Masala is a traditional Indian spice blend known for its
                  warm, aromatic, and complex flavors. It is used to enhance the
                  flavor of a wide variety of dishes, from curries and soups to
                  marinades and roasted vegetables.
                </p>
              </Col>
            </Row>
            <Row className="align-items-center" data-aos="fade-left">
              <Col md={8}>
                <h3>Turmeric</h3>
                <p>
                  Turmeric is a vibrant yellow-orange spice commonly used in
                  Indian and Southeast Asian cuisines. It is known for its
                  earthy, slightly bitter flavor and strong coloring properties.
                  Turmeric is also revered for its medicinal properties and is a
                  key ingredient in traditional Ayurvedic medicine.
                </p>
              </Col>
              <Col md={4}>
                <img
                  src="/images/turmericpowder.jpg"
                  alt="Turmeric"
                  className="img-fluid"
                />
              </Col>
            </Row>
            <Row className="align-items-center" data-aos="fade-right">
              <Col md={4}>
                <img
                  src="/images/chillipowder.jpg"
                  alt="Chillipowder"
                  className="img-fluid"
                />
              </Col>
              <Col md={8}>
                <h3>Chilli Powder</h3>
                <p>
                  Chilli powder, also known as chili powder, is a prominent
                  spice in Indian cuisine, made from dried and ground red
                  chilies. It is a staple in various regional dishes across
                  India and is prized for its ability to add heat, color, and
                  flavor to food. Chilli powder is essential in creating the
                  spicy taste that Indian food is famous for.{" "}
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          className="my-5 text-center process-section"
          data-aos="fade-up"
        >
          <h2 className="animate__animated animate__fadeInUp">Our Process</h2>
          <p>
            Our spices are carefully selected from the best farms, ensuring that
            they are of the highest quality. We follow traditional methods of
            processing and packaging to maintain the authenticity and flavor of
            the spices.
          </p>
          <p>
            Each spice is handled with utmost care and hygiene, making sure that
            the final product is fresh and pure.
          </p>
        </section>

        <section
          className="my-5 text-center culture-section"
          data-aos="fade-up"
        >
          <h2 className="animate__animated animate__fadeInUp">
            Culture of India
          </h2>
          <p>
            India is known for its rich culture and heritage, which is reflected
            in its cuisine. Spices play a vital role in Indian cooking, adding
            flavor, aroma, and color to the dishes.
          </p>
          <p>
            From the vibrant streets of Delhi to the serene backwaters of
            Kerala, the diversity in Indian food is immense. Each region has its
            own unique spice blends and cooking techniques.
          </p>
          <img
            src="/images/indianspices.jpg"
            alt="Culture of India"
            className="img-fluid animated-image"
          />
        </section>

        <section className="my-5 text-center additional-images-section">
          <Container>
            <Row>
              <Col md={4} data-aos="fade-up">
                <img
                  src="/images/malavanimasala.jpg"
                  alt="Malavani Masala"
                  className="additional-image img-fluid"
                />
              </Col>
              <Col md={4} data-aos="fade-up" data-aos-delay="200">
                <img
                  src="/images/blackpepper.jpg"
                  alt="Black Paper"
                  className="additional-image img-fluid"
                />
              </Col>
              <Col md={4} data-aos="fade-up" data-aos-delay="400">
                <img
                  src="/images/agrimasala.jpg"
                  alt="Agri Masala"
                  className="additional-image img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
