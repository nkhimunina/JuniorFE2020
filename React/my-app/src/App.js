import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section class="slider-section first">
        <div class="carousel-slide active">
          <img src="./img/slide1.jpg" alt="" class="slide-back"/>
          <div class="slide-content">
            <div class="slide-header">
              Protect nature the environment
            </div>
            <p class="slide-button">Read more</p>
          </div>
        </div>
        <div class="carousel-slide">
          <img src="./img/slide2.jpg" alt="" class="slide-back"/>
          <div class="slide-content">
            <div class="slide-header">
              Save the trees, save the bees
            </div>
            <p class="slide-button">Read more</p>
          </div>
        </div>
        <div class="carousel-slide">
          <img src="./img/slide3.jpg" alt="" class="slide-back"/>
          <div class="slide-content">
            <div class="slide-header">
              Eat beavers
            </div>
            <p class="slide-button">Read more</p>
          </div>
        </div>
        <div class="carousel-dots">
          <button class="carousel-dot active" onclick="onDotButtonClick(event)"></button>
          <button class="carousel-dot" onclick="onDotButtonClick(event)"></button>
          <button class="carousel-dot" onclick="onDotButtonClick(event)"></button>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <section class="slider-section second">
        <div class="carousel-lens">
          <div class="carousel-slides">
            <div class="carousel-slide">
              <img src="./img/slide1.jpg" alt="" class="slide-back"/>
              <div class="slide-content">
                <div class="slide-header">
                  Protect nature the environment
                </div>
                <p class="slide-button">Read more</p>
              </div>
            </div>
            <div class="carousel-slide">
              <img src="./img/slide2.jpg" alt="" class="slide-back"/>
              <div class="slide-content">
                <div class="slide-header">
                  Save the trees, save the bees
                </div>
                <p class="slide-button">Read more</p>
              </div>
            </div>
            <div class="carousel-slide">
              <img src="./img/slide3.jpg" alt="" class="slide-back"/>
              <div class="slide-content">
                <div class="slide-header">
                  Eat beavers
                </div>
                <p class="slide-button">Read more</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-dots">
            <button class="carousel-dot active" onclick="onDotButtonClick2(event)"></button>
            <button class="carousel-dot" onclick="onDotButtonClick2(event)"></button>
            <button class="carousel-dot" onclick="onDotButtonClick2(event)"></button>
          </div>
      </section>

      <section class="latest-work">
        <div class="container">
          <h2>Our Latest Work</h2>
          <p class="section-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vel commodi placeat neque possimus, dolor cum repudiandae aperiam, id ab nisi consequatur consequuntur amet labore quam iure mollitia. Obcaecati, dicta.</p>
          <div class="tab-control">
            <button class="tab-button active">Show All</button>
            <button class="tab-button">Environment</button>
            <button class="tab-button">Climate</button>
            <button class="tab-button">Photography</button>
            <button class="tab-button">Species</button>
          </div>
          <div class="tab-item active">
            <div class="work-case">
              <img src="https://i.ytimg.com/vi/lkQ0LDx9jHs/maxresdefault.jpg" alt=""/>
              <div class="case-description">
                <span>Sun Homes, Dhaka</span>
              </div>
            </div>
            <div class="work-case">
              <img src="https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png" alt=""/>
              <div class="case-description">
                <span>Sun Homes, Dhaka</span>
              </div>
            </div>
            <div class="work-case row-span-2">
              <img src="https://cs7.pikabu.ru/post_img/big/2019/01/22/10/1548178639131425422.jpg" alt=""/>
              <div class="case-description">
                <span>Sun Homes, Dhaka</span>
              </div>
            </div>
            <div class="work-case">
              <img src="https://img.rg.ru/img/content/178/22/40/kotik_d_850.jpg" alt=""/>
              <div class="case-description">
                <span>Sun Homes, Dhaka</span>
              </div>
            </div>
            <div class="work-case">
              <img src="https://ichef.bbci.co.uk/news/410/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg" alt=""/>
              <div class="case-description">
                <span>Sun Homes, Dhaka</span>
              </div>
            </div>
          </div>
          <div class="tab-item"></div>
          <div class="tab-item"></div>
          <div class="tab-item"></div>
          <div class="tab-item"></div>
        </div>
      </section>

      <section class="our-achievement">
        <div class="overlay">
          <div class="container">
            <h2>Our Achievements</h2>
            <p class="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet cum nihil aliquid delectus rem facere exercitationem itaque vero temporibus, quisquam alias pariatur quo neque nulla ipsum iusto. Praesentium, corrupti!</p>
            <div class="our-achievement-block">
              <div class="achievement-description">
                <i class="fas fa-tree"></i>
                <span class="achievement-numbers">1,523</span>
                <span class="achievement-title">Trees Cut</span>
              </div>
              <div class="achievement-description">
                <i class="fas fa-paw"></i>
                <span class="achievement-numbers">3,959</span>
                <span class="achievement-title">Animals Lost</span>
              </div>
              <div class="achievement-description">
                <i class="fas fa-leaf"></i>
                <span class="achievement-numbers">5,559</span>
                <span class="achievement-title">Trees Saved</span>
              </div>
              <div class="achievement-description">
                <i class="fas fa-bolt"></i>
                <span class="achievement-numbers">5,559</span>
                <span class="achievement-title">Bulbs Collected</span>
              </div>
              <div class="achievement-description">
                <i class="fas fa-cloud"></i>
                <span class="achievement-numbers">7,529</span>
                <span class="achievement-title">Water Level</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="latest-event">
        <div class="container">
          <h2>Latest Event</h2>
          <p class="section-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi necessitatibus, ducimus quae atque qui facilis non quis animi quo provident molestias obcaecati totam commodi aut ratione minus, placeat voluptas maiores?</p>
          <div class="latest-event-block">
            <div class="event-grid-block">
              <img src="https://ichef.bbci.co.uk/news/410/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg" alt=""/>
              <div class="event-grid-item">
                <span class="event-title">One Tree Thousand Hope</span>
                <span class="event-date">15-16 May in Dhaka</span>
                <span class="event-description">Lorem ipsum dolor sit amet, consectetur adip scing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <button class="event-button">Read More</button>
              </div>
              <div class="event-grid-item">
                <span class="event-title">One Tree Thousand Hope</span>
                <span class="event-date">15-16 May in Dhaka</span>
                <span class="event-description">Lorem ipsum dolor sit amet, consectetur adip scing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <button class="event-button">Read More</button>
              </div>
              <img src="https://cs7.pikabu.ru/post_img/big/2019/01/22/10/1548178639131425422.jpg" alt=""/>
            </div>
            <div class="event-list-block">
              <div class="event-list-item">
                <img src="https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg" alt=""/>
                <div>
                  <span class="event-title">Let’s plant 200 tree eachblah-blah</span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum</span>
                </div>
              </div>
              <div class="event-list-item">
                <img src="https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg" alt=""/>
                <div>
                  <span class="event-title">Keep your house enviroment blah-blah-blah</span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum</span>
                </div>
              </div>
              <div class="event-list-item">
                <img src="https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg" alt=""/>
                <div>
                  <span class="event-title">Urgent Clothe Needed</span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum</span>
                </div>
              </div>
              <div class="event-list-item">
                <img src="https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg" alt=""/>
                <div>
                  <span class="event-title">One Tree Thousand Hope</span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum</span>
                </div>
              </div>
              <div class="event-list-item">
                <img src="https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg" alt=""/>
                <div>
                  <span class="event-title">One Tree Thousand Hope</span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="container">
          <h2>Testimonials</h2>
          <p class="section-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit modi blanditiis dignissimos totam, a, architecto voluptatibus sunt sed error quidem velit ut fuga ullam dolore aliquam, sit consectetur labore doloremque.</p>
          <div class="testimonials-block">
            <div class="testimonials-item">
              <img src="https://avatars.mds.yandex.net/get-pdb/752643/0a24e9f6-ffff-4127-9da9-f4057a1d18d8/s1200?webp=false" alt=""/>
              <i class="fas fa-quote-left"></i>
              <span class="testimonials-text">Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sita met. Consectetur adipscing elit.</span>
              <div class="testimonials-author">
                <span>Sadequr Rahman Sojib</span>
                <span>CEO, Fourder</span>
              </div>
            </div>
            <div class="testimonials-item">
              <img src="https://cs6.pikabu.ru/post_img/big/2015/04/06/10/1428339956_219409247.jpg" alt=""/>
              <i class="fas fa-quote-left"></i>
              <span class="testimonials-text">Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sita met. Consectetur adipscing elit.</span>
              <div class="testimonials-author">
                <span>Sagorika Sultana Rupa</span>
                <span>Manager, X Co.LTD</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
