// import { useState } from "react";
import "./App.css";
import { Container, Navbar, Nav, Row, Col, Image } from "react-bootstrap";

//assets
import heroImage from "./assets/react.svg";
import China from "./assets/china.png";
import Collosseum from "./assets/colloseum.png";
import Eiffel from "./assets/eiffel.png";
import Liberty from "./assets/liberty.png";
import Sample from "./assets/sample.png";
import Placeholder from "./assets/placeholder.jpg";

//components
import TestimonialCards from "./components/TestimonialCards";

function App() {
  return (
    <>
      <Navbar
        expand="lg"
        className="mb-3 mb-lg-5 px-4 py-3"
        style={{
          fontFamily: "var(--sans)",
          backgroundColor: "var(--bg-secondary)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid var(--gray-200)",
        }}
      >
        <Navbar.Brand
          href="#home"
          className="fw-bold fs-4"
          style={{ color: "var(--primary)" }}
        >
          <i className="fas fa-leaf me-2"></i>
          Eco Travel
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link
              href="#home"
              className="mx-3 fw-semibold"
              style={{ color: "var(--text)", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "var(--accent)")}
              onMouseOut={(e) => (e.target.style.color = "var(--text)")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#testimonial"
              className="mx-3 fw-semibold"
              style={{ color: "var(--text)", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "var(--accent)")}
              onMouseOut={(e) => (e.target.style.color = "var(--text)")}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              href="#gallery"
              className="mx-3 fw-semibold"
              style={{ color: "var(--text)", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "var(--accent)")}
              onMouseOut={(e) => (e.target.style.color = "var(--text)")}
            >
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="px-3 py-3 responsive-main-container">
        <section
          className="hero-section"
          style={{
            minHeight: "500px",
            backgroundColor: "var(--bg-secondary)",
            padding: "2rem",
            borderRadius: "8px",
          }}
        >
          <Row className="align-items-center">
            <Col
              lg={5}
              md={6}
              sm={12}
              xs={12}
              className="mb-4 mb-lg-0 mt-lg-3 d-flex justify-content-center align-items-center h-100"
            >
              <Image
                src={Sample}
                rounded
                style={{ width: "100%", maxWidth: "400px" }}
                className="d-block"
              />
            </Col>
            <Col
              lg={7}
              md={6}
              sm={12}
              xs={12}
              className="text-center text-lg-start"
            >
              <h1 className="hero-title mb-3">This is the Hero Section</h1>
              <p className="hero-subtitle mb-4">
                This is a sample paragraph: Discover the Eco Travel water jug -
                the perfect companion for eco-conscious families. Made from
                recycled materials with a durable, leak-proof design that keeps
                your water cool for hours.
              </p>
              <button
                className="btn btn-lg px-4 py-3"
                style={{
                  backgroundColor: "var(--primary)",
                  border: "none",
                  borderRadius: "30px",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  fontFamily: "var(--sans)",
                  boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "var(--primary-dark)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(52, 152, 219, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "var(--primary)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(52, 152, 219, 0.3)";
                }}
              >
                Check It Out
              </button>
            </Col>
          </Row>
        </section>

        <section
          id="testimonial"
          className="testimonial-section mt-4 mt-lg-5"
          style={{ minHeight: "200px" }}
        >
          <hr />
          <h2 className="text-center testimonial-title mb-1">TESTIMONIAL</h2>
          <p className="text-center testimonial-desc">
            This is the Testimonial section.
          </p>

          <Row className="d-flex" style={{ marginTop: 40 }}>
            <Col
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className="d-flex flex-column mb-4 mb-lg-0"
            >
              <TestimonialCards
                img={Placeholder}
                name="Min Yoongi"
                testimony="The Eco Travel jug has been a game-changer for our family camping trips and concerts. It's incredibly durable and keeps our water ice-cold for over 24 hours. Highly recommended for any outdoor adventure."
                lastUploaded="2023-10-01"
              />
            </Col>
            <Col
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className="d-flex flex-column mb-4 mb-lg-0"
            >
              <TestimonialCards
                img={Placeholder}
                name="Armin Arlert"
                testimony="As someone who cares about sustainability, I love that the Eco Travel jug is made from 100% recycled materials. It's held up perfectly through multiple trips and training. The wide mouth makes it easy to add ice and clean, and it never leaks. A must-have!"
                lastUploaded="2024-12-17"
              />
            </Col>
            <Col
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className="d-flex flex-column mb-4 mb-lg-0"
            >
              <TestimonialCards
                img={Placeholder}
                name="Percy Jackson"
                testimony="Our family of four takes the Eco Travel jug everywhere. It's incredibly sturdy and the temperature retention is amazing. It's great to have during quests too! Annabeth and Grover approved."
                lastUploaded="2025-12-28"
              />
            </Col>
          </Row>
          <hr />
        </section>

        <section
          id="gallery"
          className="gallery-section mt-4 mt-lg-5"
          style={{ minHeight: "200px" }}
        >
          <h2 className="gallery-title mb-1 text-center">GALLERY</h2>
          <p className="gallery-desc text-center">
            This is the Gallery section.
          </p>

          <Row
            className="p-4 mx-2 mt-4 mb-3 rounded"
            style={{ backgroundColor: "var(--primary-subtle)" }}
          >
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
            >
              <Image
                src={China}
                rounded
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  border: "16px solid white",
                }}
                className="shadow"
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <h1 className="mb-3 text-start">Eco-Friendly Materials</h1>
                <p>
                  This is just sample text crafted to make the gallery look
                  full. Crafted from 100% recycled BPA-free plastics, our water
                  jug reduces environmental impact while maintaining the highest
                  safety standards. Every purchase helps create a more
                  sustainable future for our planet.
                </p>
              </div>
            </Col>
          </Row>

          <Row
            className="p-4 mx-2 my-3 rounded"
            style={{ backgroundColor: "var(--primary-subtle)" }}
          >
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <h1 className="mb-3 text-start">
                  Superior Temperature Retention
                </h1>
                <p>
                  This is just sample text crafted to make the gallery look full
                  (1). Advanced insulation technology keeps your water ice-cold
                  for up to 36 hours or hot for 12 hours. Perfect for long
                  hikes, beach days, or any outdoor adventure where you need
                  refreshment on demand.
                </p>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
            >
              <Image
                src={Collosseum}
                rounded
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  border: "16px solid white",
                }}
                className="shadow"
              />
            </Col>
          </Row>

          <Row
            className="p-4 mx-2 my-3 rounded"
            style={{ backgroundColor: "var(--primary-subtle)" }}
          >
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
            >
              <Image
                src={Eiffel}
                rounded
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  border: "16px solid white",
                }}
                className="shadow"
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <h1 className="mb-3 text-start">Family-Sized Capacity</h1>
                <p>
                  This is just sample text crafted to make the gallery look full
                  (2). With a generous 2-liter capacity, our jug is perfect for
                  families and groups. The wide mouth makes it easy to add ice,
                  fruits, or herbs for infused water, while the comfortable
                  handle ensures easy carrying.
                </p>
              </div>
            </Col>
          </Row>

          <Row
            className="p-4 mx-2 my-3 rounded"
            style={{ backgroundColor: "var(--primary-subtle)" }}
          >
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="text-start">
                <h1 className="mb-3">Leak-Proof & Durable Design</h1>
                <p>
                  This is just sample text crafted to make the gallery look full
                  (3) ueue. Engineered with military-grade durability and a
                  triple-seal cap system that prevents any leaks. Built to
                  withstand drops, extreme temperatures, and daily use. Our
                  satisfaction guarantee ensures you get a product that lasts.
                </p>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
            >
              <Image
                src={Liberty}
                rounded
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  border: "16px solid white",
                }}
                className="shadow"
              />
            </Col>
          </Row>
        </section>
      </Container>

      <footer
        style={{
          background: "var(--gray-800)",
          color: "white",
          padding: "3rem 0 1rem",
        }}
        className="mt-3 mt-lg-4 py-4 py-md-5 px-3 px-md-4"
      >
        <Container>
          <Row className="mb-4">
            <Col lg={4} md={6} className="mb-4">
              <h5 className="mb-3" style={{ color: "var(--primary-light)" }}>
                About Eco Travel
              </h5>
              <p style={{ color: "var(--gray-300)", lineHeight: "1.6" }}>
                Sample text for footer! Eco Travel is committed to providing
                sustainable hydration solutions for families and adventurers.
                Our eco-friendly water jugs combine durability, functionality,
                and environmental responsibility to help you travel greener.
              </p>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <h5 className="mb-3" style={{ color: "var(--primary-light)" }}>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="#home"
                    style={{ color: "var(--gray-300)", textDecoration: "none" }}
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--accent-light)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.color = "var(--gray-300)")
                    }
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#testimonial"
                    style={{ color: "var(--gray-300)", textDecoration: "none" }}
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--accent-light)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.color = "var(--gray-300)")
                    }
                  >
                    Testimonials
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#gallery"
                    style={{ color: "var(--gray-300)", textDecoration: "none" }}
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--accent-light)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.color = "var(--gray-300)")
                    }
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg={4} md={12} className="mb-4">
              <h5 className="mb-3" style={{ color: "var(--primary-light)" }}>
                Stay Updated
              </h5>
              <p style={{ color: "var(--gray-300)", marginBottom: "1rem" }}>
                Subscribe to get exclusive deals on eco-friendly travel gear and
                sustainability tips!
              </p>

              <form className="d-flex flex-column flex-sm-row gap-2 mb-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  style={{
                    borderRadius: "25px",
                    border: "1px solid var(--gray-600)",
                    backgroundColor: "var(--gray-700)",
                    color: "white",
                    padding: "0.5rem 1rem",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--gray-600)")
                  }
                />
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "var(--primary)",
                    border: "none",
                    borderRadius: "25px",
                    color: "white",
                    padding: "0.5rem 1.5rem",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "var(--primary-dark)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "var(--primary)")
                  }
                >
                  Subscribe
                </button>
              </form>

              <div className="d-flex gap-3 mt-3">
                <a
                  href="#"
                  style={{
                    color: "var(--gray-400)",
                    fontSize: "1.5rem",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.color = "var(--accent-light)")
                  }
                  onMouseOut={(e) => (e.target.style.color = "var(--gray-400)")}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  style={{
                    color: "var(--gray-400)",
                    fontSize: "1.5rem",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.color = "var(--accent-light)")
                  }
                  onMouseOut={(e) => (e.target.style.color = "var(--gray-400)")}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  style={{
                    color: "var(--gray-400)",
                    fontSize: "1.5rem",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.color = "var(--accent-light)")
                  }
                  onMouseOut={(e) => (e.target.style.color = "var(--gray-400)")}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  style={{
                    color: "var(--gray-400)",
                    fontSize: "1.5rem",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.color = "var(--accent-light)")
                  }
                  onMouseOut={(e) => (e.target.style.color = "var(--gray-400)")}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Col>
          </Row>

          <hr style={{ borderColor: "var(--gray-600)", margin: "2rem 0" }} />

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-0" style={{ color: "var(--gray-400)" }}>
              &copy; {new Date().getFullYear()} Eco Travel. All rights reserved.
            </p>
            <div className="d-flex gap-4 mt-2 mt-md-0">
              <a
                href="#"
                style={{
                  color: "var(--gray-400)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = "var(--primary-light)")
                }
                onMouseOut={(e) => (e.target.style.color = "var(--gray-400)")}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{
                  color: "var(--gray-400)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = "var(--primary-light)")
                }
                onMouseOut={(e) => (e.target.style.color = "var(--gray-400)")}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
