import {delay} from "@/lib/delay";
import {ClientComponent} from "./ClientComponent";
import {Suspense} from "react";

const action = async () => {
  'use server';

  return delay(new Date().toLocaleString(), 1000);
};

const Page = async () => (
  <Suspense fallback="Loading">
    <ClientComponent data={action}/>
  </Suspense>
);
export default Page;

