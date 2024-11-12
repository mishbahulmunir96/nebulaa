import Dashboard from "./components/Dashboard";

interface HomeProps {
  searchParams: { [key: string]: string };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <Dashboard page={Number(searchParams.page)} />
    </>
  );
}
