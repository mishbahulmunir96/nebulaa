import Box from "../Box";
import Container from "../Container";

const HeroProduct = () => {
  return (
    <Container
      classParent="h-screen  bg-white pt-32"
      classChildren="text-center  flex justify-center bg-[#FCEED5] rounded-xl pt-12 pb-12 px-8 relative overflow-hidden text-slate-200"
    >
      <div className="w-1/2"></div>
      <div className="z-40 my-auto w-1/2 text-right">
        <h1 className="py-12 text-3xl font-extrabold leading-none tracking-tight md:text-5xl">
          Momen Spesial Dimulai dari Sini
        </h1>
        <p className="text-lg font-normal">
          Temukan produk terbaik kami yang dirancang dengan sentuhan kreatif dan
          penuh makna.
        </p>
      </div>
      <Box className="-top-4 right-[450px] h-[650px] w-[550px] origin-bottom-right rotate-[70deg] bg-blue-950" />
    </Container>
  );
};

export default HeroProduct;
