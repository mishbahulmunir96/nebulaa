import Image from "next/image";
import { TestiCard } from "./elements/TestiCard";
import { RatingElement } from "./elements/Rating";
import Container from "../Container";
import SubTitle from "../elements/SubTitle";
import Title from "../elements/Title";
import TestiFragment from "./elements/TestiFragment";

const TestiSection = () => {
  return (
    <Container classParent="pt-8">
      <div className="text-center">
        <SubTitle>Ulasan</SubTitle>
        <Title>Apa Kata Mereka</Title>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly">
        <TestiFragment src="/image/jkw.png" alt="jkw" name="Ir. Joko Wi" />
        <TestiFragment src="/image/jkw.png" alt="jkw" name="Ir. Joko Wi" />
      </div>
    </Container>
  );
};

export default TestiSection;
