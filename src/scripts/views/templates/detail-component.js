/* eslint-disable comma-dangle */
import API_ENDPOINT from "../../globals/api-endpoint";

const detailComponent = (restaurant) => `
<section class="detail">
<div class="main">
    <div class="detail-image">
    <img src="${API_ENDPOINT.RESTAURANT_IMAGE}${restaurant.pictureId}" alt="${
  restaurant.name
}">
    </div>
    <div class="detail-text">
        <div class="wrapper">        
        <h3>Toko : ${restaurant.name}</h3>
        <h3>Rating : ${restaurant.rating}</h3>
        <h3>Alamat : ${restaurant.address} ${restaurant.city}</h3>
        </div>
        <p class="description">${restaurant.description}</p>
    </div>  
    <div class="menus">
        <div class="detail-food">
        <h2>Food</h2>
            <ul class="food-list">
            ${restaurant.menus.foods
              .map(
                (food) => `
                <li>${food.name}</li>
                `
              )
              .join("")}
            </ul>
        </div> 
        <div class="detail-drink">
        <h2>Drink</h2>
            <ul class="drink-list">
            ${restaurant.menus.drinks
              .map(
                (drink) => `
                <li>${drink.name}</li>
                `
              )
              .join("")}
            </ul>
        </div> 
    </div>
    <div class="reviews">
    <h2>Review</h2>
    <div class="review-list">
    ${restaurant.customerReviews
      .map(
        (review) => `
    <div class="review-item">
      <p class="review-item-user">${review.name}</p>
      <p class="review-item-text">${review.review}</p>
      <p class="review-item-date">${review.date}</p>
    </div>`
      )
      .join("")}
  </div>
    </div>
</div>
<div id="likeButtonContainer"></div>
</section>
`;

export default detailComponent;
