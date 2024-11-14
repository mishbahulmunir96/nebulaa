import Container from "../Container";
import Title from "../elements/Title";
import VmCard from "./element/VmCard";

const VissionMission = () => {
  return (
    <Container
      classParent="pt-0"
      classChildren="h-full rounded-lg bg-pink-200 px-4 pt-10 pb-10"
    >
      <Title className="text-center">Visi & Misi</Title>
      <div className="flex flex-col gap-4 md:flex-row md:justify-around">
        <VmCard
          title="Visi Kami"
          value="menjadi pilihan utama dalam menyediakan buket, gift, dan hantaran yang berkualitas, menambah keindahan dalam setiap momen spesial."
        />
        <VmCard
          title="Misi Kami"
          value="memberikan produk dan layanan dengan kualitas terbaik, mengutamakan kepuasan pelanggan, dan selalu berinovasi dalam desain dan pilihan produk."
        />
      </div>
    </Container>
  );
};

export default VissionMission;
