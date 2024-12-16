import Link from "next/link";

const Page = () => (
  <main>
    <ul>
      <li>
        <Link href="/server-component">Server component</Link>
      </li>
      <li>
        <Link href="/server-component-suspense">Server component with Suspense</Link>
      </li>
      <li>
        <Link href="/use-hook">Use hook</Link>
      </li>
      <li>
        <Link href="/use-hook-server-action">Use hook with server action</Link>
      </li>
      <li>
        <Link href="/use-hook-server-action-use-effect">Use hook with server action and useEffect</Link>
      </li>
      <li>
        <Link href="/use-hook-suspense">Use hook with Suspense</Link>
      </li>
      <li>
        <Link href="/server-action-button">Server action button</Link>
      </li>
      <li>
        <Link href="/use-hook-client-component">Use hook with client component</Link>
      </li>
      <li>
        <Link href="/use-hook-server-component">Use hook with server component</Link>
      </li>
    </ul>
  </main>
);

export default Page
