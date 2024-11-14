"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import Title from "../elements/Title";
import TeamCard from "./element/TeamCard";
interface TeamMember {
  src: string;
  alt: string;
  name: string;
  position: string;
}

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("teamMembers");
    if (storedData) {
      const { members } = JSON.parse(storedData);
      setTeamMembers(members);
    }
  });

  return (
    <Container
      classParent="pt-0"
      classChildren="h-full rounded-lg bg-pink-200 px-4 pt-10 pb-10"
    >
      <Title>Team Kami</Title>
      <div className="grid grid-cols-3 gap-2">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index} // Setiap card harus memiliki key unik
            src={member.src}
            name={member.name}
            position={member.position}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique deserunt quisquam, ratione non quaerat!"
          />
        ))}
      </div>
    </Container>
  );
};
export default TeamSection;
