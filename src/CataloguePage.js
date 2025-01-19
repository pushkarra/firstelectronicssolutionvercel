import React,  { useEffect } from 'react';
import styled from 'styled-components';
import QRCodeDownload from './components/QRCodeDownload';
import Catalogue from './components/Catalogue';
import Footer from "./components/Footer";

const CataloguePage = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <PageWrapper>
      <div className="catalogue-page">
        <div className="left-column">
          <QRCodeDownload />
        </div>
        <div className="right-column">
          <Catalogue />
        </div>
      </div>
    </PageWrapper>
    <Footer />
    </>
  );
};

export default CataloguePage;

const PageWrapper = styled.div`

background: linear-gradient(135deg, #fff1f1 0%, #ffe4e4 100%);

  .catalogue-page {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;

    @media (min-width: 768px) {
      flex-direction: row; 
      justify-content: space-between;
      align-items: flex-start;
    }

    .left-column,
    .right-column {
      flex: 1; /* Equal width columns */
    }

    .left-column {
      margin-right: 1rem; 
    }
  }

  @media (max-width: 768px) {
    .catalogue-page {
      padding: 1rem;
    }
  }
`;
