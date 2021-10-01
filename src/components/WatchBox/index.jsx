import React from 'react';
import './style.scss';
import WatchBoxImg1 from '../../assets/img/gallery/popular6.png'

class WatchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="watch-box">
        <div className="container">
          <div className="watch-box-text">
            <p className="watch-box-title">Watch of Choice</p>
            <p className="watch-box-lorem">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos temporibus magnam voluptatibus excepturi qui,
              explicabo, cum neque ipsam optio doloremque, quaerat est ipsa
              distinctio deserunt libero. Unde nesciunt quibusdam quae!
            </p>
            <button className="watch-box-button">SHOW WATCHES</button>
          </div>
          <img src={WatchBoxImg1} alt="img" className="watch-box-img" />
        </div>
      </div>
    )
  }
}

export default WatchBox
