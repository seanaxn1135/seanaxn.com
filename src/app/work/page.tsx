import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
}

export default function Work() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm passionate about creating awesome things and discovering smarter,
          simpler methods to achieve our goals. I enjoy sharing these
          discoveries and lessons with fellow developers. Below is an overview
          of my work adventures so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          ThoughtWorks
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Consultant, Developer, 2022 — Present
        </p>
        <p>
          ThoughtWorks is a global technology consultancy that integrates
          strategy, design and engineering to drive digital innovation. We
          collaborate with various clients to provide innovative technical
          solutions. Presently, I am working for a government agency on a
          project that involves upgrading and migrating legacy forms.
        </p>
        <p>
          During my tenure, I have led our team to adopt Test-Driven Development
          (TDD) and pair programming. This shift has ingrained quality from the
          outset and improved our development processes. The emphasis on these
          practices has resulted in elevated code quality, establishing new
          benchmarks for how we undertake new features.
        </p>
        <p>
          I am also involved in development work, crafting high-quality code
          utilizing Vue.js and Typescript. I develop new features that help
          improve the workflow in forms and reduce customers' manual work.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Cynopsis Solutions
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Product Engineer, 2021 — 2022
        </p>
        <p>
          Cynopsis Solutions is a regulatory technology (RegTech) company that
          was founded in 2014 and has its headquarters in Singapore. I was part
          of a global team of engineers located in Singapore, Vietnam, and the
          United States. Our team worked on developing the Balanced Scorecard
          (BSC) Framework, iRIS, and the Anti-Money-Laundering (AML) tool named
          Artemis3.
        </p>
        <p>
          In my capacity, I was responsible for leading the development and
          maintenance of the iRIS Balanced Scorecard (BSC) Framework, using
          Python and Web2py to ensure compliance with the Monetary Authority of
          Singapore's (MAS) strict regulations. This project helped to enhance
          efficiency and streamline compliance processes, making regulatory
          tasks less daunting for our clients.
        </p>
        <p>
          Later, I joined the Artemis3 team, where I worked on backend
          development for Cynopsis' flagship AML tool. This project provided me
          with an opportunity to use Spring Boot, where I developed new features
          that allowed clients to conduct AML screening on their customers.
        </p>
      </div>
    </section>
  )
}
