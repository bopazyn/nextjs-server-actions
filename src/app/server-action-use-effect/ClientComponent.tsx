'use client';

import {useEffect, useState} from "react";

export const ClientComponent = (props: {
  data: () => Promise<string>
}) => {
  const [data, setData] = useState<null | string>(null);
  useEffect(() => {
    (async () => {
      const data = await props.data();
      setData(data);
    })()
  }, [props.data]);
  return <div>Hello from client component. Data = {data}</div>;
};

