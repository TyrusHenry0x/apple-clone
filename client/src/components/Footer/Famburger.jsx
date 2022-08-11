import { useRef, useState } from "react";

const Famburger = () => {
  const dropdownRef = useRef(null);
  const [isShop, setIsShop] = useState(false);
  const shopClick = () => {
    setIsShop(!isShop)

  };
  const [isService, setIsService] = useState(false);
  const serviceClick = () => setIsService(!isService);
  const [isAccount, setIsAccount] = useState(false);
  const accountClick = () => setIsAccount(!isAccount);
  const [isStore, setIsStore] = useState(false);
  const storeClick = () => setIsStore(!isStore);
  const [isBusiness, setIsBusiness] = useState(false);
  const businessClick = () => setIsBusiness(!isBusiness);

  const [isEducation, setIsEducation] = useState(false);
  const educationClick = () => setIsEducation(!isEducation);

  const [isHealth, setIsHealth] = useState(false);
  const healthClick = () => setIsHealth(!isHealth);

  const [isGov, setIsGov] = useState(false);
  const govClick = () => setIsGov(!isGov);

  const [isValues, setIsValues] = useState(false);
  const valuesClick = () => setIsValues(!isValues);

  const [isAbout, setIsAbout] = useState(false);
  const aboutClick = () => setIsAbout(!isAbout);

  return (

    <div className='hamburger-div'>

      <div className='hamburger-directory-column-section'>
        <button onClick={shopClick} className='menu-trigger'>
          <p className="hamburger-column-section-title">Shop and Learn</p>
          <p className="plus"
            // style={{
            //   backgroundColor: isShop ? 'salmon' : '',
            //   // transition: isShop ? 'rotate(45deg)' : 'rotate(0deg)'
            //   transition: 'rotate(45deg)'
            // }}
          >+</p>
        </button>
        {isShop &&
          <ul className='hamburger-directory-column-section-list'>
            <li className='hamburger-directory-column-section-item'>Store</li>
            <li className='hamburger-directory-column-section-item'>Mac</li>
            <li className='hamburger-directory-column-section-item'>iPad</li>
            <li className='hamburger-directory-column-section-item'>iPhone</li>
            <li className='hamburger-directory-column-section-item'>Watch</li>
            <li className='hamburger-directory-column-section-item'>AirPods</li>
            <li className='hamburger-directory-column-section-item'>TV & Home</li>
            <li className='hamburger-directory-column-section-item'>AirTag</li>
            <li className='hamburger-directory-column-section-item'>Accessories</li>
            <li className='hamburger-directory-column-section-item'>Gift Cards</li>
          </ul>}
      </div>

      <div className='hamburger-directory-column-section'>
        <button onClick={serviceClick} className='menu-trigger'>
          <p className='hamburger-column-section-title'>Services</p>
          <p className="plus">+</p>
        </button>
        {isService &&
          <ul className='hamburger-directory-column-section-list'>
            <li className='hamburger-directory-column-section-item'>Apple Music</li>
            <li className='hamburger-directory-column-section-item'>Apple TV+</li>
            <li className='hamburger-directory-column-section-item'>Apple Fitness+</li>
            <li className='hamburger-directory-column-section-item'>Apple News+</li>
            <li className='hamburger-directory-column-section-item'>Apple Arcade</li>
            <li className='hamburger-directory-column-section-item'>iCloud</li>
            <li className='hamburger-directory-column-section-item'>Apple One</li>
            <li className='hamburger-directory-column-section-item'>Apple Card</li>
            <li className='hamburger-directory-column-section-item'>Apple Books</li>
            <li className='hamburger-directory-column-section-item'>Apple Podcasts</li>
            <li className='hamburger-directory-column-section-item'>App Store</li>
          </ul>
        }
      </div>

      <div className='hamburger-directory-column-section'>
        <button onClick={accountClick} className='menu-trigger'>
          <p className='hamburger-column-section-title'>Account</p>
          <p className="plus">+</p>
        </button>
        {isAccount &&
          <ul className='hamburger-directory-column-section-list'>
            <li className='hamburger-directory-column-section-item'>Manage Your Apple ID</li>
            <li className='hamburger-directory-column-section-item'>Apple Store Account</li>
            <li className='hamburger-directory-column-section-item'>iCloud.com</li>
          </ul>
        }
      </div>

      <div className='hamburger-directory-column-section'>
        <button onClick={storeClick} className='menu-trigger'>
          <p className='hamburger-column-section-title'>Apple Store</p>
          <p className="plus">+</p>
        </button>
        {isStore &&
          <ul className='hamburger-directory-column-section-list'>
            <li className='hamburger-directory-column-section-item'>Find a Store</li>
            <li className='hamburger-directory-column-section-item'>Genius Bar</li>
            <li className='hamburger-directory-column-section-item'>Today at Apple</li>
            <li className='hamburger-directory-column-section-item'>Apple Camp</li>
            <li className='hamburger-directory-column-section-item'>Apple Store App</li>
            <li className='hamburger-directory-column-section-item'>Refurbished and Clearance</li>
            <li className='hamburger-directory-column-section-item'>Financing</li>
            <li className='hamburger-directory-column-section-item'>Apple Trade In</li>
            <li className='hamburger-directory-column-section-item'>Order Status</li>
            <li className='hamburger-directory-column-section-item'>Shopping Help</li>
          </ul>
        }
      </div>

      <div className='hamburger-directory-column-section'>
        <button onClick={businessClick} className='menu-trigger'>
          <p className='hamburger-column-section-title'>For Business</p>
          <p className="plus">+</p>
        </button>
        {isBusiness &&
          <ul className='hamburger-directory-column-section-list'>
            <li className='hamburger-directory-column-section-item'>Apple and Business</li>
            <li className='hamburger-directory-column-section-item'>Shop for Business</li>
          </ul>
        }
      </div>

      <div className='hamburger-directory-column-section'>
        <button onClick={educationClick} className='menu-trigger'>
          <p className='hamburger-column-section-title'>For Education</p>
          <p className="plus">+</p>
        </button>
        {isEducation &&
          <ul className='hamburger-directory-column-section-list'>
            <li className='hamburger-directory-column-section-item'>Apple and Education</li>
            <li className='hamburger-directory-column-section-item'>Shop for K-12</li>
            <li className='hamburger-directory-column-section-item'>Shop for College</li>
          </ul>
        }
      </div>

      <div className='hamburger-directory-column-section'>
        <button onClick={healthClick} className='menu-trigger'>
          <p className='hamburger-column-section-title'>For Healthcare</p>
          <p className="plus">+</p>
        </button>
        {isHealth &&
          <ul className='hamburger-directory-column-section-list'>
            <li className='hamburger-directory-column-section-item'>Apple in Healthcare</li>
            <li className='hamburger-directory-column-section-item'>Health on Apple Watch</li>
            <li className='hamburger-directory-column-section-item'>Health Records on iPhone</li>
          </ul>
        }
      </div>

      <div className='hamburger-directory-column-section'>
        <button onClick={govClick} className='menu-trigger'>
          <p className='hamburger-column-section-title'>For Government</p>
          <p className="plus">+</p>
        </button>
        {isGov &&
          <ul className='hamburger-directory-column-section-list'>
          <li className='hamburger-directory-column-section-item'>Shop for Government</li>
          <li className='hamburger-directory-column-section-item'>Shop for Veterans and Military</li>
        </ul>
        }
      </div>

      <div className='hamburger-directory-column-section'>
        <button onClick={valuesClick} className='menu-trigger'>
          <p className='hamburger-column-section-title'>Apple Values</p>
          <p className="plus">+</p>
        </button>
        {isValues &&
          <ul className='hamburger-directory-column-section-list'>
          <li className='hamburger-directory-column-section-item'>Accessibility</li>
          <li className='hamburger-directory-column-section-item'>Education</li>
          <li className='hamburger-directory-column-section-item'>Environment</li>
          <li className='hamburger-directory-column-section-item'>Inclusion and Diversity</li>
          <li className='hamburger-directory-column-section-item'>Privacy</li>
          <li className='hamburger-directory-column-section-item'>Racial Equity and Justice</li>
          <li className='hamburger-directory-column-section-item'>Supplier Responsibility</li>
        </ul>
        }
      </div>

    </div>
  );
};

export default Famburger;