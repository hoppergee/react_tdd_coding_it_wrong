import { ADD_DISH } from '../../../src/store/dishes/actions';
import dishes from '../../../src/store/dishes/reducers';

describe('dishes reducer', () => {
  describe('ADD_DISH', () => {
    it('adds a dish for the specified restaurant', () => {
      const state = {};

      const restaurantName = 'Sushi Place';
      const dishName = 'Volcano Roll';

      const newState = dishes(state, {
        type: ADD_DISH,
        restaurantName,
        dishName,
      });

      expect(newState[restaurantName]).toEqual([dishName]);
    });
  });
});
