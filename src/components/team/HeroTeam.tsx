import Container from "../Container";

const HeroTeam = () => {
  return (
    <Container
      classParent="h-screen bg-[#FCEED5]"
      classChildren="text-center h-full flex flex-col justify-center"
    >
      <h1 className="mb-12 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
        "Kenali Tim Kami: Orang-orang di balik kesuksesan Nebulaa"
      </h1>
      <p className="mb-8 text-xl font-normal text-slate-900 dark:text-gray-400 md:px-16">
        Kami bangga memperkenalkan tim berbakat kami yang berdedikasi untuk
        menciptakan produk dan layanan terbaik. Dengan semangat dan kreativitas,
        tim kami bekerja sama untuk mewujudkan momen-momen istimewa bagi Anda.
      </p>
    </Container>
  );
};

export default HeroTeam;
