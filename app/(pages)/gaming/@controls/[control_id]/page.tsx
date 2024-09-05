import React from "react";

const ControlIdComp = ({params}: {params: {control_id: string}}) => {
  return <div>Control Id Page of {params?.control_id}</div>;
};

export default ControlIdComp;
