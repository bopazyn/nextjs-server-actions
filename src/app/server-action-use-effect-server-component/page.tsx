import {delay} from "@/lib/delay";
import {Suspense} from "react";
import {ClientComponent} from "./ClientComponent";
import {ServerComponent} from "./ServerComponent";

const action = async () => {
  'use server';

  return delay(<ServerComponent />, 1000);
};

const Page = async () => (
  <Suspense fallback="Loading">
    <ClientComponent data={action}/>
  </Suspense>
);
export default Page;

