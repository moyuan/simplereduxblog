import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    // this === component
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Posts Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    );
  }
}


function validate(values) {
  // console.log(values) -> { title: 'adfs', categories: 'fdd', content: 'ididi' }
  const errors = {};

  // validate the inputs from 'values'
  // value.title's "title" must match the Field's name
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (values.title != null && values.title.length < 3) {
    errors.title = "The title is too short";
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter come content please';
  }

  // If errors is empty, the form is fine to submit
  // If erros has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
