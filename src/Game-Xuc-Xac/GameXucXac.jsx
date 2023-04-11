import React from 'react';
import './GameXucXac.css';
import ThongTinGame from './ThongTinGame';
import XucXac from './XucXac';

function Game_Xuc_Xac() {
  return (
    <div className='game'>
      <div className="title-game text-center mt-5 display-4">Game Xúc Xắc</div>
      <div className="row text-center">
        <div className="col-5">
          <button className='btnGame btn btn-primary'>TÀI</button>
        </div>
        <div className="col-2">
          <XucXac />
        </div>
        <div className="col-5">
          <button className='btnGame btn btn-primary'>XỈU</button>
        </div>
      </div>

      <div className="thongtingame text-center ">
        <ThongTinGame />
        <button className='btn btn-success p-3 mt-4 fs-3' >Play Game</button>
      </div>
    </div>
  )
}

export default Game_Xuc_Xac