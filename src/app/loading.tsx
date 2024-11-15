import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="flex h-[90vh] items-center justify-center">
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
};

export default Loading;
