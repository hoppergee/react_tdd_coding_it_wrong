import React, { Component } from 'react';
import {
  Button,
  TextInput,
  Row,
} from 'react-materialize';
import { Formik } from 'formik'

export default class NewRestaurantForm extends Component {

  validate = (values) => {
    const errors = {};
    if (values.restaurantName === '') {
      errors.restaurantName = 'Cannot be blank';
    }
    return errors;
  }

  handleSave = (values, { resetForm }) => {
    const { restaurantName } = values;
    const { onSave } = this.props;

    onSave(restaurantName);
    resetForm();
  }

  renderForm = ({ values, errors, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <TextInput
        s={12} m={8} l={10}
        label="Restaurant Name"
        id="restaurantName"
        name="restaurantName"
        value={values.restaurantName}
        error={errors.restaurantName}
        onChange={handleChange}
        data-test="newRestaurantName"
      />
      <Button
        type="submit"
        s={12} m={4} l={2}
        data-test="saveNewRestaurantButton"
      >
        Save
      </Button>
    </form>
  )

  render() {
    return (
      <Row>
        <Formik
          initialValues={{ restaurantName: '' }}
          validate={this.validate}
          onSubmit={this.handleSave}
        >
          {this.renderForm}
        </Formik> 
      </Row>
    );
  }
}
