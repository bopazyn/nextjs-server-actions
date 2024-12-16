import {delay} from "@/lib/delay";
import {ClientComponent} from "./ClientComponent";
import {ServerComponent} from "./ServerComponent";

const Page = async () => {
  return <ClientComponent data={delay(<ServerComponent />, 1000)}/>;
};

export default Page;

