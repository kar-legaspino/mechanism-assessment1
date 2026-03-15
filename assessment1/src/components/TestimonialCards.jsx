import { Card, Image } from "react-bootstrap";

function TestimonialCards({ img, name, testimony, lastUploaded }) {
  return (
    <div className="d-flex flex-column h-100">
      <Card
        className="rounded flex-grow-1 d-flex flex-column shadow px-3 py-1"
        style={{ border: "1px solid var(--primary)" }}
      >
        <Card.Body className="d-flex flex-column flex-grow-1 align-items-center">
          <div className="d-flex justify-content-between align-items-center w-100 mb-3">
            <div className="d-flex">
              <span style={{ color: "var(--primary)", fontSize: "1.2rem" }}>
                ★★★★★
              </span>
            </div>
            <span
              className="badge rounded-pill px-2 py-1 fw-semibold"
              style={{ backgroundColor: "var(--accent-light)", color: "white" }}
            >
              5.0
            </span>
          </div>
          <Card.Text className="text-justify">{testimony}</Card.Text>
        </Card.Body>
      </Card>

      <div className="d-flex align-items-center my-2 flex-shrink-0">
        <Image
          src={img}
          roundedCircle
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
        <div className="ms-2">
          <p
            className="text-start mb-0 pb-0 fw-semibold"
            style={{ fontSize: "0.9rem", lineHeight: "1.2", color: "#2c3e50" }}
          >
            {name}
          </p>
          <p
            className="text-start text-muted my-0 py-0"
            style={{ fontSize: "0.75rem", lineHeight: "1.2" }}
          >
            {lastUploaded}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
