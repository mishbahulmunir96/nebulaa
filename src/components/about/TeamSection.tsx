import Container from "../Container";
import TeamCard from "./element.tsx/TeamCard";

const TeamSection = () => {
  return (
    <Container
      classParent="pt-0"
      classChildren="h-full rounded-lg bg-pink-200 px-4 pt-10 pb-10"
    >
      <h2>Team Kami</h2>
      <div className="grid grid-cols-3 gap-2">
        <TeamCard
          src="/image/jkw.png"
          name="Joko Mulyono"
          position="Co-Founder"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique deserunt quisquam, ratione non quaerat!"
        />
        <TeamCard
          src="/image/jkw.png"
          name="Joko Mulyono"
          position="Co-Founder"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique deserunt quisquam, ratione non quaerat!"
        />
        <TeamCard
          src="/image/jkw.png"
          name="Joko Mulyono"
          position="Co-Founder"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique deserunt quisquam, ratione non quaerat!"
        />
      </div>
    </Container>
  );
};
export default TeamSection;