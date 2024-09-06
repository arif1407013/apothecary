import React from "react";

const layout = ({
  children,
  controls,
  playground,
  scoreboard,
  troops,
}: {
  children: React.ReactNode;
  controls: React.ReactNode;
  playground: React.ReactNode;
  scoreboard: React.ReactNode;
  troops: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      <hr />
      {controls}
      <hr />
      {playground}
      <hr />
      {scoreboard}
      <hr />
      {troops}
    </div>
  );
};

export default layout;
