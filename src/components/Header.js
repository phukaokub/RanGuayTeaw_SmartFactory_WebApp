import React from "react";
import Navigation from "./Navigation";
import {Component} from "react";
import { MenuData } from "./MenuData";
import "./HeaderStyles.css";

export default class Header extends Component{
    state = {clicked: false};
    handleClick =()=>{
        this.setState({clicked:
        !this.state.clicked})
    }
    render(){
        return(
            <nav className="HeaderItems border-b justify-between bg-header">
                <h1 className="ranguayteaw text-white p-3 space-rap">
                <img 
                    className="img logo"
                    src={process.env.PUBLIC_URL+"images/RanGuayTeaw_logo.png"}
                    alt="icon"
                    style={{marginTop: "0%", display:"inline-block"}}/>
                &nbsp;&nbsp;&nbsp;&nbsp;RanGuayTeaw Smart Factory</h1>            
                <div className="menu-icons"
                onClick={this.handleClick}>
                    <i className={this.state.clicked ? 
                    "fas fa-times": "fas fa-bars"}
                    ></i>
                </div>
                <ul className={this.state.clicked ? 
                    "nav-menu active" : "nav-menu"}
                    onClick={this.handleClick}>
                    {MenuData.map((item, index) => {
                        return(
                            <li className="text-white" key = {index}>
                                <a href={item.url} 
                                className = {item.cName}>
                                    <i className= {item.icon}></i>   
                                    {item.title}
                                </a>
                    </li>
                        )
                    })}
                </ul>
                {/* <Navigation /> */}

            </nav>
        )
    }
}

// function Header(){
//     return (
//         <header className="border-b p-3 flex justify-between items-center animation bg-header">
//             <img src={process.env.PUBLIC_URL+"images/RanGuayTeaw_logo.png"} className= "width-50"/>
//             <span className="font-bold text-white left-0">
//                 RanGuayTeaw Smartfactory
//             </span>

//             
//         </header>
//     )
// }

// export default Header



