import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { submitPost } from "../redux/actions/userActions";

class HeaderContainer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      caption: "",
      formData: null
    };

    // the ones on bottom are not needed, as toggle modal is introduced
    // this.onOpenModal=this.onOpenModal.bind(this);
  }
  /* onOpenModal = () => {
      this.setState({ isOpen: true });
    };
    onCloseModal = () => {
      this.setState({ isOpen: false });
    }; */

  toggleModal = () => this.setState({ isOpen: !this.state.isOpen });

  onCaptionInputChange = event =>
    this.setState({ caption: event.target.value });

  onImageUpload = e => {
    const file = e.target.files[0];

    const fileReader = new FileReader(); //native classes
    const formData = new FormData();

    formData.append("media", file); // media= nosaukums no backend

    fileReader.onloadend = () => this.setState({ formData });

    fileReader.readAsDataURL(file);
  };

  onPostSubmit = () => {
    const { caption, formData } = this.state;
    this.props.submitPost(formData, caption);
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Header
        isOpen={isOpen}
        toggleModal={this.toggleModal}
        onCaptionInputChange={this.onCaptionInputChange}
        onImageUpload={this.onImageUpload} //passing to the modal
        onPostSubmit={this.onPostSubmit}
      />
    );
  }
}
const mapDispatchToProps = {
  submitPost
};

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer);
