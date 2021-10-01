import React from 'react'
import './style.scss';
import BgImg from '../../assets/Icons/right.svg';
import BgImg1 from '../../assets/Icons/play.svg';

class BgCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="bg-card">
        <div className="bg-card-icon">
            <p className="bg-card-text">NEXT VIDEO</p>
            <img src={BgImg} alt="bg-img" className="bg-card-icon-right" />
        </div>
         <img src={BgImg1} alt="" className="bg-card-icon-play" />  
      </div>
    )
  }
}

export default BgCard
