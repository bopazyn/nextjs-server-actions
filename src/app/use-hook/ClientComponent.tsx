'use client';

import { use } from "react";

export const ClientComponent = (props: {
  data: Promise<string>
}) => {
  const data = use(props.data);
  return <div>Hello from client component. Data = {data}</div>;
};

