import React from 'react';
import './About.css';
import Header from './Header';
import Footer from './Footer';


const HeaderSection = () => {
    return (
      <div className="header-section2">
        <div className="header-content2">
          <h1>About Us</h1>
          </div>
      </div>
    );
  };
/* commet something */
const Abouts = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        
      <div className="about-image">
          <img src={require("../assets/home1.jpg")} alt="Delicious Chocolate Cake" />
        </div>

        <div className="about-text">
          <h2>Always in Good Taste!</h2>
          <p>
          At Cake Corner, it's our mission to bring you the largest selection of cakes and other great quality desserts on the market. 
          Along with a vast wealth of knowledge in the products we sell, Divine carries everything you could possibly imagine and more.
           We’re here for our customers, and want each one of them to have a unique, one-of-a-kind experience at our amazing Cake Shop.
          </p>
          </div>

      </div>
    </section>
  );
};

    const comments = [
        {
          name: "Udari Hansika",
          review: "The cakes here are like a bite of heaven! I tried the red velvet, and it was moist, rich, and full of flavor. Perfect for any celebration!",
          rating: 5,
          image: require('../assets/home1.jpg')
        },
        {
          name: "Erandi Chamila",
          review: "I’m a huge chocolate lover, and the double chocolate fudge cake was absolutely to die for! Highly recommended for all chocolate enthusiasts.",
          rating: 5,
          image: require('../assets/home1.jpg')
        },
        {
          name: "Mahela Chathuranga",
          review: "We ordered a custom cake for my daughter’s birthday, and it exceeded all expectations! Not only was it stunning, but it tasted incredible too.",
          rating: 5,
          image: require('../assets/home1.jpg')
        }
      ];
      
      const Comment = () => {
        return (
          <div className="comment-section">
            <h1 className="comment-heading">Food Lover's Say</h1>
            <div className="comment-container">
              {comments.map((comment, index) => (
                <div key={index} className="comment-card">
                  <div className="comment-rating">
                    {'★'.repeat(comment.rating)} 
                  </div>
                  <p className="comment-review">"{comment.review}"</p>
                  <div className="comment-profile">
                    <img src={comment.image} alt={comment.name} className="comment-image" />
                    <p className="comment-name">{comment.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };


const About = () => {
    return (
      <div className="App">
        <Header />
        <HeaderSection />
        <Abouts />
        <Comment />
        <Footer /> 
       </div>
    );
  };

export default About;
