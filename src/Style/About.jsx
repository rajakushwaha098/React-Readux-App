
import HeroSection from "./HeroSection";
// import { useProductContext } from "./context/productcontex";

const About = () => {
  // const { myName } = useProductContext();

  const data = {
    name: "Shine Ecommerce",
  };

  return (
    <>
      {/* {myName} */}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
