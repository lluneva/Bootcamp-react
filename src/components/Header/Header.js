import React, { Component } from "react";
import logoImage from "../../assets/page_icon.png";
import PostModal from "../PostModal/PostModal";

import "./Header.css";

class Header extends Component {
  render() {
    const {
      isOpen,
      toggleModal,
      onCaptionInputChange,
      onImageUpload,
      onPostSubmit
    } = this.props;

    return (
      <div className="Wrapper">
        <nav className="Headertitle navbar">
          <a className="Headertitle" href=" #">
            <img src={logoImage} alt=" logo " />
            <h3>postagram</h3>
          </a>
          <button
            onClick={toggleModal}
            type="button"
            className="btn btn-secondary Headertitle__button"
          >
            Upload
          </button>
          {isOpen && (
            <PostModal /*this is passing down to PostModal*/
              onCaptionInputChange={onCaptionInputChange}
              onClose={toggleModal}
              onImageUpload={onImageUpload}
              onPostSubmit={onPostSubmit}
            />
          )}
        </nav>
      </div>
    );
  }
}

export default Header;
