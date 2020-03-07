export const ADD_DISH = 'ADD_DISH';

export const addDish = ({ restaurantName, dishName }) => {
  console.log(restaurantName)
  return {
    type: ADD_DISH,
    restaurantName,
    dishName,
  }
};