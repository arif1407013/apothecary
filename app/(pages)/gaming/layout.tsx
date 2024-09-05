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
      {controls}
      {playground}
      {scoreboard}
      {troops}
    </div>
  );
};

export default layout;
