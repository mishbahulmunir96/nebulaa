import Dashboard from "./(home)/components/Dashboard";

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
