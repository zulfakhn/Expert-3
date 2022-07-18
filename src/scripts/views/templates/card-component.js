import API_ENDPOINT from '../../globals/api-endpoint';

const cardComponent = (cardItem) => `
    <div class="card" tabindex="0">
    <div class="card-image">
    <img class="lazyload" 
    data-src="${API_ENDPOINT.RESTAURANT_IMAGE}${cardItem.pictureId}"     
    alt="${cardItem.name}" />
    </div>
    <div class="card-content">
    <a class="card-link-button" href="#/detail/${cardItem.id}">${
  cardItem.name
}</a>
    <p class="card-description">
        ${cardItem.description.substring(0, 100)}...
    </p>
    <div class="card-footer">
    <p class="card-rating"><ion-icon name="star"></ion-icon>${
      cardItem.rating
    }</p>
    </div>
    </div>
    </div>
`;

export default cardComponent;
