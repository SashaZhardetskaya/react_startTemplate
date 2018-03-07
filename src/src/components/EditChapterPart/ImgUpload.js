import React, {Component} from 'react';
import thumbshot1 from '../../assets/videoImgs/thumbshot1.jpg';

class ImageUpload extends Component {
    state = {
        imageFile: '',
        imagePreviewUrl: ''
    };

    //Actions
    handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                imageFile: file,
                imagePreviewUrl: reader.result
            });
        };
        file && reader.readAsDataURL(file);
    };

    handleRemove = () => {
        this.setState({
            imageFile: '',
            imagePreviewUrl: thumbshot1
        });
    };

    //Renders
    renderImagePreview = (imagePreviewUrl) => {
        if (imagePreviewUrl) {
            return (
                <div className="fileinput-preview thumbnail">
                    <img src={imagePreviewUrl}/>
                </div>
            );
        } else {
            return (
                <div className="fileinput-preview thumbnail">
                    <img src={imagePreviewUrl || thumbshot1}/>
                </div>
            )
        }
    };

    renderFormInputs = (imagePreviewUrl) => (
        <div className="mar-top mar-btm">
            <span className="btn btn-info btn-file">
                {
                    !imagePreviewUrl &&
                    <span className="fileinput-new">
                        Upload Thumbnail
                    </span>
                }
                {
                    imagePreviewUrl &&
                    <span className="fileinput-exists">
                        Change
                    </span>
                }
                <input
                    className="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={this.handleImageChange}
                />
            </span>
            {
                imagePreviewUrl &&
                <span
                    className="btn red fileinput-exists"
                    onClick={this.handleRemove}
                >
                    Remove
                </span>
            }
        </div>
    );

    render() {
        let {imagePreviewUrl} = this.state;
        return (
            <div className="previewComponent">
                <div className="imgPreview video-img-preview">
                    {this.renderImagePreview(imagePreviewUrl)}
                    <input
                        className="videoThumbHiddenInput"
                        type="file"
                        accept="image/*"
                        onChange={this.handleImageChange}
                    />
                </div>
                {this.renderFormInputs(imagePreviewUrl)}
            </div>
        )
    }
}

export default ImageUpload;