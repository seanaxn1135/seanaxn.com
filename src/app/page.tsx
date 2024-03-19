import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <section>
        <h1 className="font-medium text-2xl mb-6 tracking-tighter">hey, I'm Sean 👋</h1>
        <p className="prose dark:prose-invert">
          {`I'm a full-stack developer, avid `}
          <Link target="_blank" href="https://steamcommunity.com/id/ribbitrabbid/" rel="noopener noreferrer">gamer</Link>
          {` and an aspiring blog writer. I currently work as a Consultant Developer for `}
          <Link target="_blank" href="https://www.thoughtworks.com/" rel="noopener noreferrer">ThoughtWorks</Link>
          {`, where I collaborate with brilliant minds to deliver impactful digital products. When I'm not coding, you'll likely find me diving into the latest game release or lost in thought, piecing together my next blog post. Gaming is not just a hobby for me; it's a gateway to new worlds and stories, much like software engineering is a portal to endless possibilities and innovations.`}
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-10">
          <h2 className="font-small text-xl tracking-tighter">why I write ✍️</h2>
          <p className="prose dark:prose-invert">
            My blog is my battleground for demystifying software engineering—transforming complex concepts into digestible, simple-to-understand bites. And here's why I'm passionate about it:
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li className="pb-6">
              <strong>To empower new engineers 💪</strong> - The tech world is vast and sometimes intimidating. I believe in nurturing a new generation of engineers who are equipped to tackle tomorrow's challenges.
            </li>
            <li className="pb-6">
              <strong>Because I've been there 🧑‍🏫</strong> - The best teachers often aren't the distant experts but those who've recently walked the path themselves. Last year's learner is this year's guide, and I aim to be that bridge for others.

            </li>
            <li>
              <strong>To refine my mastery 💭</strong> - Simplifying complex ideas reinforces my comprehension and allows me to share practical insights, affirming that true understanding lies in the ability to teach others.
            </li>
          </ul>
          <blockquote className="prose prose-neutral dark:prose-invert">
            <p>If you can't explain it simply, you don't understand it well enough. <cite className="inline text-right text-sm opacity-75">— Albert Einstein</cite></p>
          </blockquote>
        </div>

        <div className="prose prose-neutral dark:prose-invert mt-12">
          <h2 className="font-small text-xl tracking-tighter">let's connect 🌎</h2>
          <p className="prose dark:prose-invert">
            Whether you're here to share insights, seek guidance, or simply <Link target="_blank" href="/guestbook">say hi</Link>, I'm all ears. My journey is about more than just technology; it's about connections, learning, and growing together. So, if you're curious about software engineering, looking for tips, or just want to talk about the latest game that's captured my heart, you're in the right place.
          </p>
        </div>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/seanaxn/"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">connect with me</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}