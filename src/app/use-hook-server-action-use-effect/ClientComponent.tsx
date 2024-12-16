'use client';

import {use, useEffect, useState} from "react";

export const ClientComponent = (props: {
  data: () => Promise<string>
}) => {
  const [isInitial, setInitial] = useState(true);
  const data = isInitial ? 'initial' : use(props.data());
  useEffect(() => setInitial(false), []);
  
  return <div>Hello from client component. Data = {data}</div>;
};

