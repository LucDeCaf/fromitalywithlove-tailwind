const Heading = ({ children }: { children: string }): JSX.Element => {
  return (
    <h1 className="text-6xl text-center font-poppins font-medium mb-4">
      {children}
    </h1>
  );
};

export default Heading;
