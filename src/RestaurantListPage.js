import React, { Component } from 'react';
import {
  Button,
  Col,
  Row,
  Modal,
} from 'react-materialize';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    isModalOpen: false,
  }

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(state => ({
      restaurantNames: [
        newRestaurantName,
        ...state.restaurantNames,
      ],
    }));

    this.setState({ isModalOpen: false });
  }

  handleCancelAddRestaurant = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { restaurantNames } = this.state;
    return (
      <div>
        <Modal
          data-test="addRestaurantModal"
          open={this.state.isModalOpen}
          actions={[]}
          trigger={
            <Button data-test="addRestaurantButton">Add Restaurant</Button>
          }
        >
          <NewRestaurantForm
            onSave={this.handleAddRestaurant}
            onCancel={this.handleCancelAddRestaurant}
          />
        </Modal>
        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    );
  }
}
