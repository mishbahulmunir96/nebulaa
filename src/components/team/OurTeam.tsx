import Container from "../Container";
import Title from "../elements/Title";
import OurTeamCard from "./elements/OurTeamCard";

const OurTeam = () => {
  return (
    <Container>
      <Title className="text-center">Team Kami</Title>
      <div className="grid grid-cols-3 gap-4">
        <OurTeamCard
          src="/image/jkw.png"
          alt="jkw"
          name="Ir. Joko Widodo"
          position="CEO"
        />
        <OurTeamCard
          src="/image/jkw.png"
          alt="jkw"
          name="Ir. Joko Widodo"
          position="CEO"
        />
        <OurTeamCard
          src="/image/jkw.png"
          alt="jkw"
          name="Ir. Joko Widodo"
          position="CEO"
        />
      </div>
    </Container>
  );
};

export default OurTeam;
