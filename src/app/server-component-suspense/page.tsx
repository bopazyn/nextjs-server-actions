import {ServerComponent} from "./ServerComponent";
import {Suspense} from "react";

const Page = async () => (
  <Suspense fallback="Loading">
    <ServerComponent/>
  </Suspense>
);

export default Page;

