import api from '../api';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const ADD_RESTAURANTS = 'ADD_RESTAURANTS';

export const addRestaurant = (name) => (dispatch) => {
  const restaurant = {
    type: 'restaurants',
    attributes: {
      name,
    }
  };

  dispatch({
    type: ADD_RESTAURANT,
    restaurant,
  });

  return api.post(
    '/restaurants',
    restaurant,
  );
};

export const loadRestaurants = () => (dispatch) => {
  return api.get('/restaurants')
    .then(responseObject => {
      const responseBody = responseObject.data;
      const restaurants = responseBody.data;
      dispatch({
        type: STORE_RESTAURANTS,
        restaurants,
      })
    });
};
