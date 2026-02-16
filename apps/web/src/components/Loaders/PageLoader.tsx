import { Spinner } from "@repo/ui";

const PageLoader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3 px-3 lg:px-0">
      <Spinner variant="primary" size="lg" />
      <p className="text-neutral-500 animate-pulse">
        Setting up your workspace...
      </p>
    </div>
  );
};

export default PageLoader;
