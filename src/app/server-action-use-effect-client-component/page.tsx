import {delay} from "@/lib/delay";
import {ClientComponent} from "./ClientComponent";
import {Suspense} from "react";
import {ClientComponent2} from "@/app/server-action-use-effect-client-component/ClientComponent2";

const action = async () => {
  'use server';

  return delay(<ClientComponent2 />, 1000);
};

const Page = async () => (
  <Suspense fallback="Loading">
    <ClientComponent data={action}/>
  </Suspense>
);
export default Page;

