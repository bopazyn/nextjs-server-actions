import {delay} from "@/lib/delay";
import {ClientComponent} from "./ClientComponent";
import {ClientComponent2} from "./ClientComponent2";

const Page = async () => {
  return <ClientComponent data={delay(<ClientComponent2 />, 1000)}/>;
};

export default Page;

