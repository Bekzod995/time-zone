import React from 'react'
import './style.scss'
import WatchBoxImg2 from '../../assets/img/gallery/popular4.png'

class WatchBox1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="watch-box1">
        <div className="container">
          <img src={WatchBoxImg2} alt="img" className="watch-box-img" />
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
        </div>
      </div>
    )
  }
}

export default WatchBox1
