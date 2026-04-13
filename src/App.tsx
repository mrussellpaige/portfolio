import { useState } from "react";

type Page =
  | "home"
  | "case-study-ai"
  | "case-study-attestations"
  | "case-study-3"
  | "resume";

type Project = {
  title: string;
  category: string;
  summary: string;
  impact: string;
  tags: string[];
  page?: Page;
};

const projects: Project[] = [
  {
    title: "AI-Powered Client Reporting",
    category: "Case Study",
    summary:
      "Led qualitative research with financial advisors to identify pain points in client report generation and explore how AI could enhance the experience. Conducted 1:1 moderated sessions across user segments and tested two early concepts to understand trust, usability, and value of AI-driven recommendations.",
    impact:
      "Influenced product direction toward explainable AI recommendations and Concept A design approach",
    tags: ["User Research", "AI/UX", "Strategy", "Financial Services"],
    page: "case-study-ai",
  },
  {
    title: "Account Opening End-to-End Workflow Research",
    category: "Case Study",
    summary:
      "Led 3 rounds of research across foundational interviews, guerilla concept testing, and usability validation to redesign the attestations and IM pre-acceptance experience.",
    impact:
      "Drove centralized attestations strategy and improved workflow efficiency across multiple sprints",
    tags: ["User Research", "Workflow Design", "0→1", "Financial Services"],
    page: "case-study-attestations",
  },
  {
    title: "Swaydle Discovery Research",
    category: "Case Study",
    summary:
      "Multi-phase research exploring user needs, workflow friction, and experience design opportunities across a complex system.",
    impact:
      "Informed product direction and aligned cross-functional stakeholders",
    tags: ["User Research", "Journey Mapping", "Strategy", "Start Up"],
    page: "case-study-3",
  },
];

const skills = [
  "User Research",
  "Product Strategy",
  "Mixed Methods",
  "Stakeholder Management",
  "Storytelling",
  "Research Leadership",
];

