import RestaurantDataIDB from '../../data/restaurant-idb';
import cardComponent from '../templates/card-component';

const Favorite = {
  async render() {
    return `
        <div class="card-container card-container-favorite"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataIDB.getAllRestaurants();
    const restaurantList = document.querySelector('.card-container');
    restaurants.forEach((item) => {
      console.log(item);
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default Favorite;
