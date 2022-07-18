class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="banner">      
    <picture>
    <source media="(max-width: 600px)" srcset="/images/heros/hero-image_4-small.jpg">
    <img src='/images/heros/hero-image_4-large.jpg' 
         alt="Large Image For Restaurant">
    </picture>
    </div>
  `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