export default function PortfolioWebsiteStarter() {
  const [page, setPage] = useState<Page>("home");

  const renderHome = () => (
    <>
      <section className="py-14">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="xl:max-w-xs">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Core strengths
              </h2>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Selected work</h2>
          <p className="mt-2 text-neutral-600">
            A selection of research projects spanning AI, workflow redesign, and
            complex internal systems.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                {project.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-neutral-700">
                {project.summary}
              </p>
              <p className="mt-4 text-sm font-medium text-neutral-900">
                {project.impact}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.page ? (
                <button
                  type="button"
                  onClick={() => setPage(project.page as Page)}
                  className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
                >
                  View case study
                </button>
              ) : (
                <span className="mt-6 inline-block text-sm text-neutral-400">
                  Case study coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-neutral-900 bg-neutral-900 px-6 py-10 text-center text-white shadow-sm sm:p-12">
        <h2 className="text-3xl font-semibold tracking-tight">Let&apos;s work together</h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-200">
          I&apos;m always open to new opportunities, collaborations, or just chatting
          about research and product.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="mailto:mrussellpaige@gmail.com"
            className="w-full rounded-full bg-white px-8 py-3 text-sm font-medium text-neutral-900 transition hover:scale-[1.02] hover:shadow-md sm:w-auto"
          >
            Reach out →
          </a>
        </div>

        <p className="mt-4 text-sm text-neutral-400">mrussellpaige@gmail.com</p>
      </section>
    </>
  );

  const renderCaseStudyAI = () => (
    <section className="py-16">
      <div className="mb-8 flex items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => setPage("home")}
          className="underline underline-offset-4"
        >
          ← Back to portfolio
        </button>
        <button
          type="button"
          onClick={() => setPage("resume")}
          className="underline underline-offset-4"
        >
          About
        </button>
      </div>

      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
          Case Study
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          AI-Powered Client Reporting
        </h2>
        <p className="mt-4 text-neutral-600">
          End-to-end user research to explore how AI can improve financial
          advisor report generation and client conversations.
        </p>

        <div className="mt-10 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 md:grid-cols-3">
          <div>
            <p className="font-semibold text-neutral-900">Role</p>
            <p>UX Researcher</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Methods</p>
            <p>Moderated interviews, concept testing</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Participants</p>
            <p>6 advisors across roles and usage levels</p>
          </div>
        </div>

        <div className="mt-10 space-y-10 text-sm leading-6 text-neutral-700">
          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Problem</h3>
            <p className="mt-3">
              Financial advisors rely on client review reports to prepare for
              meetings, but the process is time-consuming, inflexible, and
              difficult to tailor for complex client scenarios. There was also
              an open question around how AI could meaningfully support this
              workflow without reducing trust.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Goals</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Understand key pain points in report creation and meetings</li>
              <li>Identify where AI could add value in the workflow</li>
              <li>
                Determine how AI recommendations should be delivered and
                explained
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Methods</h3>
            <p className="mt-3">
              Conducted six moderated 1:1 interviews across analysts,
              associate bankers, and a VP banker. I tested two low-fidelity
              concepts to evaluate reactions to AI-driven recommendations,
              including where recommendations should appear and what information
              users needed to trust them.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="border-b border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-900">
                  Concept A
                </div>
                <div className="flex min-h-[220px] items-center justify-center bg-neutral-100 px-6 text-center text-sm text-neutral-500">
                  Add Concept A image here
                </div>
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="border-b border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-900">
                  Concept B
                </div>
                <div className="flex min-h-[220px] items-center justify-center bg-neutral-100 px-6 text-center text-sm text-neutral-500">
                  Add Concept B image here
                </div>
              </figure>
            </div>

            <p className="mt-4 text-sm text-neutral-600">
              These concepts were used to probe how and where AI recommendations
              should appear, and what level of transparency users needed to
              trust them.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              Key Insights
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5">
              <li>
                <strong>Core pain points were operational.</strong> Advisors
                struggled with bugs, limited customization, missing formatting
                controls, and difficulty handling complex client structures.
              </li>
              <li>
                <strong>AI was seen as a quality amplifier.</strong> Participants
                felt AI could help them create stronger, sharper reports and
                surface more thoughtful talking points for client meetings.
              </li>
              <li>
                <strong>Trust depended on explainability.</strong> Advisors
                consistently wanted a clear why behind each recommendation,
                making transparency critical for adoption.
              </li>
              <li>
                <strong>Human judgment remained essential.</strong> Some
                participants wanted to review AI suggestions with a banker
                before including them, showing that confidence and collaboration
                were central to adoption.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Impact</h3>
            <p className="mt-3">
              This research helped shape product direction by supporting a
              concept that integrated recommendations into the workflow, rather
              than presenting them as disconnected AI outputs. It also clarified
              that personalization needed to account for client data, advisor
              preferences, prior reports, and internal context.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              Next Steps
            </h3>
            <p className="mt-3">
              Partnered with design and product to further develop the preferred
              concept and define the inputs AI should consider when generating
              recommendations.
            </p>
          </section>
        </div>
      </div>
    </section>
  );

  const renderCaseStudyAttestations = () => (
    <section className="py-16">
      <div className="mb-8 flex items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => setPage("home")}
          className="underline underline-offset-4"
        >
          ← Back to portfolio
        </button>
        <button
          type="button"
          onClick={() => setPage("resume")}
          className="underline underline-offset-4"
        >
          About
        </button>
      </div>

      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
          Case Study
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Account Opening End-to-End Workflow Research
        </h2>
        <p className="mt-4 text-neutral-600">
          Led a multi-phase research program across discovery, concept
          validation, and usability testing to redesign a complex account
          opening workflow used by analysts, bankers, and investors.
        </p>

        <div className="mt-10 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 md:grid-cols-3">
          <div>
            <p className="font-semibold text-neutral-900">Role</p>
            <p>UX Research Lead</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Methods</p>
            <p>Interviews, guerilla testing, usability testing</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Participants</p>
            <p>~19 across analysts, bankers, investors</p>
          </div>
        </div>

        <div className="mt-10 space-y-10 text-sm leading-6 text-neutral-700">
          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Problem</h3>
            <p className="mt-3">
              Account opening required navigating multiple disconnected systems,
              duplicating information, and coordinating across roles with
              unclear ownership. This created delays, inefficiencies, and risk,
              especially as new requirements like IM pre-acceptance were
              introduced.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              My Approach
            </h3>
            <p className="mt-3">
              I structured the research across three iterative phases to both
              understand the current state and shape the future experience:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Phase 1 – Foundational:</strong> Understand current
                workflows, pain points, and mental models.
              </li>
              <li>
                <strong>Phase 2 – Guerilla:</strong> Rapidly test concepts and
                refine direction.
              </li>
              <li>
                <strong>Phase 3 – Usability:</strong> Validate end-to-end flows
                before launch.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              What I Learned Across Phases
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5">
              <li>
                <strong>Workflows were fragmented and redundant.</strong> Users
                repeatedly entered the same data across systems, creating
                friction and inefficiency.
              </li>
              <li>
                <strong>Attestations lacked clear ownership.</strong> While
                analysts often completed them, responsibility across roles was
                ambiguous.
              </li>
              <li>
                <strong>Email, not internal tools, was the real system of action.</strong>
                Senior stakeholders relied almost entirely on email to complete
                approvals.
              </li>
              <li>
                <strong>Speed versus control was a constant tension.</strong>
                Adding approvals increased risk coverage but also slowed down
                account opening.
              </li>
              <li>
                <strong>Users were willing to change behavior if it saved time.</strong>
                Earlier data collection was acceptable when it reduced
                downstream back-and-forth.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              Key Design Decisions Influenced
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5">
              <li>
                <strong>Centralized attestations</strong> into a single location
                to reduce fragmentation.
              </li>
              <li>
                <strong>Enabled parallel workflows</strong> to avoid unnecessary
                bottlenecks.
              </li>
              <li>
                <strong>Pre-filled data</strong> from existing systems to reduce
                duplication.
              </li>
              <li>
                <strong>Email-first interactions</strong> for approvals,
                aligning the experience to real user behavior.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Impact</h3>
            <p className="mt-3">
              This research directly shaped product and design decisions across
              multiple sprints, resulting in a more efficient and scalable
              workflow aligned with how users actually work, not how we assumed
              they did.
            </p>
            <p className="mt-3">
              The updated experience was featured in the JP Morgan Private Bank
              Town Hall, where it was highlighted that the process was reduced
              from <strong>1.2 days to just 4 hours</strong>.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              What I&apos;d Do Next
            </h3>
            <p className="mt-3">
              Introduce behavioral analytics to track approval timelines and
              engagement, and expand research into adjacent pain points, such as
              mandate tools, that emerged as critical blockers beyond this
              workflow.
            </p>
          </section>
        </div>
      </div>
    </section>
  );

  const renderCaseStudy3 = () => (
    <section className="py-16">
      <div className="mb-8 flex items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => setPage("home")}
          className="underline underline-offset-4"
        >
          ← Back to portfolio
        </button>
        <button
          type="button"
          onClick={() => setPage("resume")}
          className="underline underline-offset-4"
        >
          About
        </button>
      </div>

      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
          Case Study
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Swaydle Discovery Research
        </h2>
        <p className="mt-4 text-neutral-600">
          Co-founded and led UX for a startup focused on helping families travel
          more easily by renting baby gear at their destination.
        </p>

        <div className="mt-10 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 md:grid-cols-3">
          <div>
            <p className="font-semibold text-neutral-900">Role</p>
            <p>Co-founder &amp; UX Lead</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Methods</p>
            <p>Survey, competitive analysis, personas, MVP, analytics</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Timeline</p>
            <p>~6 months</p>
          </div>
        </div>

        <div className="mt-10 space-y-10 text-sm leading-6 text-neutral-700">
          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Problem</h3>
            <p className="mt-3">
              Traveling with babies is logistically difficult due to the volume
              of gear required. Many parents feel inhibited from traveling
              altogether because transporting items like cribs, car seats, and
              strollers is cumbersome and stressful.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              Research &amp; Validation
            </h3>
            <p className="mt-3">
              I designed and distributed a survey to validate the problem and
              understand user needs. Ninety-four parents across the U.S.
              participated.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <img
                  src="/images/survey-usage.png"
                  alt="Pie chart showing only 10% of parents had used baby gear rental services"
                  className="w-full"
                />
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <img
                  src="/images/survey-interest.png"
                  alt="Pie chart showing most parents were interested in a baby gear rental service"
                  className="w-full"
                />
              </figure>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Only ~10% had used a rental service before</li>
              <li>
                ~2/3 said they would be interested in renting baby gear while
                traveling
              </li>
            </ul>
            <p className="mt-3">
              This confirmed both demand and an opportunity to differentiate on
              experience.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              Competitive Insights
            </h3>
            <p className="mt-3">
              Existing services were fragmented and often required manual
              coordination through calls or emails, had poor UX, and lacked
              trust signals like quality assurance.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Low usability and outdated design</li>
              <li>Inconvenient booking processes</li>
              <li>Lack of high-quality inventory</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              Design Strategy
            </h3>
            <p className="mt-3">
              Based on research, we prioritized a seamless, digital-first
              experience:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Online scheduling without calls or emails</li>
              <li>Delivery and pickup included</li>
              <li>High-quality, brand-name products</li>
              <li>Clear availability and timing</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              User Journey &amp; Prototype
            </h3>
            <p className="mt-3">
              I mapped both the customer journey and backend service flow to
              ensure feasibility and usability. This dual perspective helped
              align operations with experience design.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="flex min-h-[220px] items-center justify-center bg-neutral-100 text-sm text-neutral-500">
                Journey map image
              </div>
              <div className="flex min-h-[220px] items-center justify-center bg-neutral-100 text-sm text-neutral-500">
                Prototype screens
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              MVP &amp; Learnings
            </h3>
            <p className="mt-3">
              Instead of traditional prototyping, we launched an MVP to
              simultaneously test usability, validate demand, and gather
              behavioral data.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Users were unclear about service locations</li>
              <li>Timing expectations for delivery were confusing</li>
              <li>Limited inventory reduced conversions</li>
              <li>Mobile traffic was high, but conversions skewed desktop</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Personas</h3>
            <p className="mt-3">
              We identified three core user types: traveling parents,
              convenience-driven planners, and grandparents preparing for
              visits. Each had different motivations but shared a desire for
              ease and trust.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">Impact</h3>
            <p className="mt-3">
              This work validated market demand, shaped the product strategy,
              and demonstrated how UX can directly influence business viability
              in early-stage startups.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-neutral-900">
              Post-Mortem
            </h3>
            <p className="mt-3">
              In retrospect, the biggest constraint was technology. Using a
              limited platform restricted our ability to build key features.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>We launched before the tech stack could support our vision</li>
              <li>Skipping early prototyping increased downstream risk</li>
              <li>Better tooling decisions could have improved success</li>
            </ul>
            <p className="mt-3">
              This experience reinforced the importance of aligning product
              ambition with technical feasibility.
            </p>
          </section>
        </div>
      </div>
    </section>
  );

  const renderResume = () => (
    <section className="py-16">
      <div className="mb-8 flex items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => setPage("home")}
          className="underline underline-offset-4"
        >
          ← Back to work
        </button>
        <button
          type="button"
          onClick={() => setPage("case-study-ai")}
          className="underline underline-offset-4"
        >
          Featured case study
        </button>
      </div>

      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
          About
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Melissa Russell Paige
        </h2>
        <p className="mt-4 text-base leading-7 text-neutral-700">
          I am a UX research leader with experience spanning internal
          platforms, financial services, consulting, and startups. My work
          focuses on turning ambiguity into clear product direction through
          thoughtful research, strong cross-functional collaboration, and
          compelling storytelling.
        </p>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-neutral-900">
            Resume highlights
          </h3>
          <div className="mt-6 space-y-6 text-sm leading-6 text-neutral-700">
            <div>
              <p className="font-semibold text-neutral-900">
                JP Morgan Chase &amp; Co. — VP, Product Insights
              </p>
              <p className="text-neutral-500">October 2025 – Present</p>
              <p>
                Lead and grow a multidisciplinary research and design team across
                complex internal platforms, embedding user insights into product
                strategy and executive decision making.
              </p>
            </div>

            <div>
              <p className="font-semibold text-neutral-900">
                JP Morgan Chase &amp; Co. — VP UX Research Manager
              </p>
              <p className="text-neutral-500">March 2021 – September 2025</p>
              <p>
                Drove high-impact research initiatives that improved internal
                workflows, contributed to award-winning user experience, and
                saved 8,000+ hours annually.
              </p>
            </div>

            <div>
              <p className="font-semibold text-neutral-900">
                Create NYC — Design Researcher
              </p>
              <p className="text-neutral-500">December 2017 – March 2021</p>
              <p>
                Interfaced with clients, conducted design and interactive
                research, and partnered with strategy, copy, and design teams to
                improve end-user experiences.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-neutral-300 p-4 text-sm text-neutral-600">
            Add your resume PDF link here when you are ready to publish the site.
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:mrussellpaige@gmail.com?subject=Inquiry%20about%20UX%20Research%20Role"
              className="inline-block border border-neutral-900 px-5 py-2 text-sm transition hover:bg-neutral-900 hover:text-white"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/melissapaige1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 px-5 py-2 text-sm transition hover:bg-neutral-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <header className="-mx-6 bg-green-200 px-6 py-8 md:-mx-10 md:px-10">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
            <button
              type="button"
              onClick={() => setPage("home")}
              className="text-left text-sm font-medium uppercase tracking-[0.12em] text-neutral-800"
            >
              Melissa Russell Paige
            </button>

            <nav className="flex flex-wrap items-center gap-4 text-sm text-neutral-800 sm:gap-5">
              <button
                type="button"
                onClick={() => setPage("home")}
                className={`transition ${
                  page === "home"
                    ? "font-semibold underline underline-offset-4"
                    : "hover:underline underline-offset-4"
                }`}
              >
                Work
              </button>
              <button
                type="button"
                onClick={() => setPage("resume")}
                className={`transition ${
                  page === "resume"
                    ? "font-semibold underline underline-offset-4"
                    : "hover:underline underline-offset-4"
                }`}
              >
                About
              </button>
            </nav>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
            <div className="max-w-xl">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Hello! I&apos;m Melissa.
              </h1>
              <p className="mt-6 text-base leading-7 text-neutral-800 md:text-lg">
                I am curious about how people move through experiences where
                digital and physical spaces intersect. So after many years
                working in advertising and running my own startup, I decided to
                take that curiosity and transition my career to UX research.
                <br />
                <br />
                <strong>With over a decade of experience</strong>, I bring a
                strategic, end-to-end perspective to understanding users and
                shaping meaningful product experiences.
              </p>
              <button
                type="button"
                onClick={() => setPage("resume")}
                className="mt-6 w-full border border-neutral-800 px-5 py-3 text-sm transition hover:bg-neutral-900 hover:text-white sm:w-auto sm:py-2"
              >
                Learn More
              </button>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="/melissa-hero.jpg"
                  alt="Melissa Russell Paige with team"
                  className="h-[220px] w-full max-w-[320px] rounded-xl object-cover md:h-[280px] md:max-w-[420px]"
                />

                {/* Arrow pointing to you */}
                <svg
                  className="absolute -top-6 left-1/2 w-32 -translate-x-1/2 md:-top-8 md:w-40"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <path
                    d="M20 20 C 120 0, 120 140, 100 160"
                    stroke="#F59E0B"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <polygon
                    points="95,150 110,165 90,165"
                    fill="#F59E0B"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>

        <main>
          {page === "home" && renderHome()}
          {page === "case-study-ai" && renderCaseStudyAI()}
          {page === "case-study-attestations" && renderCaseStudyAttestations()}
          {page === "case-study-3" && renderCaseStudy3()}
          {page === "resume" && renderResume()}
        </main>

        <footer className="border-t border-neutral-200 py-8 text-sm text-neutral-500">
          <p>© Melissa Russell Paige</p>
        </footer>
      </div>
    </div>
  );
}
