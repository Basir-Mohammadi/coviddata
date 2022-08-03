import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import africa from '../assets/africa.png';
import europe from '../assets/europe.png';
import asia from '../assets/asia.png';
import australia from '../assets/australia.png';
import north from '../assets/north.png';
import south from '../assets/south.png';

const Continent = () => (
  <div style={{ overflow: 'none' }}>
    <Carousel fade>
      <Carousel.Item>
        <img
          src={africa}
          className="d-block"
          alt="stock"
        />
        <Carousel.Caption>
          <h3>AFRICA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={asia}
          className="d-block"
          alt="stock"
        />
        <Carousel.Caption>
          <h3>ASIA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={europe}
          className="d-block"
          alt="stock"
        />
        <Carousel.Caption>
          <h3>EUROPE</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={australia}
          className="d-block"
          alt="stock"
        />
        <Carousel.Caption>
          <h3>AUSTRALIA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={north}
          alt="stock2"
          className="d-block"
        />
        <Carousel.Caption>
          <h3>NORTH AMERICA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={south}
          alt="stock4"
          className="d-block"
        />
        <Carousel.Caption>
          <h3>SOUTH AMERICA</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Continent;
