import './index.scss';
import AboutImage from '../../assets/images/about-image.png';
import Loader from 'react-loaders';

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="about-img">
          <div className="overlay"></div>
          <img className="about-image" src={AboutImage} alt="mee!!" />
        </div>
        <div className="text-zone">
          <h1>About me</h1>
          <p>
            Hello, my name is Madhura and I enjoy developing web applications. I
            started as a front-end developer and currently I'm learing and making projects in MERN stack.
          </p>
          <p>
            Apart from WebDev I also have some experience in Flutter
            Developement and created a project using Flutter & Dart.
          </p>
          <p>
            I have also worked with MongoDB and Firebase while making some Web
            and Flutter applications.
          </p>
          <p>Here are a few technologies I've been working with recently</p>
          <ul className="skills-list">
            <li>React</li>
            <li>Javascript</li>
            <li>Node js</li>
            <li>MongoDB</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
          <p>Apart from developement and academics I enjoy reading, cycling, playing badminton and binge watching :)</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
