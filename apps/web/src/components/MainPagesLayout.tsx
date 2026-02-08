import { Outlet } from "react-router";

const MainPagesLayout = () => {
  return (
    <div className="bg-white w-full h-full shadow-sm ring ring-neutral-300 rounded-sm p-2">
      <Outlet />
    </div>
  );
};

export default MainPagesLayout;
