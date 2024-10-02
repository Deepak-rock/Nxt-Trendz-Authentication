// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-page">
    <Header />
    <div className="home-container">
      <div className="home-responsive-container">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="home-image-sm"
          alt="clothes that get you noticed"
        />
        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a maker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shop-now-button" type="button">
          Shop Now
        </button>
      </div>
      <div className="home-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="home-image-lg"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)
export default Home
