import './styles/projects.scss'

const Projects = () => {
  return (
    <div className="about">
      <h1>Projects</h1>

      <section className="projects">
        <div className="project">
          <div>
            <section className="wrapper">
              <h3>Budgiet</h3>
              
              <ul className="tech-list">
                <li className="tech">React.js</li>
                <li className="tech">Express/node.js</li>
                <li className="tech">PSQL</li>
                <li className="tech">Javascript</li>
              </ul>

              <p className="p-text">Budgiet is a simple Budgeting tool that takes user authentication into effect and allows end users to manage their finances. Utilizing React.js for the front end, node.js for the backend, and PSQL as a persisting database to store users and their accounts.</p>
            

              <ul className="list">
                <li>
                  <a href="https://budgiet.fly.dev/">
                    <button className='logo'>
                      <img src="https://i.imgur.com/tlCL3YUt.png" alt="web" />
                      
                    </button>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/Lozlink/Budgiet/">
                    <button>
                      <img src="https://i.imgur.com/AQcYmsVt.png" alt="github" />
                    
                    </button>
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <aside>
          <img src="https://i.imgur.com/nc5blhm.jpg" alt="" />
          </aside>
        </div>

        <div className="project">
          <div>
              <section className="wrapper">
                <h3>Sprite Knight</h3>
                
                <ul className="tech-list">
                  <li className="tech">Express/node.js</li>
                  <li className="tech">PSQL</li>
                  <li className="tech">Javascript</li>
                </ul>

                <p className="p-text">Sprite Knight is an interactive game in which users can create, fight and level up their own characters. Users have the ability to create multiple characters. Note: This project was created in collaboration with 3 others.  </p>
              

                <ul className="list">
                  <li>
                    <a href="#">
                      <button className='logo'>
                        <img src="https://i.imgur.com/pLxzu9L.jpg" alt="SK" />
                        
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/Lozlink/sprite-knight">
                      <button>
                        <img src="https://i.imgur.com/AQcYmsVt.png" alt="github" />
                        
                      </button>
                    </a>
                  </li>
                </ul>
              </section>
          </div>

          <aside>
          <img src="https://i.imgur.com/7MKtgXL.png" alt="" />
          </aside>
      </div>

      <div className="project">
          <div>
              <section className="wrapper">
                <h3>Mark's Gaming Database</h3>
                
                <ul className="tech-list">
                  <li className="tech">Ruby</li>
                  <li className="tech">Sinatra</li>
                  <li className="tech">PSQL</li>
                </ul>

                <p className="p-text"> Mark's Gaming Database is a CRUD application in which users can navigate games, as well as utilizing user authentication to add games to their wishlist upon logging in.  </p>
              

                <ul className="list">
                  <li>
                    <a href="#">
                      <button className='logo'>
                        <img src="https://i.imgur.com/CRLPijt.jpg" alt="SK" />
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/Lozlink/Game-Rental-Store-">
                      <button>
                        <img src="https://i.imgur.com/AQcYmsVt.png" alt="github" />
                      </button>
                    </a>
                  </li>
                </ul>
              </section>
          </div>

          <aside>
          <img src="https://i.imgur.com/w2ndXo2.jpg" alt="" />
          </aside>
      </div>

      <div className="project">
          <div>
              <section className="wrapper">
                <h3>Hyrule's Tic Tac Toe</h3>
                
                <ul className="tech-list">
                  <li className="tech">Javascript</li>
                  <li className="tech">HTML</li>
                  <li className="tech">CSS</li>
                </ul>

                <p className="p-text"> Tic Tac Toe based on an IP that I have been fond of for over 25 years. Play as either Link or Zelda from the The Legend of Zelda Franchise </p>
              

                <ul className="list">
                  <li>
                    <a href="https://lozlink.github.io/Link-s-TTT/">
                      <button className='logo'>
                        <img src="https://i.imgur.com/OeNbHJ5.jpg" alt="SK" />
                        
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/Lozlink/Link-s-TTT">
                      <button>
                        <img src="https://i.imgur.com/AQcYmsVt.png" alt="github" />
                       
                      </button>
                    </a>
                  </li>
                </ul>
              </section>
          </div>

          <aside>
          <img src="https://i.imgur.com/1ySQ1Kh.jpg" alt="" />
          </aside>
      </div>


      </section>
    </div>
  )
}

export default Projects