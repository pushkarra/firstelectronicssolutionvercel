import ActorSection from "./components/ActorSection";
import { useProductContext } from "./context/productcontex";
import Footer from "./components/Footer";


const About = () => {
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