import Container from "../Container";
import AboutHeroCard from "./element/AboutHeroCard";

const AboutHero = () => {
  return (
    <Container
      classParent="h-screen bg-[#FCEED5]"
      classChildren="mt-16 bg-amber-200 px-10 py-20 rounded-xl"
    >
      <AboutHeroCard />
    </Container>
  );
};

export default AboutHero;
