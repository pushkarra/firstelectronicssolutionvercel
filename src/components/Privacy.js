import React from 'react';
import styled from "styled-components";
import { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

const Wrapper = styled.section`
  background-color: #FFF4E5;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  line-height: 1.6;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
    font-family: system-ui;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    text-transform: capitalize;
    font-family: system-ui;
  }

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 1rem;
    font-family: system-ui;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 1rem;
    font-family: system-ui;
  }

  li {
    font-size: 16px;
    font-family: system-ui;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 20px;
      font-family: system-ui;
    }

    h3 {
      font-size: 18px;
      font-family: system-ui;
    }

    p,
    li {
      font-size: 14px;
      font-family: system-ui;
    }
  }
`;

  return (
    <Wrapper>
    <div>
      <h2>Privacy Policy</h2>
      <br />
      <br />
      <h3>Updated at 2024-02-17.</h3>
      <br />
      <br />
      <p>
        First Electronics Solutions ("we," "our," or "us") is dedicated to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and share your personal information.
      </p>
      <br />
      <br />
      <p>
        This Privacy Policy applies to our application named First Electronics Solutions and its associated subdomains (collectively, our "Service"). By accessing or using our Service, you acknowledge that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
      </p>
      <br />
      <br />
      <h3>Definitions and Key Terms</h3>
      <ul>
        <li>
          <strong>Cookie:</strong> A small piece of data stored by your web browser to remember information about you, such as your language preference or login details.
        </li>
        <li>
          <strong>Company:</strong> Refers to First Electronics Solutions, Khasra no. 264, Gali-4, Near Jivaasha Neo Hospital, Prahlad Vihar, Rohini, Delhi-110042 responsible for your information under this Privacy Policy.
        </li>
        <li>
          <strong>Country:</strong> India, First Electronics Solutions where or its owners/founders are based.
        </li>
        <li>
          <strong>Customer:</strong> The company, organization, or person that signs up to use the First Electronics Solutions Service.
        </li>
        <li>
          <strong>Device:</strong> Any internet-connected/Bluetooth enabled device such as a phone, tablet, or computer used to access First Electronics Solutions and its services.
        </li>
        <li>
          <strong>IP Address:</strong> A unique number assigned to every device connected to the Internet.
        </li>
        <li>
          <strong>Personnel:</strong> Individuals employed by or under contract to perform a service on behalf of First Electronics Solutions.
        </li>
      </ul>
      <br />
      <br />
      <h3>Information Automatically Collected</h3>
      <br />
      <p>
        We automatically collect certain information, such as your IP address and device details, when you visit our platform. This information is used for analytics, security, and to personalize your experience.
      </p>
      <br />
      <br />
      <h3>Use of Collected Information</h3>
      <br />
      <p>
        The information we collect from you may be used to personalize your experience, improve our service and customer service, process transactions, and send periodic emails.
      </p>
      <br />
      <br />
      <h3>Third-Party Information</h3>
      <br />
      <p>
        We may receive information about you from third parties, such as fraud detection services, and publicly available information on social media platforms, depending on your privacy settings on these platforms.
      </p>
      <br />
      <br />
      <h3>Sharing Information with Third Parties</h3>
      <br />
      <p>
        We may share your information with advertisers, affiliated companies, and third-party service providers to perform services for us and for you. We also share information for analytics purposes and comply with legal requirements when necessary.
      </p>
      <br />
      <br />
      <h3>International Data Transfers</h3>
      <br />
      <p>
        Your information may be transferred and hosted internationally, including in countries with different privacy laws. By using our Service, you consent to these transfers.
      </p>
      <br />
      <br />
      <h3>Security</h3>
      <br />
      <p>
        We take steps to protect your information but cannot guarantee its absolute security.
      </p>
      <br />
      <br />
      <h3>Your Rights</h3>
      <br />
      <p>
        You have the right to request updates, corrections, or deletion of your personal information, subject to certain conditions.
      </p>
      <br />
      <br />
      <h3>Retention of Information</h3>
      <br />
      <p>
        We retain your information only as long as necessary for the purposes outlined in this policy or to comply with legal obligations.
      </p>
      <br />
      <br />
      <h3>Cookies and Tracking Technologies</h3>
      <br />
      <p>
        We use Cookies and other tracking technologies to personalize your experience on our website.
      </p>
      <br />
      <br />
      <h3>Changes to Our Privacy Policy</h3>
      <br />
      <p>
        We may update this Privacy Policy and will post the changes on this page.
      </p>
      <br />
      <br />
      <h3>Governing Law</h3>
      <br />
      <p>
        This Agreement is governed by the laws of India.
      </p>
      <br />
      <br />
      <h3>Your Consent</h3>
      <br />
      <p>
        By using our service, you consent to this Privacy Policy.
      </p>
      <br />
      <br />
      <h3>Links to Other Websites</h3>
      <br />
      <p>
        Our Service may contain links to other websites not operated by us. We are not responsible for their content or privacy practices.
      </p>
      <br />
      <br />
      <h3>Facebook Pixel and Tracking Technologies</h3>
      <br />
      <p>
        We use Facebook Pixel and other technologies for analytics and advertising purposes.
      </p>
      <br />
      <br />
      <h3>GDPR</h3>
      <br />
      <p>
        For users in the European Economic Area (EEA), we comply with the GDPR and respect your rights regarding your personal data.
      </p>
      <br />
      <br />
      <p>
        This Privacy Policy has been updated to reflect the services provided by First Electronics Solutions, ensuring clarity and compliance with privacy laws and regulations.
      </p>
      <br />
      <br />
    </div>
    
    </Wrapper>
    
  );
};

export default Privacy;


