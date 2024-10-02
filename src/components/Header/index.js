// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-sm-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-header"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logout-icon"
      />
    </div>
    <nav className="nav-bar-sm">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-icon"
      />
    </nav>
    <nav className="nav-bar-lg">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-header"
        />
      </div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">Cart</li>
        <button className="log-out-button" type="button">
          Logout
        </button>
      </ul>
    </nav>
  </div>
)
export default Header
