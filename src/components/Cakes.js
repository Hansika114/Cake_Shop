import React from 'react';
import './Cakes.css'; 
import Footer from './Footer';
import Header from './Header';


const HeaderSection = () => {
    return (
      <div className="header-section1">
        <div className="header-content1">
          <h1>Delicious Cakes</h1>
          </div>
      </div>
    );
  };


  const products = [
    {name: "Chocolate Fudge Cake", price: "2,700.00", image: require('../assets/cake1.png') },
    {name: "Chocolate Cake with Roasted Nuts", price: "2,900.00", image: require('../assets/cake2.png') },
    {name: "Chocolate Mud Cake", price: "2,900.00", image: require('../assets/cake3.png') },
    {name: "Coffee Cake", price: "2,000.00", image: require('../assets/cake4.png') },
    {name: "Chocolate Cake", price: "2,050.00", image: require('../assets/cake5.png') },
    {name: "Mocha Cake", price: "2,050.00", image: require('../assets/cake6.png') },
    {name: "Ribbon Cake", price: "1,900.00", image: require('../assets/cake7.png') },
    {name: "Tiramisu", price: "4,500.00", image: require('../assets/cake8.png') },
    {name: "Mocha Gateau", price: "4,200.00", image: require('../assets/cake9.png') },
    {name: "Chocolate Gateau", price: "4,300.00", image: require('../assets/cake10.png') },
    {name: "Blueberry Cold Cheesecake", price: "4,200.00", image: require('../assets/cake11.png') },
    {name: "Assorted cup cakes", price: "5,000.00", image: require('../assets/cake12.png') },

    {name: "Chocolate Fudge Cake", price: "2,700.00", image: require('../assets/cake1.png') },
    {name: "Chocolate Cake with Roasted Nuts", price: "2,900.00", image: require('../assets/cake2.png') },
    {name: "Chocolate Mud Cake", price: "2,900.00", image: require('../assets/cake3.png') },
    {name: "Coffee Cake", price: "2,000.00", image: require('../assets/cake4.png') },
    
  ];
  
  
  const Cake = () => {
    return (
      <div className="product-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>              
              <div className="product-pricing">
                <span className="discounted-price">Rs. {product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

const Cakes = () => {
    return (
      <div className="App">
        <Header />
        <HeaderSection />
        <Cake />
        <Footer /> 
       </div>
    );
  };


export default Cakes;
