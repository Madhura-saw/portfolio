import './index.scss';
import Loader from 'react-loaders';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import p4 from '../../assets/images/p4.png';
import p5 from '../../assets/images/p5.png';

const Projects = () => {
  return (
    <>
      <div className="container project-page">
        <h1>My Projects</h1>
        <div class="portfolio">
          <div class="portfolio_column">
            <div class="portfolio_image">
              <a
                href="https://github.com/Madhura-saw/Personality-Quiz-Game"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p4} alt="p4" />
              </a>
              <div className="overlay">Personality Quiz Game</div>
            </div>
          </div>
          <div class="portfolio_column">
            <div class="portfolio_image">
              <a
                href="https://github.com/Madhura-saw/Pragati-website"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p3} alt="p3" />
              </a>
              <div className="overlay">Pragati Website</div>
            </div>
            <div class="portfolio_image">
              <a
                href="https://github.com/Madhura-saw/PLANit"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p1} alt="p1" />
              </a>
              <div className="overlay">PLANit</div>
            </div>
          </div>
          <div class="portfolio_column">
            <div class="portfolio_image">
              <a
                href="https://github.com/Madhura-saw/Tic-Tac-Toe"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p5} alt="p5" />
              </a>
              <div className="overlay">Tic-Tac-Toe</div>
            </div>
            <div class="portfolio_image">
              <a
                href="https://github.com/Madhura-saw/Tour-Guide"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p2} alt="p2" />
              </a>
              <div className="overlay">Tour Guide</div>
            </div>
          </div>
        </div>
        <p>
          You can explore my other projects{' '}
          <a
            href="https://github.com/Madhura-saw?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <u>here</u>
          </a>
        </p>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
