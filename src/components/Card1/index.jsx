import React from 'react'
import './style.scss'
import Card1Img1 from '../../assets/img/gallery/new_product1.png'
import Card1Img2 from '../../assets/img/gallery/new_product2.png'
import Card1Img3 from '../../assets/img/gallery/new_product3.png'

class Card1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="card1">
        <div className="container">
          <div className="card1-title">New Arrivals</div>
          <div className="card1-img">
            <div className="card1-img1">
              <img src={Card1Img1} alt="card1-img" className="card1-photo" />
              <p className="card1-img1-text">
                Thermo Ball Etip Gloves <br />
                <span className="card1-pound">$ 45,743</span>
              </p>
            </div>
            <div className="card1-img1">
              <img src={Card1Img2} alt="card1-img" className="card1-photo" />
              <p className="card1-img1-text">
                Thermo Ball Etip Gloves <br />
                <span className="card1-pound">$ 45,743</span>
              </p>
            </div>
            <div className="card1-img1">
              <img src={Card1Img3} alt="card1-img" className="card1-photo" />
              <p className="card1-img1-text">
                Thermo Ball Etip Gloves <br />
                <span className="card1-pound">$ 45,743</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card1
