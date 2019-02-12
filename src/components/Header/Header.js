import React, { Component } from "react";
import logoImage from "../../assets/page_icon.png";
import PostModal from "../PostModal/PostModal";

import "./Header.css";

class Header extends Component {
  constructor(){
    super();
    this.state={
      isOpen:false,
    };
    // this.onOpenModal=this.onOpenModal.bind(this); 
    //but if we use arrow function as vbelow, we do not need to bind
  }

onOpenModal =() => {
  this.setState({isOpen:true})
}
onCloseModal =() => {
  this.setState({isOpen:false})
}


  render() {
    const {isOpen}=this.state;

    return (
      <div className="Wrapper">
        <nav className="Headertitle navbar">
          <a className="Headertitle" href=" #">
            <img src={logoImage} alt=" logo " />
            <h3>postagram</h3>
          </a>
          <button onClick= {this.onOpenModal} type="button" className="btn btn-dark Headertitle__button">
            Upload
          </button>
          {isOpen && <PostModal onClose={this.onCloseModal}/>}
        </nav>
      </div>
    );
  }
}

export default Header;
