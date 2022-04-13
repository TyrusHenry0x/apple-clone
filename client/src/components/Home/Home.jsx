import './Home.css'

const Home = () => {
  return (
    <div className='home-page'>
      <div className='iphone-13-div'>
        <h1 className='iphone-13-h1'>iPhone 13 Pro</h1>
        <p className='iphone-13-p'>Oh. So. Pro.</p>
        <div className='link-div'>
          <a href='' className='learn-more-link'>Learn more </a>
          <a href='' className='buy-link'>Buy</a>
        </div>
        <img className='iphone-13-image' src="/assets/images/iPhone-13.jpg" />
      </div>

      <div className='iphone-se-div'>
        <p className='iphone-se-p1'>The new</p>
        <h1 className='iphone-se-h1'>iPhone SE</h1>
        <p className='iphone-se-p2'>Love the power. Love the price</p>
        <a href='' className='learn-more-link'>Learn more </a>
        <a href='' className='buy-link'>Buy</a>
        <div className='iphone-se-image'></div>
      </div>

      <div className='ipad-air-div'>
        <h1 className='ipad-air-h1'>iPad air</h1>
        <p className='ipad-air-p'>Light. Bright. Full of might.</p>
        <a href='' className='learn-more-link'>Learn more </a>
        <a href='' className='buy-link'>Buy</a>
        <div className='ipad-air-image'></div>
      </div>

      <div className='advert-grid'>
        <div className='wwdc22-image'>
          <a href='' className='wwdc22-link'>Learn more</a>
        </div>

        <div className='apple-watch-box'>
          <h1>WATCH</h1>
          <p className='apple-watch-p'>SERIES 7</p>
          <a href='' className='grid-learn-more-link'>Learn more</a>
          <a href='' className='grid-buy-link'>Buy</a>
          <div className='apple-watch-image'></div>
        </div>

        <div className='studio-display-box'>
          <h1 className='studio-display-h1'>Studio Display</h1>
          <p className='studio-display-p'>A sight to be bold.</p>
          <a href='' className='grid-learn-more-link'>Learn more</a>
          <a href='' className='grid-buy-link'>Buy</a>
          <div className='studio-display-image'></div>
        </div>

        <div className='mac-studio-box'>
          <h1 className='mac-studio-h1'>Mac Studio</h1>
          <p className='mac-studio-p'>Empower station.</p>
          <a href='' className='grid-learn-more-link'>Learn more</a>
          <a href='' className='grid-buy-link'>Buy</a>
          <div className='mac-studio-image'></div>
        </div>

        <div className='apple-arcade-box'>
          <h1 className='apple-arcade-h1'>Arcade</h1>
          <p className='apple-arcade-p'>Gear.Club Stradale. Play now.</p>
          <a href='' className='grid-learn-more-link'>Learn more</a>
          <a href='' className='grid-buy-link'>Try it free¹</a>
        </div>

        <div className='apple-tv-image'>
          <a href='' className='apple-tv-link'>Stream all episodes now »</a>
        </div>
      </div>


    </div>
  )
}

export default Home;