import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Demos.css";
import { getWhatsAppURL } from "../../config/whatsapp";

export default function Demos() {
  const demos = [
    {
      title: "Birthday Surprise Website",
      img: "https://images.pexels.com/photos/27177969/pexels-photo-27177969.jpeg",
      link: "https://friend-raj.vercel.app/",
    },
    {
      title: "Love / Couple Website",
      img: "https://images.pexels.com/photos/4044169/pexels-photo-4044169.jpeg",
      link: "https://your-demo-link-2.com",
    },
    {
      title: "Proposal Page",
      img: "https://images.pexels.com/photos/11643622/pexels-photo-11643622.jpeg",
      link: "https://your-demo-link-3.com",
    },
    {
      title: "Wedding Invitation",
      img: "https://images.pexels.com/photos/30232952/pexels-photo-30232952.jpeg",
      link: "https://your-demo-link-4.com",
    },
  ];

  return (
    <section className="demos" id="demos">
      <Container>
        <div className="demos-header">
          <h2>Demo Websites</h2>
          <p>Preview real examples before you decide</p>
        </div>

        <Row>
          {demos.map((demo, i) => (
            <Col md={3} sm={6} xs={12} key={i} className="mb-4">
              <Card className="demo-card">
                <Card.Img variant="top" src={demo.img} />
                <Card.Body className="text-center">
                  <h5>{demo.title}</h5>

                  <div className="demo-actions">
                    <Button
                      variant="outline-success"
                      href={demo.link}
                      target="_blank"
                    >
                      View Demo
                    </Button>

                    <Button
                      variant="success"
                      href={getWhatsAppURL(
                        `I liked the ${demo.title} demo. I want something similar.`
                      )}
                      target="_blank"
                    >
                      Order Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
