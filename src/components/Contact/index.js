import './index.scss';
import Loader from 'react-loaders';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const refForm = useRef()
    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
        .sendForm(
            'service_3za2du7',
            'template_ybr5vya',
            refForm.current,
            'KTpRcucXEO97jtpea'
        )
        .then(
          () => {
            alert('Message successfully sent!!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            I'm intersted in collaborating for MERN stack projects or any other
            web or application development stuff. However, if you have any other
            request or question feel free to contact me
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Contact;
