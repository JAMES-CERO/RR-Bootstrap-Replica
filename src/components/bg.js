import Card from 'react-bootstrap/Card';

const BgCard = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://www.instacart.com/image-server/343x322/www.instacart.com/assets/location-vertical/lps/hero-grocery-delivery-54629070f10ca6cc23ced1dce9a390fe4302e9461c21b530f282d557c8259b2d.png" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Order groceries for delivery <br /> or pickup today</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default BgCard;