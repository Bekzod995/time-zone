import React from 'react'
import './style.scss'
import WatchImg from '../../assets/img/gallery/popular1.png'
import WatchImg1 from '../../assets/img/gallery/popular2.png'
import WatchImg2 from '../../assets/img/gallery/popular3.png'
import WatchImg3 from '../../assets/img/gallery/popular4.png'
import WatchImg4 from '../../assets/img/gallery/popular5.png'
import WatchImg5 from '../../assets/img/gallery/popular6.png'

class WatchCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="watch-card">
        <div className="container">
          <p className="watch-card-title">Popular Items</p>
          <p className="watch-card-text">
            Consectetur ipsum dolor sit amet consectetur adipisicing elit. Esse
            laboriosam pariatur reiciendis <br /> impedit sed facilis
            consequatur fugiat minus quidem accusantium.
          </p>
          <div className="watch-card-img">
            <div className="watch-img1">
              <img src={WatchImg} alt="card1-img" className="watch-photo" />
              <p className="watch-img1-text">Thermo Ball Etip Gloves <br />
               <span className="watch-img1-text1">$ 45,743</span> 
              </p>
            </div>
            <div className="watch-img1">
              <img src={WatchImg1} alt="watch-img" className="watch-photo" />
              <p className="watch-img1-text">Thermo Ball Etip Gloves <br />
               <span className="watch-img1-text1">$ 45,743</span> 
              </p>
            </div>
            <div className="watch-img1">
              <img src={WatchImg2} alt="watch-img" className="watch-photo" />
              <p className="watch-img1-text">Thermo Ball Etip Gloves <br />
               <span className="watch-img1-text1">$ 45,743</span> 
              </p>
            </div>
            <div className="watch-img1">
              <img src={WatchImg3} alt="watch-img" className="watch-photo" />
              <p className="watch-img1-text">Thermo Ball Etip Gloves <br />
               <span className="watch-img1-text1">$ 45,743</span> 
              </p>
            </div>
            <div className="watch-img1">
              <img src={WatchImg4} alt="watch-img" className="watch-photo" />
              <p className="watch-img1-text">Thermo Ball Etip Gloves <br />
               <span className="watch-img1-text1">$ 45,743</span> 
              </p>
            </div>
            <div className="watch-img1">
              <img src={WatchImg5} alt="watch-img" className="watch-photo" />
              <p className="watch-img1-text">Thermo Ball Etip Gloves <br />
               <span className="watch-img1-text1">$ 45,743</span> 
              </p>
            </div>
          </div>
          <button className="watch-button">VIEW MORE PRODUCTS</button>
        </div>
      </div>
    )
  }
}

export default WatchCard
