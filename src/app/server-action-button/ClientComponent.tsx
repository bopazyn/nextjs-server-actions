'use client';

import {useState} from "react";

export const ClientComponent = (props: {
  data: () => Promise<string>
}) => {
  const [data, setData] = useState<string | null>(null);
  const handleClick = async () => {
    const data = await props.data();
    setData(data);
  };

  return (
    <div>
      Hello from client component. Data = {data}
      <button onClick={handleClick}>Fetch
      </button>
    </div>
  );
};

