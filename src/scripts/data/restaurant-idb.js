/* eslint-disable no-prototype-builtins */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const RestaurantDataIDB = {
  async getRestaurant(id) {
    if (id) {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    }
    return null;
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    if (restaurant.hasOwnProperty('id')) {
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    }
    return null;
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default RestaurantDataIDB;
