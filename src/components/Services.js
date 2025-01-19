import React from 'react';
import styled from "styled-components";
import { TbUsersGroup } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #fff5f5 0%, #fff0f0 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #8b0000;
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  letter-spacing: 0.3px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(139, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(139, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const IconWrapper = styled.div`
  width: 110px;
  height: 110px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.1);
  border: 2px solid #fff5f5;

  svg {
    width: 50px;
    height: 50px;
    color: #8b0000;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: #8b0000;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Services = () => {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Why Choose Us</Title>
          <Subtitle>
            Experience excellence in LED lighting with our premium services and trusted solutions
          </Subtitle>
        </Header>
        <ServicesGrid>
          <ServiceCard>
            <IconWrapper>
              <TbUsersGroup />
            </IconWrapper>
            <ServiceTitle>100+ Satisfied Customers</ServiceTitle>
            <ServiceDescription>
              Join our growing community of satisfied customers who trust our lighting solutions
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <RiSecurePaymentLine />
            </IconWrapper>
            <ServiceTitle>Trusted and Reliable Products</ServiceTitle>
            <ServiceDescription>
              Quality assured products backed by extensive testing and industry certifications
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </Container>
    </Section>
  );
};

export default Services;









// import styled from "styled-components";
// import {  TbUsersGroup } from "react-icons/tb";
// import { RiSecurePaymentLine } from "react-icons/ri";

// const Services = () => {
//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="grid grid-two-column">
//           <div className="services-1">
//             <div>
//               <TbUsersGroup className="icon" />
//               <h3>1000+ Satisfied Customers</h3>
//             </div>
//           </div>

          

//           <div className="services-3">
//             <div>
//               <RiSecurePaymentLine className="icon" />
//               <h3>Trusted and Reliable Products</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 8rem 0;
//   background-color: #FFE2C9;

//   .grid {
//     gap: 4.8rem;
//   }

//   .services-1,
//   .services-2,
//   .services-3 {
//     width: auto;
//     height: 20rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-content: center;
//     background: ${({ theme }) => theme.colors.bg};
//     text-align: center;
//     border-radius: 2rem;
//     box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
//   }

//   .services-2 {
//     gap: 4rem;
//     background-color: transparent;
//     box-shadow: none;

//     .services-colum-2 {
//       background: ${({ theme }) => theme.colors.bg};
//       display: flex;
//       flex-direction: row;
//       flex: 1;
//       justify-content: center;
//       align-items: center;
//       border-radius: 2rem;
//       box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

//       div {
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//         align-items: center;
//         gap: 1rem;
//       }
//     }
//   }

//   h3 {
//     margin-top: 1.4rem;
//     font-size: 2rem;
//   }

//   .icon {
//     /* font-size: rem; */
//     width: 8rem;
//     height: 8rem;
//     padding: 2rem;
//     border-radius: 50%;
//     background-color: #fff;
//     color: #b22222;
//   }
// `;
// export default Services;