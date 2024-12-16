import { ReactNode } from "react";

const RootLayout = (props: Readonly<{ children: ReactNode; }>) => (
  <html lang="en">
  <body>
  {props.children}
  </body>
  </html>
);

export default RootLayout;
