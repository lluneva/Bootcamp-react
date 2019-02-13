import React, { Component } from "react";
import "./PostModal.css";

class PostModal extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <div className="PostModal">
        <div className="PostModal__content">
          <div className="PostModal__content__title">upload image</div>
          <div className="form-group row">
            <input type="file" className="form-control-file" />
          </div>
          <form>
            <div className="form-group row">
              <label>Caption</label>
              <input className="form-control" type="text" />
            </div>
          </form>
          <div className="PostModal__buttons">
            <button onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button className="btn btn-primary">Upload</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostModal;
