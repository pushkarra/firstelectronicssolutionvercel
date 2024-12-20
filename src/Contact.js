import styled from "styled-components";
import Footer from "./components/Footer";
import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  const Wrapper = styled.section`
    padding: 4rem 0 4rem 0;
    text-align: center;
    background-color:  #FFFFF0;

    .common-heading{
      text-transform: Capitalise;
      font-weight: bold;
      color: #b22222;
      // font-family: "Lucida Console", "Courier New", monospace;
      font-size: 30px;
      
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3498.3188404156876!2d77.08287667550476!3d28.73989597560628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ0JzIzLjYiTiA3N8KwMDUnMDcuNiJF!5e0!3m2!1sen!2sin!4v1731958240655!5m2!1sen!2sin" 
      width="100%" 
      height="400" 
      title="map location"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xjvqlyqb"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    <Footer />
    </Wrapper>
    
  );
};

export default Contact;