import React from "react";

const template = ({
  children,
  // members,
  // progress
}: {
  children: React.ReactNode;
  // members: React.ReactNode;
  // progress: React.ReactDOM
}) => {
  return (
    <>
      <div>Team Profile Layout</div>
      {children}
      {/* {members}
      {progress} */}
    </>
  );
};

export default template;
