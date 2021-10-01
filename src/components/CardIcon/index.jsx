import React from "react";
import './style.scss';
import CardIconIcon from "../../assets/Icons/box.svg";
import CardIconIcon1 from "../../assets/Icons/padlock.svg";
import CardIconIcon2 from "../../assets/Icons/left-and-right.svg";


class CardIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card-icon">
                <div className="container">
                    <div className="card-icon-t-i">
                        <img src={CardIconIcon} alt="img" className="card-icon-i" />
                        <p className="card-icon-title">Free Shipping Method</p>
                        <p className="card-icon-text1">aorem ixpsacdolor sit ameasecur</p>
                        <p className="card-icon-text2">adipisicing elitsf edasd.</p>
                    </div>
                    <div className="card-icon-t-i">
                        <img src={CardIconIcon1} alt="img" className="card-icon-i" />
                        <p className="card-icon-title">Secure Payment System</p>
                        <p className="card-icon-text1">aorem ixpsacdolor sit ameasecur</p>
                        <p className="card-icon-text2">adipisicing elitsf edasd.</p>
                    </div>
                    <div className="card-icon-t-i">
                        <img src={CardIconIcon2} alt="img" className="card-icon-i" />
                        <p className="card-icon-title">Secure Payment System</p>
                        <p className="card-icon-text1">aorem ixpsacdolor sit ameasecur</p>
                        <p className="card-icon-text2">adipisicing elitsf edasd.</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CardIcon;