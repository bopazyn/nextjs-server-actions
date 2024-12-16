import {ClientComponent} from "./ClientComponent";
import {delay} from "@/lib/delay";

const Page = async () => {
  return <ClientComponent data={delay(new Date().toLocaleString(), 1000)}/>;
};

export default Page;

