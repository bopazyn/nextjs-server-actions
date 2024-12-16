'use client';

import {ReactNode, use} from "react";

export const ClientComponent = (props: {
  data: Promise<ReactNode>
}) => {
  const data = use(props.data);
  return <div>Hello from client component. Data = {data}</div>;
};

