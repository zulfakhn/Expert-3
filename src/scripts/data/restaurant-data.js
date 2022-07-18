import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantData {
  static async getRestaurantData() {
    const response = await axios.get(API_ENDPOINT.LIST);
    const { data } = response;
    return data.restaurants;
  }

  static async detailRestaurantData(id) {
    const response = await axios.get(API_ENDPOINT.DETAIL(id));
    const { data } = response;
    return data.restaurant;
  }
}

export default RestaurantData;
