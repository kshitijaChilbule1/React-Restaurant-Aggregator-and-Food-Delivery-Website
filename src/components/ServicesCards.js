import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function ServicesCards() {
  return (
    <Container style={{marginBottom:'100px'}}>
      <Row>
        <Col> <Col>
          <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
            <Card.Img variant="top" src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=400:190;*,*" />
            <Card.Body>
              <Card.Title>Order Online</Card.Title>
              <Card.Text>
                Stay home and order to your doorstep.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col></Col>
        <Col> <Col>
          <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
            <Card.Img variant="top" src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=400:190;*,*" />
            <Card.Body>
              <Card.Title>Take Away</Card.Title>
              <Card.Text>
              Pick your food from our restaurant.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col></Col>
        <Col> <Col>
          <Card style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
            <Card.Img variant="top" src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=400:190;*,*" />
            <Card.Body>
              <Card.Title>Book Table</Card.Title>
              <Card.Text>
                Explore the city’s top restaurants.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col></Col>
      </Row>
    </Container>
  );
}

export default ServicesCards;