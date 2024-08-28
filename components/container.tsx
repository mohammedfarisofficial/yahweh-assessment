const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full my-5 flex justify-between items-center">
      {children}
    </div>
  );
};

export default Container;
