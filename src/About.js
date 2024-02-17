import ActorSection from "./components/ActorSection";
import { useProductContext } from "./context/productcontex";
import Footer from "./components/Footer";
import  { useEffect } from 'react';


const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const { myName } = useProductContext();

  const data = {
    name: "First Electronics Solution",
  };

  return (
    <>
      {myName}
      <ActorSection myData={data} />
      <Footer />
    </>
    
  );
};

export default About;