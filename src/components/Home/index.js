import { Link } from 'react-router-dom';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br />
            My name is Madhura Sawant.
            <br />
            <span className="sub-h1"> Web and Flutter Developer.</span>
          </h1>
          <h2>
            3rd year undergraduate student pursuing B.Tech in Information
            Technology from VJTI,Mumbai . <br /> Interested in learning, coding and
            development. 
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  );
};

export default Home;
