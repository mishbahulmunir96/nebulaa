import Container from "../Container";

const HeroTeam = () => {
  return (
    <Container
      classParent="h-screen "
      classChildren="text-center h-full flex flex-col justify-center"
    >
      <h1 className="mb-12 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
        "Bersama, Kami Mewujudkan Momen Spesial"
      </h1>
      <p className="mb-8 text-xl font-normal text-slate-900 dark:text-gray-400 md:px-16">
        Kami berkomitmen untuk bekerja sama sebagai tim untuk memberikan layanan
        terbaik bagi pelanggan kami. Kenali lebih dekat orang-orang di balik
        layar yang membuat semua ini mungkin terjadi.
      </p>
    </Container>
  );
};

export default HeroTeam;
