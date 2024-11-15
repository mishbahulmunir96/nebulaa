import Container from "../Container";
import AboutHeroCard from "./element/AboutHeroCard";

const AboutHero = () => {
  return (
    <Container classParent="min-h-screen" classChildren="h-full">
      <AboutHeroCard />
    </Container>
  );
};

export default AboutHero;
