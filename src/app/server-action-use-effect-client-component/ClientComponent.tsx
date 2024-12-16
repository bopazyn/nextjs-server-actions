'use client';

import {ReactNode, useEffect, useState} from "react";

export const ClientComponent = (props: {
  data: () => Promise<ReactNode>
}) => {
  const [data, setData] = useState<null | ReactNode>(null);
  useEffect(() => {
    (async () => {
      const data = await props.data();
      setData(data);
    })()
  }, [props.data]);
  return <div>Hello from client component. Data = {data}</div>;
};

