import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import img from '../img/3.jpg';
import pezzo from '../img/pezzo.jpg';
import i5 from '../img/5.jpg';

const cardStyles = {
  width: '18rem',
};

const Cards = () => {
  const textData = {
    forza: {
      title: 'La Nostra Forza',
      text: 'La nostra forza risiede nella precisione delle misure dei nostri pezzi. La misurazione accurata dei componenti è alla base della fiducia dei nostri clienti. Per noi, i clienti sono il motore del nostro progresso continuo.',
    },
    lavori: {
      title: 'Nostri Lavori',
      text: "La nostra dedizione costante al miglioramento riflette la nostra volontà di crescere costantemente. Ogni esperienza non solo ci offre nuove opportunità di apprendimento, ma anche il terreno fertile per l'evoluzione.",
    },
    stabilita: {
      title: 'La Nostra Stabilita',
      text: "La nostra stabilità è la roccia su cui costruiamo il nostro cammino verso l'eccellenza, resistendo alle sfide con fiducia. In ogni momento, siamo saldi nel nostro impegno, sostenendo la forza di un progresso duraturo e ispiratore.",
    },
  };

  return (
    <Container
      style={{
        paddingTop: '0rem',
        paddingBottom: '2rem',
        margin: '0, auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '9rem',
        paddingRight: '5rem',
      }}>
      <Row>
        <Col>
          <Card style={cardStyles}>
            <Card.Img variant="top" height={350} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Scopri di Piu</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
