import React from 'react'
import { Container } from './styles'
import shoes from '../../images/lego-shoes.jpg'
import room from '../../images/living-room.jpg'

export const DownContent = () => {
  return (
    <Container>

      <div className="text-container">
        <h1>Our latest work</h1>
        <button>View all our work</button>
      </div>
      

      <div className="card-container">

        <div className="card-1">

          <img src={shoes} alt="shoes"/>
          <h6>LEGO - 'LEGO ZX'</h6>

        </div>

        <div className="card-2">

          <img src={room} alt="room" className='second-img'/>
          <h6>Homesense - 'Sunday Brunch Idents'</h6>

        </div>

      </div>

    </Container>
  );
}