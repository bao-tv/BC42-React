import React from 'react';
import './movies.css';
import Seat from './Seat';
import SeatSelect from './SeatSelect';


function Movies() {
  return (
    <div className="container-fluid movie">
        <div className="row">
            <div className="col-8">
                <h1 className='text-center text-warning my-4'>ĐẶT VÉ XEM FILM</h1>
                <h4 className='text-center text-light'>Màn hình</h4>
                <div className="screen"></div>
                <Seat />
            </div>
            <div className="col-4">
                <SeatSelect />
            </div>
        </div>
    </div>
  )
}

export default Movies