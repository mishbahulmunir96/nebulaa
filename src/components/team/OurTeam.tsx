"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import Title from "../elements/Title";
import OurTeamCard from "./elements/OurTeamCard";
import { timeStamp } from "console";

// Definisikan interface untuk anggota tim
interface TeamMember {
  src: string;
  alt: string;
  name: string;
  position: string;
}

const positions = [
  "Co-Founder",
  "CEO",
  "CTO",
  "Manager",
  "Kurir 1",
  "Kurir 2",
  // Tambahkan posisi lain jika perlu
];

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();

        const members = data.results.map((member: any, index: number) => ({
          src: member.picture.large,
          alt: `${member.name.first} ${member.name.last}`,
          name: `${member.name.first} ${member.name.last}`,
          position: positions[index % positions.length],
        }));

        const dataToStore = {
          members,
          timeStamp: Date.now(),
        };

        localStorage.setItem("teamMembers", JSON.stringify(dataToStore));

        setTeamMembers(members);
      } catch (error) {
        console.log(error);
      }
    };

    const storedData = localStorage.getItem("teamMembers");
    if (storedData) {
      const { members, timeStamp } = JSON.parse(storedData);
      const oneHourInMillis = 1000 * 60 * 60;

      if (Date.now() - timeStamp < oneHourInMillis) {
        setTeamMembers(members);
      } else {
        fetchTeamMembers();
      }
    } else {
      fetchTeamMembers();
    }
  }, []);

  return (
    <Container>
      <Title className="text-center">Team Kami</Title>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <OurTeamCard
            key={index}
            src={member.src}
            alt={member.alt}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </Container>
  );
};

export default OurTeam;
