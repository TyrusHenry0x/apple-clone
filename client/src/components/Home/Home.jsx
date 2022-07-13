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
        <img className='iphone-13-image' src="/assets/images/iPhone-13.png" />
      </div>

      <div className='iphone-se-div'>
        <p className='iphone-se-p1'>The new</p>
        <h1 className='iphone-se-h1'>iPhone SE</h1>
        <p className='iphone-se-p2'>Love the power. Love the price</p>
        <div className='link-div'>
          <a href='' className='learn-more-link'>Learn more </a>
          <a href='' className='buy-link'>Buy</a>
        </div>
        <img className='iphone-se-image' src='/assets/images/Apple-iPhoneSE-double-infinity-220308_Full-Bleed-Image.jpg.slideshow-xlarge.png' />
      </div>

      <div className='ipad-air-div'>
        <div className='ipad-text-div'>
          <div className='h1-div'>
            <h1 className='ipad-air-h1'>iPad</h1>
            <img className='air-icon' src='assets/images/IPad_Air_(4th_generation,_logo).svg.png' />
          </div>
          <p className='ipad-air-p'>Light. Bright. Full of might.</p>
          <a href='' className='learn-more-link'>Learn more </a>
          <a href='' className='buy-link'>Buy</a>
        </div>
        <img className='ipad-air-image' src='/assets/images/ipad-air_overview__cahgij9otxua_og.png' />
      </div>

      <div className='advert-grid'>

        <div className='wwdc22-div'
        // style={{ background: `url('/assets/images/wwwdc-2022.webp')` }}
        >
          <img className='wwdc22-image' src='/assets/images/wwdc22-og.jpeg' />
          <div className='wwdc22-h1-div'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="wwdc22-apple-icon" viewBox="0 0 16 16">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
            </svg>
            <h1 className='wwdc22-h1'>WWDC22</h1>
          </div>
          <p className='wwdc22-p'>The Worldwide Developers Conference is coming. Join us online June 6-10.</p>
          <a href='' className='grid-learn-more-link'>Learn more</a>
        </div>

        <div className='gutter'>
        </div>

        <div className='apple-watch-div'>
          <div className='apple-watch-h1-div'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="watch-apple-icon" viewBox="0 0 16 16">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
            </svg>
            <h1 className='apple-watch-h1'>WATCH</h1>
          </div>
          <p className='apple-watch-sub'>SERIES 7</p>
          <p className='apple-watch-p'>It's our largest display yet.</p>
          <div className='grid-link-div'>
            <a href='' className='grid-learn-more-link'>Learn more</a>
            <a href='' className='grid-buy-link'>Buy</a>
          </div>
          <img className='apple-watch-image' src='/assets/images/apple-watch.png'></img>
        </div>

        <div className='studio-display-div'>
          <h1 className='studio-display-h1'>Studio Display</h1>
          <p className='studio-display-p'>A sight to be bold.</p>
          <div className='grid-link-div'>
            <a href='' className='grid-learn-more-link'>Learn more</a>
            <a href='' className='grid-buy-link'>Buy</a>
          </div>
          <img className='studio-display-image' src='/assets/images/studio-display-og-202203.png'></img>
        </div>

        <div className='gutter'>
        </div>

        <div className='mac-studio-div'>
          <h1 className='mac-studio-h1'>Mac Studio</h1>
          <p className='mac-studio-p'>Empower station.</p>
          <div className='grid-link-div'>
            <a href='' className='grid-learn-more-link'>Learn more</a>
            <a href='' className='grid-buy-link'>Buy</a>
          </div>
          <img className='mac-studio-image' src='/assets/images/mac-studio-og-202203.png'></img>
        </div>

        <div className='apple-arcade-div'>
          <div className='arcade-h1-div'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arcade-icon" viewBox="0 0 16 16">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
            </svg>
            <h1 className='arcade-h1'>Arcade</h1>
          </div>
          <p className='arcade-p'>Play extraordinary</p>
          <div className='grid-link-div'>
            <a href='' className='grid-learn-more-link'>Learn more</a>
            <a href='' className='grid-buy-link'>Try it free¹</a>
          </div>
          <img className='arcade-image' src='/assets/images/Apple_apple-arcade_the-enchanted-world-1_091619_big_carousel.jpg.large.png' />
        </div>

        <div className='gutter'>
        </div>

        <div className='apple-tv-div'>
          <div className='apple-tv-image'
            style={{
              backgroundImage: `url('/assets/images/mankind-poster.jpeg')`,
            }}
          >
            
            <a href='' className='apple-tv-link'>
              <p className='apple-tv-stream'>Stream now</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="apple-tv-play" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home;