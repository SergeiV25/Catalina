import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img width={420} height={700}
          className="d-block w-100"
          src="./img/v.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>«Предметы не должны нас беспокоить: ведь они не живые существа. Ими пользуются, их кладут на место, среди них живут, они полезны - вот и все.»</h3>
          <p>Жан-Поль Сартр</p>
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={700}
          className="d-block w-100"
          src="./img/s.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>«Не все, кто странствуют, сбились с пути»</h3>
          <p>Дж. Р. Толкиен</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={700}
          className="d-block w-100"
          src="./img/pus.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>«Если вы думаете, что приключение опасно, попробуйте рутину. Она смертельна»</h3>
          <p>Паоло Коэльо</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider
