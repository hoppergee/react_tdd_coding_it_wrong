import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Button,
  Modal,
  Row,
} from 'react-materialize';
import NewDishForm from './NewDishForm';
import DishList from './DishList';

export default class RestaurantDetailPage extends Component {
  state = {
    dishNames: [],
    isModalOpen: false,
  }

  handleAddDish = (newDishName) => {
    this.setState(state => ({
      dishNames: [
        newDishName,
        ...state.dishNames,
      ],
    }));

    this.setState({ isModalOpen: false });
  }

  render() {
    const { dishNames } = this.state;
    return (
      <div>
        <Link
          to="/"
          data-testid="backButton"
        >
          Back
        </Link>
        <Modal
          open={this.state.isModalOpen}
          header="New Dish"
          actions={[]}
          trigger={
            <Button
              data-testid="addDishButton"
            >
              Add Dish
            </Button>
          }
        >
          <NewDishForm
            onSave={this.handleAddDish}
          />
        </Modal>
        <Row>
          <DishList dishNames={dishNames} />
        </Row>
      </div>
    );
  }
}
