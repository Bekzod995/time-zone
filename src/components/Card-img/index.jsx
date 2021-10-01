import React from "react";
import './style.scss';
import CardImg1 from '../../assets/img/gallery/gallery1.png';
import CardImg2 from '../../assets/img/gallery/gallery2.png';
import CardImg3 from '../../assets/img/gallery/gallery3.png';
import CardImg4 from '../../assets/img/gallery/gallery4.png';

class CardImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card-img">
                <img src={CardImg1} alt="img" className="card-img1" />
                <img src={CardImg2} alt="img" className="card-img2" />
                <div className="card-img-2">
                    <img src={CardImg3} alt="img" className="card-img3" />
                    <img src={CardImg4} alt="img" className="card-img4" />
                </div>
            </div>
         );
    }
}
 
export default CardImg;