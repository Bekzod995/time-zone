import React from 'react'
import './style.scss'
import HeaderImg from '../../assets/img/hero/watch.png'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className="header-text">
            <p className="header-title">Select Your New Perfect Style</p>
            <p className="header-lorem">
              Ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta
              dolore enim Doloremque deleniti qui delectus illum architecto esse
              sequi!
            </p>
            <button className="header-button">SHOP NOW</button>
          </div>
          <img src={HeaderImg} alt="watch" className="header-img" />
        </div>
      </header>
    )
  }
}

export default Header
