import React, { Component } from "react";
import "./PostModal.css";

class PostModal extends Component {
  render() {
    const { onClose, onCaptionInputChange, onImageUpload , onPostSubmit} = this.props;

    return (
      <div className="PostModal">
        <div className="PostModal__content">
          <div className="PostModal__content__title">upload image</div>
          <div className="form-group row">
            <input
              type="file"
              className="form-control-file"
              onChange={onImageUpload}
            />
          </div>
          <form>
            <div className="form-group row">
              <label>Caption</label>
              <input
                className="form-control"
                type="text"
                onChange={onCaptionInputChange}
                // getting caption text from upload modal and passing it to the post
              />
            </div>
          </form>
          <div className="PostModal__buttons">
            <button onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button className="btn btn-primary" onClick={onPostSubmit} >Upload</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostModal;
