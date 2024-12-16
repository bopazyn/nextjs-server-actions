import {delay} from "@/lib/delay";

const Page = async () => {
  const data = await delay(new Date().toLocaleString(), 1000);
  return <div>Hello from server component. Data = {data}</div>;
};

export default Page;

