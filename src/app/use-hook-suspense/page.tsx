import {ClientComponent} from "./ClientComponent";
import {delay} from "@/lib/delay";
import {Suspense} from "react";

const Page = async () => (
  <Suspense fallback="Loading">
    <ClientComponent data={delay(new Date().toLocaleString(), 1000)}/>
  </Suspense>
);

export default Page;

