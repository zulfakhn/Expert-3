import RestaurantData from '../../data/restaurant-data';
import cardComponent from '../templates/card-component';
import '../../components/jumbotron';

const Home = {
  async render() {
    return `
    
    <jumbotron-element></jumbotron-element>
        <div class="card-container"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantData.getRestaurantData();
    const restaurantList = document.querySelector('.card-container');
    restaurants.forEach((item) => {
      console.log(item.pictureId);
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default Home;
