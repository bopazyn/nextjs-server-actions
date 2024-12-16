import {delay} from "@/lib/delay";

export const ServerComponent = async () => {
  const data = await delay(new Date().toLocaleString(), 1000);
  return <>{data}</>;
};

