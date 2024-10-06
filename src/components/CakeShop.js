import React from 'react';
import './CakeShop.css'; 
import Footer from './Footer'; 
import Header from './Header';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Healthy Made Delicious Cake</h1>
        <button className="order-button">Order Now</button>
      </div>
        </div>
  );
};

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Sweet Moments, Sweeter Cakes!</h2>
          <p>
          Every occasion deserves a touch of sweetness. At The Cake Coner, we create more than just cakes – we 
          craft moments of pure joy, tailored to your sweetest celebrations. From birthdays to weddings, and every 
          special moment in between, let us add that perfect slice of happiness to your day!
          </p>
          <p>
          Sweetness baked into every layer! More than just cakes, we make moments sweeter, ensuring every 
          celebration is a little more delicious.
          </p>
        </div>
        <div className="about-image">
          <img src={require("../assets/home2.jpg")} alt="Delicious Chocolate Cake" />
        </div>
      </div>
    </section>
  );
};


const products = [
  {  image: require('../assets/home4.jpeg') },
  {  image: require('../assets/home7.jpg') },
  {  image: require('../assets/home8.jpg') },
  {  image: require('../assets/home10.jpg') },
 
  
];

const ProductSection = () => {
  return (
    <div className="product-section1">
      <h2>Our Products</h2>
      <div className="product-grid1">
        {products.map((product, index) => (
          <div className="product-card1" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};



const CakeShop = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <Footer /> 
     </div>
  );
};

export default CakeShop;
