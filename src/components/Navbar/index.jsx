import React from 'react'
import './style.scss';
import Search from '../../assets/Icons/search.svg'
import User from '../../assets/Icons/user.svg'
import Shop from '../../assets/Icons/shop.svg'
import Logo from '../../assets/img/logo/logo.png'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <nav>
        <img src={Logo} alt="logo" className="logo" />
        <ul className="nav-ul">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Latest</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-icons">
            <img src={Search} alt="search" className="nav-icon" />
            <img src={User} alt="user" className="nav-icon" />
            <img src={Shop} alt="shop" className="nav-icon" />
        </div>
        <div className="nav-hot">HOT</div>
    </nav>
  }
}

export default Navbar
