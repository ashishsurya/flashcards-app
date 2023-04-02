import React from "react";

const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b border-slate-300 pb-6 text-3xl md:text-5xl space-x-3 flex items-center">{children}</div>
  );
};

export default PageHeader;
