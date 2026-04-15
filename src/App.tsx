import { useEffect, useState } from "react";

type Page =
  | "home"
  | "case-study-ai"
  | "case-study-attestations"
  | "case-study-3"
  | "case-study-lending"
  | "resume";

type Project = {
  title: string;
  summary: string;
  tags: string[];
  page: Exclude<Page, "home" | "resume">;
};

const projects: Project[] = [
  {
    title: "AI-Powered Client Reporting",
    summary:
      "Qualitative research with financial advisors to identify reporting pain points and explore where AI recommendations could add value.",
    tags: ["User Research", "AI/UX", "Financial Services"],
    page: "case-study-ai",
  },
  {
    title: "Account Opening End-to-End Workflow Research",
    summary:
      "Multi-phase workflow research across foundational interviews, guerilla testing, and usability validation.",
    tags: ["User Research", "Workflow Design", "Financial Services"],
    page: "case-study-attestations",
  },
  {
    title: "Swaydle Discovery Research",
    summary:
      "Startup discovery research to validate demand, shape the MVP, and inform product strategy for a baby gear rental service.",
    tags: ["User Research", "Journey Mapping", "Start Up"],
    page: "case-study-3",
  },
  {
    title: "Lending Wizard: Automation and Mental Models",
    summary:
      "Redesigning a lending analysis experience to reduce manual effort, improve accuracy, and align with user mental models.",
    tags: ["User Research", "Usability Testing", "Financial Services"],
    page: "case-study-lending",
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

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

function BackNav({ onHome, onAbout }: { onHome: () => void; onAbout: () => void }) {
  return (
    <div className="subnav">
      <button type="button" className="textLink" onClick={onHome}>
        ← Back to portfolio
      </button>
      <button type="button" className="textLink" onClick={onAbout}>
        About
      </button>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_auth");
    if (saved === "true") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "research2026") {
      setAuthenticated(true);
      setError(false);
      localStorage.setItem("portfolio_auth", "true");
    } else {
      setError(true);
    }
  };

  const renderHome = () => (
    <>
      <section className="hero">
        <div className="topbar">
          <button type="button" className="brandButton" onClick={() => setPage("home")}>
            UX Research Portfolio
          </button>

          <nav className="nav">
            <button
              type="button"
              className={page === "home" ? "navLink active" : "navLink"}
              onClick={() => setPage("home")}
            >
              Work
            </button>
            <button
              type="button"
              className={page === "resume" ? "navLink active" : "navLink"}
              onClick={() => setPage("resume")}
            >
              About
            </button>
          </nav>
        </div>

        <div className="heroGrid">
          <div className="heroCopy">
            <h1>Hello! I&apos;m Melissa.</h1>
            <p>
              I am curious about how people move through experiences where digital and
              physical spaces intersect.
            </p>
            <p>
              <strong>With over a decade of experience</strong>, I bring a strategic,
              end-to-end perspective to understanding users and shaping meaningful
              product experiences.
            </p>
            <button type="button" className="primaryButton" onClick={() => setPage("resume")}>
              Learn more
            </button>
          </div>

          <div className="heroImageWrap">
            <div className="heroImageFrame">
              <img src="/melissa-hero.jpg" alt="Melissa Russell Paige" className="heroImage" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel">
          <p className="eyebrow">Core strengths</p>
          <div className="tagRow">
            {skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Selected work</h2>
          <p>
            A selection of research projects spanning AI, workflow redesign, and startup
            discovery.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <p className="eyebrow">Case Study</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tagRow compact">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <button
                type="button"
                className="textLink strong"
                onClick={() => setPage(project.page)}
              >
                View case study
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="ctaSection">
        <h2>Let&apos;s work together</h2>
        <p>
          I&apos;m always open to new opportunities, collaborations, or just chatting about
          research and product.
        </p>
        <a className="ctaButton" href="mailto:mrussellpaige@gmail.com">
          Reach out →
        </a>
        <div className="emailLine">mrussellpaige@gmail.com</div>
      </section>
    </>
  );

  const renderResume = () => (
    <section className="pageSection">
      <div className="container narrow">
        <div className="subnav">
          <button type="button" className="textLink" onClick={() => setPage("home")}>
            ← Back to work
          </button>
        </div>

        <p className="eyebrow">About</p>
        <h2 className="pageTitle">Melissa Russell Paige</h2>
        <p className="lead">
          I am a UX research leader with experience spanning internal platforms,
          financial services, consulting, and startups. My work focuses on turning
          ambiguity into clear product direction through thoughtful research, strong
          cross-functional collaboration, and compelling storytelling.
        </p>

        <div className="panel leftAlign">
          <h3>Resume</h3>
          <p className="muted">View my full resume below or open it in a new tab.</p>

          <div className="resumeEmbed">
            <iframe
              src="/melissa-russell-paige-resume.pdf"
              title="Melissa Russell Paige Resume"
              className="resumeFrame"
            />
          </div>

          <div className="contactRow">
            <a
              className="secondaryButton"
              href="/melissa-russell-paige-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Resume
            </a>
            <a
              className="secondaryButton light"
              href="mailto:mrussellpaige@gmail.com?subject=Inquiry%20about%20UX%20Research%20Role"
            >
              Contact Me
            </a>
            <a
              className="secondaryButton light"
              href="https://www.linkedin.com/in/melissapaige1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCaseStudyAI = () => (
    <section className="pageSection fadeInUp">
      <div className="container narrow">
        <BackNav onHome={() => setPage("home")} onAbout={() => setPage("resume")} />
        <p className="eyebrow">Case Study</p>
        <h2 className="pageTitle">AI-Powered Client Reporting</h2>
        <p className="lead">
          End-to-end user research to explore how AI can improve financial advisor report
          generation and client conversations.
        </p>

        <div className="statsGrid">
          <div>
            <p className="statLabel">Role</p>
            <p>UX Researcher</p>
          </div>
          <div>
            <p className="statLabel">Methods</p>
            <p>Moderated interviews, concept testing</p>
          </div>
          <div>
            <p className="statLabel">Participants</p>
            <p>6 advisors across roles and usage levels</p>
          </div>
        </div>

        <div className="contentStack">
          <section>
            <h3>Problem</h3>
            <p>
              Financial advisors rely on client review reports to prepare for meetings,
              but the process is time-consuming, inflexible, and difficult to tailor for
              complex client scenarios. Product wanted to explore how AI might support
              advisors without undermining trust, confidence, or the human judgment that
              is central to client conversations.
            </p>
          </section>

          <section>
            <h3>Goals</h3>
            <ul>
              <li>Understand key pain points in report creation and meeting preparation</li>
              <li>Identify where AI could add value in the workflow</li>
              <li>Determine how AI recommendations should be delivered and explained</li>
              <li>Surface the conditions required for advisors to trust and adopt AI support</li>
            </ul>
          </section>

          <section>
            <h3>My Approach</h3>
            <p>
              I framed the work as both discovery and concept evaluation. The research
              needed to uncover baseline workflow pain points while also assessing early
              reactions to AI-powered recommendations. I partnered closely with design and
              product so the findings could immediately shape the next iteration of the
              experience.
            </p>
          </section>

          <section>
            <h3>Methods</h3>
            <p>
              Conducted six moderated 1:1 interviews across analysts, associate bankers,
              and a VP banker. I tested two low-fidelity concepts to evaluate reactions to
              AI-driven recommendations, including where recommendations should appear and
              what information users needed to trust them.
            </p>
            <div className="imageGrid">
              <div className="imageCard">
                <div className="imageLabel">Concept A</div>
                <div className="imagePlaceholder">Add Concept A image here</div>
              </div>
              <div className="imageCard">
                <div className="imageLabel">Concept B</div>
                <div className="imagePlaceholder">Add Concept B image here</div>
              </div>
            </div>
            <p>
              These concepts helped probe not just preference, but the mental model behind
              AI adoption: whether users wanted AI embedded in their flow, surfaced as a
              separate assistant, or framed more as decision support than automation.
            </p>
          </section>

          <section>
            <h3>Key Insights</h3>
            <ul>
              <li>
                <strong>Core pain points were operational.</strong> Advisors struggled
                with bugs, limited customization, missing formatting controls, and
                difficulty handling complex client structures.
              </li>
              <li>
                <strong>AI was seen as a quality amplifier.</strong> Participants felt AI
                could help them create stronger, sharper reports and surface more
                thoughtful talking points for client meetings.
              </li>
              <li>
                <strong>Trust depended on explainability.</strong> Advisors consistently
                wanted a clear why behind each recommendation, making transparency critical
                for adoption.
              </li>
              <li>
                <strong>Human judgment remained essential.</strong> Some junior
                participants wanted to review AI suggestions with a more senior banker
                before including them, showing that confidence and collaboration were
                central to adoption.
              </li>
            </ul>
          </section>

          <section>
            <h3>What This Changed</h3>
            <p>
              The research shifted the conversation away from &ldquo;should we use AI?&rdquo; toward
              &ldquo;how do we make AI useful, credible, and reviewable?&rdquo; It reinforced that
              the winning direction was not a flashy assistant layer, but a
              workflow-integrated experience that preserved advisor control and made
              recommendations feel context-aware and defensible.
            </p>
          </section>

          <section>
            <h3>Impact</h3>
            <p>
              This research helped shape product direction by supporting a concept that
              integrated recommendations into the workflow, rather than presenting them as
              disconnected AI outputs. It also clarified that personalization needed to
              account for client data, advisor preferences, prior reports, and internal
              context.
            </p>
            <p>
              More broadly, the work gave stakeholders a clearer decision framework for
              how to introduce AI into a high-trust financial workflow: explainable,
              collaborative, and grounded in the advisor&apos;s existing process.
            </p>
          </section>
        </div>
      </div>
    </section>
  );

  const renderCaseStudyAttestations = () => (
    <section className="pageSection fadeInUp">
      <div className="container narrow">
        <BackNav onHome={() => setPage("home")} onAbout={() => setPage("resume")} />
        <p className="eyebrow">Case Study</p>
        <h2 className="pageTitle">Account Opening End-to-End Workflow Research</h2>
        <p className="lead">
          Led a multi-phase research program across discovery, concept validation, and
          usability testing to redesign a complex account opening workflow used by
          analysts, bankers, and investors.
        </p>

        <div className="statsGrid">
          <div>
            <p className="statLabel">Role</p>
            <p>UX Research Lead</p>
          </div>
          <div>
            <p className="statLabel">Methods</p>
            <p>Interviews, guerilla testing, usability testing</p>
          </div>
          <div>
            <p className="statLabel">Participants</p>
            <p>~19 across analysts, bankers, investors</p>
          </div>
        </div>

        <div className="contentStack">
          <section>
            <h3>Problem</h3>
            <p>
              At the time, opening an investment account for a client required navigating
              multiple disconnected systems, duplicating information, and coordinating
              across roles with unclear ownership. This created delays, inefficiencies,
              and risk, especially as new op models like pre-approving an investment
              account were introduced.
            </p>
          </section>

          <section>
            <h3>Why This Work Mattered</h3>
            <p>
              This was not a narrow UI cleanup. It was a workflow redesign effort in a
              high-stakes operational environment, where friction translated directly into
              slower onboarding, more manual follow-up, and higher coordination costs. The
              challenge was to simplify the experience without oversimplifying the
              controls and approvals the business needed.
            </p>
          </section>

          <section>
            <h3>My Approach</h3>
            <ul>
              <li>
                <strong>Phase 1 – Foundational:</strong> Understand current workflows,
                pain points, and mental models.
              </li>
              <li>
                <strong>Phase 2 – Guerilla:</strong> Rapidly test concepts and refine
                direction.
              </li>
              <li>
                <strong>Phase 3 – Usability:</strong> Validate end-to-end flows before
                launch.
              </li>
            </ul>
            <p>
              Structuring the work this way allowed the team to move from broad workflow
              understanding to fast concept decisions, then into detailed validation of
              the experience before launch.
            </p>
          </section>

          <section>
            <h3>What I Learned Across Phases</h3>
            <ul>
              <li>
                <strong>Workflows were fragmented and redundant.</strong> Users repeatedly
                entered the same data across systems, creating friction and inefficiency.
              </li>
              <li>
                <strong>Email, not internal tools, was the real system of action.</strong>
                Senior stakeholders relied almost entirely on email to complete approvals.
              </li>
              <li>
                <strong>Speed versus control was a constant tension.</strong> Adding
                approvals reduced risk, but increased perception of slowing down account
                opening.
              </li>
              <li>
                <strong>Users were willing to change behavior if it saved time.</strong>
                Earlier data collection was acceptable when it reduced downstream
                back-and-forth.
              </li>
            </ul>
          </section>

          <section>
            <h3>Design Decisions Influenced</h3>
            <ul>
              <li>
                <strong>Centralized attestations</strong> into a single location to reduce
                fragmentation.
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
                <strong>Email-first interactions</strong> for approvals, aligning the
                experience to real user behavior.
              </li>
              <li>
                <strong>Clarified ownership and status visibility</strong> so users could
                understand what was complete, blocked, or awaiting action.
              </li>
            </ul>
          </section>

          <section>
            <h3>How I Worked Cross-Functionally</h3>
            <p>
              Because the research touched multiple teams and operational stakeholders, a
              key part of the work was synthesizing findings into decisions that product,
              design, and business partners could align on quickly. I used the research to
              build a shared picture of the end-to-end workflow, which helped move the
              conversation from local optimizations to system-level improvements.
            </p>
          </section>

          <section>
            <h3>Impact</h3>
            <p>
              This research directly shaped product and design decisions across multiple
              sprints, resulting in a more efficient and scalable workflow aligned with
              how users actually work, not how we assumed they did.
            </p>
            <p>
              The updated experience was featured in the JP Morgan Private Bank Town Hall,
              where it was highlighted that <strong>the process was reduced from</strong>{" "}
              <strong>1.2 days to just 4 hours</strong>.
            </p>
          </section>

          <section>
            <h3>Reflection</h3>
            <p>
              One of the strongest lessons from this project was that operational
              workflows are often held together by informal coordination, not just formal
              system steps. Research was most valuable here when it exposed the real
              system of work, including email behaviors, workarounds, and ownership gaps
              that were otherwise invisible in product requirements alone.
            </p>
          </section>
        </div>
      </div>
    </section>
  );

  const renderCaseStudy3 = () => (
    <section className="pageSection fadeInUp">
      <div className="container narrow">
        <BackNav onHome={() => setPage("home")} onAbout={() => setPage("resume")} />
        <p className="eyebrow">Case Study</p>
        <h2 className="pageTitle">Swaydle Discovery Research</h2>
        <p className="lead">
          Co-founded and led UX for a startup focused on helping families travel more
          easily by renting baby gear at their destination.
        </p>

        <div className="statsGrid">
          <div>
            <p className="statLabel">Role</p>
            <p>Co-founder &amp; UX Lead</p>
          </div>
          <div>
            <p className="statLabel">Methods</p>
            <p>Survey, competitive analysis, MVP, analytics</p>
          </div>
          <div>
            <p className="statLabel">Timeline</p>
            <p>~6 months</p>
          </div>
        </div>

        <div className="contentStack">
          <section>
            <h3>Problem</h3>
            <p>
              Traveling with babies is logistically difficult due to the volume of gear
              required. Many parents feel inhibited from traveling because transporting
              items like cribs, car seats, and strollers is cumbersome and stressful.
            </p>
          </section>

          <section>
            <h3>Research &amp; Validation</h3>
            <p>
              I designed and distributed a survey to validate the problem and understand
              user needs. 94 parents participated across the U.S.
            </p>
            <ul>
              <li>Only ~10% had used a rental service before</li>
              <li>~2/3 expressed interest in renting baby gear while traveling</li>
            </ul>
            <p>
              This confirmed both demand and a clear opportunity to improve the
              experience.
            </p>

            <div className="imageGrid">
              <div className="imageCard">
                <img src="/images/survey-usage.png" alt="Usage chart" className="realImage" />
              </div>
              <div className="imageCard">
                <img src="/images/survey-interest.png" alt="Interest chart" className="realImage" />
              </div>
            </div>
          </section>

          <section>
            <h3>Competitive Analysis</h3>
            <p>
              Existing services were fragmented and required manual coordination via calls
              or emails. Experiences were often outdated, lacked trust signals, and made
              it difficult for users to understand availability or pricing.
            </p>
            <div className="imageGrid">
              <div className="imageCard">
                <div className="imageLabel">Competitive landscape</div>
                <div className="imagePlaceholder">Add competitive analysis table image here</div>
              </div>
            </div>
          </section>

          <section>
            <h3>Analytics &amp; Behavioral Insights</h3>
            <p>
              Through the MVP, we captured early behavioral data to complement qualitative
              insights. This helped validate not just what users said, but how they
              actually behaved when interacting with the product.
            </p>
            <ul>
              <li><strong>High mobile traffic</strong> but lower conversion compared to desktop</li>
              <li><strong>Drop-off at availability step</strong> when service areas or timing were unclear</li>
              <li><strong>Inventory limitations</strong> directly impacted conversion rates</li>
            </ul>
            <p>
              These patterns highlighted that usability alone wasn&apos;t enough—clarity,
              reliability, and operational depth were critical to driving adoption.
            </p>
          </section>

          <section>
            <h3>What I Learned</h3>
            <p>
              Beyond the top-line interest, the research revealed a deeper emotional
              layer: parents were not only trying to solve logistics, they were trying to
              reduce the mental load of travel. That shifted the product strategy toward
              reducing uncertainty and effort at every step, from browsing to delivery.
            </p>
          </section>

          <section>
            <h3>Design Strategy</h3>
            <ul>
              <li>Online booking without calls or emails</li>
              <li>Delivery and pickup included</li>
              <li>High-quality, brand-name products</li>
              <li>Clear availability and timing</li>
            </ul>
          </section>

          <section>
            <h3>User Journey &amp; Prototype</h3>
            <p>
              I mapped both the customer journey and backend service flow to ensure
              feasibility and usability. This helped align operational constraints with
              the intended experience.
            </p>
            <div className="imageGrid">
              <div className="imagePlaceholder">Journey map</div>
              <div className="imagePlaceholder">Prototype screens</div>
            </div>
          </section>

          <section>
            <h3>MVP &amp; Analytics</h3>
            <p>
              Instead of relying solely on prototypes, we launched an MVP to validate
              demand and capture real behavioral data.
            </p>
            <ul>
              <li>Users were unclear about service locations</li>
              <li>Delivery timing expectations were confusing</li>
              <li>Limited inventory reduced conversions</li>
              <li>Mobile traffic was high, but conversions skewed desktop</li>
            </ul>
          </section>

          <section>
            <h3>Impact</h3>
            <p>
              This work validated market demand, shaped the product strategy, and
              demonstrated how UX research can directly inform business viability in an
              early-stage startup.
            </p>
          </section>

          <section>
            <h3>Post-Mortem</h3>
            <p>
              The biggest constraint was technology. The platform limited our ability to
              build key features and deliver the intended experience.
            </p>
            <ul>
              <li>We launched before the tech stack could fully support the vision</li>
              <li>Skipping early prototyping increased downstream risk</li>
              <li>Better tooling decisions could have improved outcomes</li>
            </ul>
            <p>
              This reinforced the <strong>importance of aligning product ambition with technical feasibility</strong>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );

  const renderCaseStudyLending = () => (
    <section className="pageSection fadeInUp">
      <div className="container narrow">
        <BackNav onHome={() => setPage("home")} onAbout={() => setPage("resume")} />
        <p className="eyebrow">Case Study</p>
        <h2 className="pageTitle">Lending Wizard: Automation and Mental Models</h2>
        <p className="lead">
          Research and design partnership to transform complex lending analyses into a
          faster, more intuitive experience.
        </p>

        <div className="statsGrid">
          <div>
            <p className="statLabel">Role</p>
            <p>UX Research Lead</p>
          </div>
          <div>
            <p className="statLabel">Methods</p>
            <p>Usability testing, rapid iteration, stakeholder workshops</p>
          </div>
          <div>
            <p className="statLabel">Participants</p>
            <p>Analysts, specialists, advisors</p>
          </div>
        </div>

        <div className="contentStack">
          <section>
            <h3>Problem</h3>
            <p>
              Analysts and lending specialists were spending significant time manually
              calculating and compiling collateral analytics to determine loan sizes to
              clients. This was a time intensive process, which limited their ability to
              focus on higher-value work.
            </p>
          </section>

          <section>
            <h3>Opportunity</h3>
            <p>
              The team saw an opportunity to create a simple tool for these collateral
              analyses, which would accelerate turnaround time, reduce the need for
              lending specialists to get involved, and improve both advisor and client
              experience with automated documents.
            </p>
          </section>

          <section>
            <h3>My Approach</h3>
            <p>
              I partnered closely with product and design to shift focus from feature
              delivery to measurable workflow outcomes.
            </p>
            <ul>
              <li>Aligned cross-functional teams around user outcomes vs. delivery timelines</li>
              <li>Defined success metrics tied to real workflow improvements</li>
              <li>Tested early prototypes to validate usability and mental models</li>
              <li>Iterated quickly based on research insights</li>
            </ul>
          </section>

          <section>
            <h3>Success Metrics</h3>
            <ul>
              <li>Reduce time to create credit summaries or stress tests by ~75% (from ~3 hours)</li>
              <li>Increase usage among non-specialists by 15%</li>
              <li>Improve advisor satisfaction when supporting client lending inquiries</li>
            </ul>
          </section>

          <section>
            <h3>Round 1 Research</h3>
            <p>
              Conducted 1:1 usability sessions to evaluate whether users could complete
              key lending analysis tasks and whether the experience aligned with their
              expectations.
            </p>
            <ul>
              <li>Users struggled to complete core tasks</li>
              <li>Navigation and terminology did not match mental models</li>
              <li>Key actions and data were difficult to locate</li>
            </ul>
          </section>

          <section>
            <h3>Product Direction Shift</h3>
            <p>
              <strong>Based on findings, the team pivoted</strong> from a fragmented,
              screen-based experience to a guided, workflow-driven model that better
              reflected how users actually perform lending analysis.
            </p>
            <p>
              A key tension in this work was balancing speed with risk. While automation
              could reduce manual effort, the experience still needed to support careful
              review and maintain confidence in outputs.
            </p>
          </section>

          <section>
            <h3>Round 2 Research</h3>
            <ul>
              <li>Users better understood the workflow and terminology</li>
              <li>Task completion improved significantly</li>
              <li>Participants saw clear value in reducing manual work</li>
            </ul>
          </section>

          <section>
            <h3>Key Design Decisions</h3>
            <ul>
              <li>Introduced guided workflows instead of fragmented screens</li>
              <li>Co-located related actions like calculations and stress testing</li>
              <li>Added contextual education (tooltips, walkthroughs)</li>
              <li>Enabled report generation for internal and client use</li>
            </ul>
          </section>

          <section>
            <h3>Impact</h3>
            <p>
              The redesigned experience reduced manual effort, improved accuracy, and
              better aligned with user expectations—leading to faster analysis and
              stronger confidence in outputs.
            </p>
            <p>
              <strong>Lending Wizard saved just under 9,000 hours across 1,781 users in its first year after launch.</strong>
            </p>
            <p>
              It also shifted the product toward a more scalable, user-centered
              foundation for future enhancements.
            </p>
          </section>

          <section>
            <h3>Reflection</h3>
            <p>
              Even well-intentioned solutions can fail <strong>if they don&apos;t align with user mental models</strong>. Iterative research was critical in identifying where the
              experience broke down and ensuring each redesign step moved closer to how
              users actually think and work.
            </p>
            <p>
              This work reinforced that workflow transformation requires more than
              automation—it requires aligning the system to how users think, not just how
              data is structured.
            </p>
          </section>
        </div>
      </div>
    </section>
  );

  if (!authenticated) {
    return (
      <div className="siteShell passwordShell">
        <style>{`
          * { box-sizing: border-box; }
          body { margin: 0; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #fafaf9; color: #171717; }
          button, input { font: inherit; }
          .siteShell { min-height: 100vh; background: #fafaf9; }
          .passwordShell { display: flex; align-items: center; justify-content: center; padding: 24px; }
          .passwordCard { width: 100%; max-width: 460px; background: white; border: 1px solid #e5e7eb; border-radius: 24px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); }
          .passwordEyebrow { margin: 0 0 10px; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #737373; font-weight: 700; }
          .passwordTitle { margin: 0; font-size: 34px; line-height: 1.05; letter-spacing: -0.03em; }
          .passwordCopy { margin: 14px 0 0; color: #525252; line-height: 1.7; }
          .passwordForm { margin-top: 22px; display: grid; gap: 12px; }
          .passwordInput { width: 100%; border: 1px solid #d4d4d8; border-radius: 14px; padding: 14px 16px; background: #fff; }
          .unlockButton { width: 100%; border: 0; border-radius: 999px; padding: 14px 18px; background: #171717; color: white; font-weight: 600; cursor: pointer; }
        `}</style>

        <div className="passwordCard">
          <p className="passwordEyebrow">Protected Portfolio</p>
          <h1 className="passwordTitle">Melissa Russell Paige</h1>
          <p className="passwordCopy">
            This portfolio contains private work samples. Enter the password to continue.
          </p>

          <form className="passwordForm" onSubmit={handleUnlock}>
            <input
              className="passwordInput"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            />

            {error && (
              <div style={{ color: "#dc2626", fontSize: "14px" }}>
                Incorrect password. Please try again.
              </div>
            )}

            <button className="unlockButton" type="submit">
              Enter portfolio
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="siteShell">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #fafaf9; color: #171717; }
        button, a { font: inherit; }
        button { background: none; border: 0; padding: 0; cursor: pointer; }
        a { color: inherit; text-decoration: none; }
        .siteShell { min-height: 100vh; background: #fafaf9; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .container.narrow { max-width: 820px; }
        .hero { background: #bbf7d0; padding: 28px 16px 48px; margin-bottom: 32px; }
        .topbar { max-width: 1100px; margin: 0 auto 32px; display: flex; flex-direction: column; gap: 14px; }
        .brandButton { text-transform: uppercase; letter-spacing: 0.12em; font-size: 13px; font-weight: 700; color: #262626; }
        .nav { display: flex; flex-wrap: wrap; gap: 16px; }
        .navLink { font-size: 15px; color: #262626; }
        .navLink.active, .navLink:hover { text-decoration: underline; text-underline-offset: 4px; }
        .heroGrid { max-width: 1100px; margin: 0 auto; display: grid; gap: 28px; align-items: center; padding: 0 4px; }
        .heroCopy h1 { margin: 0; font-size: clamp(36px, 6vw, 56px); line-height: 1.02; letter-spacing: -0.03em; }
        .heroCopy p { margin: 18px 0 0; font-size: 18px; line-height: 1.7; color: #262626; }
        .primaryButton { margin-top: 24px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #262626; padding: 12px 18px; background: transparent; color: #171717; border-radius: 999px; min-width: 140px; transition: transform 220ms ease, background 220ms ease, color 220ms ease; }
        .primaryButton:hover { background: #171717; color: white; transform: translateY(-1px); }
        .heroImageWrap { display: flex; justify-content: center; }
        .heroImageFrame { position: relative; width: 100%; max-width: 400px; }
        .heroImage { width: 100%; height: 280px; object-fit: cover; border-radius: 18px; display: block; }
        .section { max-width: 1100px; margin: 0 auto; padding: 0 20px 32px; }
        .panel { background: white; border: 1px solid #e5e7eb; border-radius: 24px; padding: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .panel.leftAlign { text-align: left; }
        .eyebrow { margin: 0 0 14px; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #737373; font-weight: 700; }
        .sectionHeader h2 { margin: 0; font-size: 30px; letter-spacing: -0.03em; }
        .sectionHeader p { margin: 8px 0 0; color: #525252; font-size: 17px; }
        .projectGrid { display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 24px; }
        .card { background: white; border: 1px solid #e5e7eb; border-radius: 24px; padding: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgba(0,0,0,0.08); border-color: #d4d4d8; }
        .card h3 { margin: 0 0 12px; font-size: 24px; line-height: 1.2; }
        .card p { margin: 0 0 12px; color: #525252; line-height: 1.65; }
        .tagRow { display: flex; flex-wrap: wrap; gap: 10px; }
        .tagRow.compact { margin-top: 14px; }
        .tag { display: inline-flex; align-items: center; border-radius: 999px; background: #f5f5f5; border: 1px solid #e5e7eb; padding: 7px 12px; font-size: 13px; color: #404040; }
        .textLink { color: #171717; text-decoration: underline; text-underline-offset: 4px; }
        .textLink.strong { margin-top: 18px; display: inline-block; font-weight: 600; }
        .ctaSection { max-width: 1100px; width: calc(100% - 40px); margin: 32px auto 24px; padding: 40px 20px; background: #171717; color: white; border-radius: 28px; text-align: center; }
        .ctaSection h2 { margin: 0; font-size: 34px; letter-spacing: -0.03em; }
        .ctaSection p { margin: 12px auto 0; max-width: 620px; color: #d4d4d4; font-size: 17px; }
        .ctaButton { display: inline-flex; margin-top: 24px; border-radius: 999px; background: white; color: #171717; padding: 12px 20px; font-weight: 600; transition: transform 220ms ease, box-shadow 220ms ease; }
        .ctaButton:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(255,255,255,0.14); }
        .emailLine { margin-top: 14px; color: #a3a3a3; font-size: 14px; }
        .pageSection { padding: 48px 0; }
        .subnav { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 22px; }
        .pageTitle { margin: 0; font-size: clamp(34px, 5vw, 48px); letter-spacing: -0.03em; line-height: 1.06; }
        .lead { margin: 14px 0 0; font-size: 18px; line-height: 1.7; color: #525252; }
        .statsGrid { margin-top: 28px; display: grid; grid-template-columns: 1fr; gap: 14px; background: white; border: 1px solid #e5e7eb; border-radius: 24px; padding: 20px; }
        .statLabel { margin: 0 0 6px; font-weight: 700; color: #171717; }
        .contentStack { display: grid; gap: 28px; margin-top: 28px; }
        .contentStack section h3 { margin: 0 0 10px; font-size: 24px; }
        .contentStack section p { margin: 0; color: #404040; line-height: 1.75; font-size: 16px; }
        .contentStack section ul { margin: 12px 0 0; padding-left: 18px; list-style-type: disc; color: #404040; line-height: 1.75; }
        .contentStack section ul li { margin-bottom: 6px; }
        .imageGrid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 16px; }
        .imageCard { border: 1px solid #e5e7eb; border-radius: 18px; overflow: hidden; background: white; }
        .imageLabel { padding: 12px 14px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 700; }
        .imagePlaceholder { min-height: 220px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; color: #737373; text-align: center; padding: 20px; border-radius: 18px; }
        .realImage { width: 100%; display: block; }
        .resumeStack { display: grid; gap: 22px; margin-top: 18px; }
        .jobTitle { margin: 0; font-weight: 700; }
        .muted { color: #737373; margin: 4px 0 8px; }
        .resumeEmbed { width: 100%; margin-top: 18px; }
        .resumeFrame {
          width: 100%;
          height: 900px;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          background: white;
        }
        .contactRow { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 22px; }
        .secondaryButton { display: inline-flex; align-items: center; justify-content: center; border: 1px solid #171717; border-radius: 999px; padding: 11px 16px; transition: transform 220ms ease, background 220ms ease, color 220ms ease; }
        .secondaryButton:hover { transform: translateY(-1px); background: #171717; color: white; }
        .secondaryButton.light { border-color: #d4d4d4; }
        .secondaryButton.light:hover { background: #f5f5f5; color: #171717; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fadeInUp { animation: fadeUp 520ms ease both; }

        @media (prefers-reduced-motion: reduce) {
          .fadeInUp, .card, .primaryButton, .ctaButton, .secondaryButton {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (max-width: 767px) {
          .resumeFrame { height: 640px; }
        }

        @media (min-width: 768px) {
          .topbar { flex-direction: row; align-items: center; justify-content: space-between; }
          .heroGrid { grid-template-columns: 1.2fr 0.8fr; }
          .projectGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .statsGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .imageGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .heroImageWrap { justify-content: flex-end; }
        }
      `}</style>

      {page === "home" && renderHome()}
      {page === "resume" && renderResume()}
      {page === "case-study-ai" && renderCaseStudyAI()}
      {page === "case-study-attestations" && renderCaseStudyAttestations()}
      {page === "case-study-3" && renderCaseStudy3()}
      {page === "case-study-lending" && renderCaseStudyLending()}
    </div>
  );
}
