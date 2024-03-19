import Link from "next/link";

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
            <li>
              <strong>To empower new engineers 💪</strong> - The tech world is vast and sometimes intimidating. I believe in nurturing a new generation of engineers who are equipped to tackle tomorrow's challenges.
            </li>
            <li>
              <strong>To test my understanding 💭</strong> - By breaking down complex topics, I not only share knowledge but also solidify my own understanding.
            </li>
            <li>
              <strong>Because I've been there 🧑‍🏫</strong> - The best teachers often aren't the distant experts but those who've recently walked the path themselves. Last year's learner is this year's guide, and I aim to be that bridge for others.
            </li>
          </ul>
        </div>

        <div className="prose prose-neutral dark:prose-invert mt-12">
          <h2 className="font-small text-xl tracking-tighter">let's connect 🌐</h2>
          <p className="prose dark:prose-invert">
            Whether you're here to share insights, seek guidance, or simply say hi, I'm all ears. My journey is about more than just technology; it's about connections, learning, and growing together. So, if you're curious about software engineering, looking for tips, or just want to talk about the latest game that's captured my heart, you're in the right place.
          </p>
        </div>
      </section>
    </>
  );
}