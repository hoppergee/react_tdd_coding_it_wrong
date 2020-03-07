import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RestaurantListPage from './RestaurantListPage';
import {
  Col,
  Row,
} from 'react-materialize';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <Switch>
              <Route path="/">
                <RestaurantListPage />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    );
  }
}
