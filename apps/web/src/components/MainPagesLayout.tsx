
const MainPagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white w-full h-full shadow-sm ring ring-neutral-300 rounded-sm p-2 overflow-y-auto">
      {children}
    </div>
  );
};

export default MainPagesLayout;
