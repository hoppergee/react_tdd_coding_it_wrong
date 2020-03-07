import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Button,
  Col,
  Row,
  Modal,
} from 'react-materialize';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';
import { addRestaurant } from './store/restaurants/actions'

class RestaurantListPage extends Component {
  state = {
    isModalOpen: false,
  }

  handleAddRestaurant = (newRestaurantName) => {
    this.props.addRestaurant(newRestaurantName);

    this.setState({ isModalOpen: false });
  }

  handleCancelAddRestaurant = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { restaurants } = this.props;
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
          <RestaurantList restaurantNames={restaurants} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

const mapDispatchToProps = {
  addRestaurant,
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListPage);