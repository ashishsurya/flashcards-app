import React from "react";

const PageLayout = ({
  header,
  children,
}: {
  header: JSX.Element;
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen px-9 pt-40 md:pt-10">
      {header}
      {children}
    </div>
  );
};

export default PageLayout;
