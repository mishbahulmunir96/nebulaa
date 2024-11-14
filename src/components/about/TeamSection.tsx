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

const positions = [
  "Co-Founder",
  "CEO",
  "CTO",
  "Manager",
  "Kurir 1",
  "Kurir 2",
  // Tambahkan posisi lain jika perlu
];

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
    return members; // Mengembalikan anggota tim
  } catch (error) {
    console.error(error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
};

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("teamMembers");
    if (storedData) {
      const { members }: { members: TeamMember[] } = JSON.parse(storedData);
      setTeamMembers(members);
    } else {
      fetchTeamMembers().then((fetchedMembers) => {
        setTeamMembers(fetchedMembers);
      });
    }
  }, []);

  return (
    <Container
      classParent="pt-0"
      classChildren="h-full rounded-lg bg-pink-200 px-4 pt-10 pb-10"
    >
      <Title>Team Kami</Title>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index} // Setiap card harus memiliki key unik
            src={member.src}
            name={member.name}
            alt={member.name}
            position={member.position}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique deserunt quisquam, ratione non quaerat!"
          />
        ))}
      </div>
    </Container>
  );
};
export default TeamSection;
