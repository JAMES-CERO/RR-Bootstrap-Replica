import Card from 'react-bootstrap/Card';

const BgCard = () => {
  return (
    <Card className="bg-dark text-black">
      <Card.Img src="https://www.instacart.com/image-server/343x322/www.instacart.com/assets/location-vertical/lps/hero-grocery-delivery-54629070f10ca6cc23ced1dce9a390fe4302e9461c21b530f282d557c8259b2d.png" alt="Card image" height='600px'  />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:'4em'}}>Order groceries for delivery <br /> or pickup today</Card.Title>
        <Card.Text style={{ fontSize: "2em"}}>
        Whatever you want from local stores, brought right to your door.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default BgCard;