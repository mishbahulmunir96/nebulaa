import Image from "next/image";
import { TestiCard } from "./elements/TestiCard";
import { RatingElement } from "./elements/Rating";
import Container from "../Container";

const Testimoni = () => {
  return (
    <Container classParent="pt-10 pb-10">
      <div className="text-center">
        <h3 className="mb-2 font-medium">Ulasan</h3>
        <h2 className="mb-4 text-2xl font-bold">Apa kata mereka?</h2>
      </div>
      <div className="flex justify-evenly">
        <div>
          <TestiCard />
          <div className="flex items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-600">
              <Image
                src="/image/jkw.png"
                alt="pak jokowi"
                width={56}
                height={56}
                className="h-[56px] rounded-full object-cover"
              />
            </div>
            <div>
              <p>Ir. Joko Widodo</p>
              <RatingElement />
            </div>
          </div>
        </div>
        <div>
          <TestiCard />
          <div>
            <p>Ir. Joko Widodo</p>
            <RatingElement />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimoni;
