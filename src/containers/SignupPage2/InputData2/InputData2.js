
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import classes from './InputData2.css';
import Button from '../../../components/UI/Button/Button';






class InputData extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '', error: 'Please select an image' };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('handle uploading-', this.state.file, this.state.imagePreviewUrl);
    if (this.state.file) {
      this.props.onSubmit(this.state.imagePreviewUrl);
    }
    else {
      this.setState({ errorStatus: true })
    }
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    const scope = this;
    reader.onloadend = () => {
      scope.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl, error, errorStatus } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className={classes.Img} src={imagePreviewUrl} alt='Preview'/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className={classes.Form}>
        <form>
          <div><TextField
            hintText={"image"}
            floatingLabelText={"image"}
            label="image"
            type="file"
            onChange={this.handleImageChange}
            value={null} /><span style={{ color: 'red' }}>{errorStatus && error}</span></div>
          <Button
            clicked={this.handleSubmit}
          >Upload Image</Button>
        </form>
        <br />
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default InputData;