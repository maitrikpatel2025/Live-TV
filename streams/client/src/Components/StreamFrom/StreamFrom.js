import React, { Component }     from "react";
import { Field, reduxForm }     from "redux-form";


class StreamForm extends Component {
 

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  redernInput = ({ input, label, meta }) => {
    const fieldError = `field ${meta.error && meta.touched ? "error" : ""}`;
    const mystyle = {
      paddingBottom: "10px",
      fontSize: "20px",
    };

    return (
      <div className={fieldError}>
        <label style={mystyle}>{label} </label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );

  };

  onSubmit = (fromValues) => {
    console.log(fromValues);
    this.props.onSubmit(fromValues);
  };


  render() {
    return (
      <div style={{ padding: "40px" }} className="StreamForm">
        
          <div className="Form">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error"
            >
              <Field
                name="title"
                component={this.redernInput}
                label="Title for Stream"
              />
              <Field
                name="description"
                component={this.redernInput}
                label="Description"
              />
              <button className="ui button primary">{this.props.button}</button>
            </form>
        </div>
      </div>
    );
  }

}


const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "You must enter a title";
  }
  if (!formValues.description) {
    error.description = "You must enter a description";
  }
  return error;
};


export default reduxForm({
  form: "StreamForm",
  validate,
})(StreamForm);

