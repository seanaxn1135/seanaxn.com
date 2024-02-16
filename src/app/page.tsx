import Link from "next/link";
import { JSX, ClassAttributes, AnchorHTMLAttributes } from "react";

function Badge(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">hey, I'm Sean 👋 </h1>
      <p className="prose dark:prose-invert">{`I'm a fullstack developer, avid `}
        <Link target="_blank" href="https://steamcommunity.com/id/ribbitrabbid/">gamer</Link>
        {` and an aspiring blog writer. I currently work as a Consultant Developer for `}
        <Link href="https://www.thoughtworks.com/">ThoughtWorks</Link>{` , where I collaborate with brilliant minds to deliver impactful digital products.`}</p>
    </section>
  )
}