import { useState } from "react";

type Page =
  | "home"
  | "case-study-ai"
  | "case-study-attestations"
  | "case-study-3"
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

  const renderHome = () => (
    <>
      <section className="hero">
        <div className="topbar">
          <button type="button" className="brandButton" onClick={() => setPage("home")}>
            Melissa Russell Paige
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
              physical spaces intersect. After years in advertising and running my own
              startup, I transitioned into UX research.
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
              <svg className="heroArrow" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                <path
                  d="M20 20 C 120 0, 120 140, 100 160"
                  stroke="#F59E0B"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <polygon points="95,150 110,165 90,165" fill="#F59E0B" />
              </svg>
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
            A selection of research projects spanning AI, workflow redesign, and
            startup discovery.
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
              <button type="button" className="textLink strong" onClick={() => setPage(project.page)}>
                View case study
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="ctaSection">
        <h2>Let&apos;s work together</h2>
        <p>
          I&apos;m always open to new opportunities, collaborations, or just chatting
          about research and product.
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
          <h3>Resume highlights</h3>

          <div className="resumeStack">
            <div>
              <p className="jobTitle">JP Morgan Chase &amp; Co. — VP, Product Insights</p>
              <p className="muted">October 2025 – Present</p>
              <p>
                Lead and grow a multidisciplinary research and design team across
                complex internal platforms, embedding user insights into product
                strategy and executive decision making.
              </p>
            </div>

            <div>
              <p className="jobTitle">JP Morgan Chase &amp; Co. — VP UX Research Manager</p>
              <p className="muted">March 2021 – September 2025</p>
              <p>
                Drove high-impact research initiatives that improved internal
                workflows, contributed to award-winning user experience, and saved
                8,000+ hours annually.
              </p>
            </div>

            <div>
              <p className="jobTitle">Create NYC — Design Researcher</p>
              <p className="muted">December 2017 – March 2021</p>
              <p>
                Interfaced with clients, conducted design and interactive research,
                and partnered with strategy, copy, and design teams to improve end-user
                experiences.
              </p>
            </div>
          </div>

          <div className="contactRow">
            <a
              className="secondaryButton"
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
    <section className="pageSection">
      <div className="container narrow">
        <BackNav onHome={() => setPage("home")} onAbout={() => setPage("resume")} />
        <p className="eyebrow">Case Study</p>
        <h2 className="pageTitle">AI-Powered Client Reporting</h2>
        <p className="lead">
          End-to-end user research to explore how AI can improve financial advisor
          report generation and client conversations.
        </p>

        <div className="statsGrid">
          <div><p className="statLabel">Role</p><p>UX Researcher</p></div>
          <div><p className="statLabel">Methods</p><p>Moderated interviews, concept testing</p></div>
          <div><p className="statLabel">Participants</p><p>6 advisors across roles and usage levels</p></div>
        </div>

        <div className="contentStack">
          <section><h3>Problem</h3><p>Financial advisors rely on client review reports to prepare for meetings, but the process is time-consuming, inflexible, and difficult to tailor for complex client scenarios. There was also an open question around how AI could meaningfully support this workflow without reducing trust.</p></section>
          <section><h3>Goals</h3><ul><li>Understand key pain points in report creation and meetings</li><li>Identify where AI could add value in the workflow</li><li>Determine how AI recommendations should be delivered and explained</li></ul></section>
          <section><h3>Methods</h3><p>Conducted six moderated 1:1 interviews across analysts, associate bankers, and a VP banker. I tested two low-fidelity concepts to evaluate reactions to AI-driven recommendations, including where recommendations should appear and what information users needed to trust them.</p><div className="imageGrid"><div className="imageCard"><div className="imageLabel">Concept A</div><div className="imagePlaceholder">Add Concept A image here</div></div><div className="imageCard"><div className="imageLabel">Concept B</div><div className="imagePlaceholder">Add Concept B image here</div></div></div></section>
          <section><h3>Key Insights</h3><ul><li><strong>Core pain points were operational.</strong> Advisors struggled with bugs, limited customization, missing formatting controls, and difficulty handling complex client structures.</li><li><strong>AI was seen as a quality amplifier.</strong> Participants felt AI could help them create stronger, sharper reports and surface more thoughtful talking points for client meetings.</li><li><strong>Trust depended on explainability.</strong> Advisors consistently wanted a clear why behind each recommendation, making transparency critical for adoption.</li><li><strong>Human judgment remained essential.</strong> Some participants wanted to review AI suggestions with a banker before including them, showing that confidence and collaboration were central to adoption.</li></ul></section>
          <section><h3>Impact</h3><p>This research helped shape product direction by supporting a concept that integrated recommendations into the workflow, rather than presenting them as disconnected AI outputs. It also clarified that personalization needed to account for client data, advisor preferences, prior reports, and internal context.</p></section>
        </div>
      </div>
    </section>
  );

  const renderCaseStudyAttestations = () => (
    <section className="pageSection">
      <div className="container narrow">
        <BackNav onHome={() => setPage("home")} onAbout={() => setPage("resume")} />
        <p className="eyebrow">Case Study</p>
        <h2 className="pageTitle">Account Opening End-to-End Workflow Research</h2>
        <p className="lead">Led a multi-phase research program across discovery, concept validation, and usability testing to redesign a complex account opening workflow used by analysts, bankers, and investors.</p>
        <div className="statsGrid"><div><p className="statLabel">Role</p><p>UX Research Lead</p></div><div><p className="statLabel">Methods</p><p>Interviews, guerilla testing, usability testing</p></div><div><p className="statLabel">Participants</p><p>~19 across analysts, bankers, investors</p></div></div>
        <div className="contentStack">
          <section><h3>Problem</h3><p>Account opening required navigating multiple disconnected systems, duplicating information, and coordinating across roles with unclear ownership. This created delays, inefficiencies, and risk, especially as new requirements like IM pre-acceptance were introduced.</p></section>
          <section><h3>My Approach</h3><ul><li><strong>Phase 1 – Foundational:</strong> Understand current workflows, pain points, and mental models.</li><li><strong>Phase 2 – Guerilla:</strong> Rapidly test concepts and refine direction.</li><li><strong>Phase 3 – Usability:</strong> Validate end-to-end flows before launch.</li></ul></section>
          <section><h3>What I Learned Across Phases</h3><ul><li><strong>Workflows were fragmented and redundant.</strong> Users repeatedly entered the same data across systems, creating friction and inefficiency.</li><li><strong>Attestations lacked clear ownership.</strong> While analysts often completed them, responsibility across roles was ambiguous.</li><li><strong>Email, not internal tools, was the real system of action.</strong> Senior stakeholders relied almost entirely on email to complete approvals.</li><li><strong>Speed versus control was a constant tension.</strong> Adding approvals increased risk coverage but also slowed down account opening.</li><li><strong>Users were willing to change behavior if it saved time.</strong> Earlier data collection was acceptable when it reduced downstream back-and-forth.</li></ul></section>
          <section><h3>Impact</h3><p>This research directly shaped product and design decisions across multiple sprints, resulting in a more efficient and scalable workflow aligned with how users actually work, not how we assumed they did.</p><p>The updated experience was featured in the JP Morgan Private Bank Town Hall, where it was highlighted that the process was reduced from <strong>1.2 days to just 4 hours</strong>.</p></section>
        </div>
      </div>
    </section>
  );

  const renderCaseStudy3 = () => (
    <section className="pageSection">
      <div className="container narrow">
        <BackNav onHome={() => setPage("home")} onAbout={() => setPage("resume")} />
        <p className="eyebrow">Case Study</p>
        <h2 className="pageTitle">Swaydle Discovery Research</h2>
        <p className="lead">Co-founded and led UX for a startup focused on helping families travel more easily by renting baby gear at their destination.</p>
        <div className="statsGrid"><div><p className="statLabel">Role</p><p>Co-founder &amp; UX Lead</p></div><div><p className="statLabel">Methods</p><p>Survey, competitive analysis, personas, MVP, analytics</p></div><div><p className="statLabel">Timeline</p><p>~6 months</p></div></div>
        <div className="contentStack">
          <section><h3>Problem</h3><p>Traveling with babies is logistically difficult due to the volume of gear required. Many parents feel inhibited from traveling altogether because transporting items like cribs, car seats, and strollers is cumbersome and stressful.</p></section>
          <section><h3>Research &amp; Validation</h3><p>I designed and distributed a survey to validate the problem and understand user needs. Ninety-four parents across the U.S. participated.</p><div className="imageGrid"><div className="imageCard"><img src="/images/survey-usage.png" alt="Survey usage chart" className="realImage" /></div><div className="imageCard"><img src="/images/survey-interest.png" alt="Survey interest chart" className="realImage" /></div></div><ul><li>Only ~10% had used a rental service before</li><li>~2/3 said they would be interested in renting baby gear while traveling</li></ul></section>
          <section><h3>Design Strategy</h3><ul><li>Online scheduling without calls or emails</li><li>Delivery and pickup included</li><li>High-quality, brand-name products</li><li>Clear availability and timing</li></ul></section>
          <section><h3>Post-Mortem</h3><p>In retrospect, the biggest constraint was technology. Using a limited platform restricted our ability to build key features. This experience reinforced the importance of aligning product ambition with technical feasibility.</p></section>
        </div>
      </div>
    </section>
  );

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
        .hero { background: #bbf7d0; padding: 28px 20px 40px; margin-bottom: 32px; }
        .topbar { max-width: 1100px; margin: 0 auto 32px; display: flex; flex-direction: column; gap: 14px; }
        .brandButton { text-transform: uppercase; letter-spacing: 0.12em; font-size: 13px; font-weight: 700; color: #262626; }
        .nav { display: flex; flex-wrap: wrap; gap: 16px; }
        .navLink { font-size: 15px; color: #262626; }
        .navLink.active, .navLink:hover { text-decoration: underline; text-underline-offset: 4px; }
        .heroGrid { max-width: 1100px; margin: 0 auto; display: grid; gap: 28px; align-items: center; }
        .heroCopy h1 { margin: 0; font-size: clamp(36px, 6vw, 56px); line-height: 1.02; letter-spacing: -0.03em; }
        .heroCopy p { margin: 18px 0 0; font-size: 18px; line-height: 1.7; color: #262626; }
        .primaryButton { margin-top: 24px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #262626; padding: 12px 18px; background: transparent; color: #171717; border-radius: 999px; min-width: 140px; }
        .primaryButton:hover { background: #171717; color: white; }
        .heroImageWrap { display: flex; justify-content: center; }
        .heroImageFrame { position: relative; width: 100%; max-width: 400px; }
        .heroImage { width: 100%; height: 280px; object-fit: cover; border-radius: 18px; display: block; }
        .heroArrow { position: absolute; top: 15px; left: 13%; width: 140px; transform: translateX(-50%, 10%); }
        .section { max-width: 1100px; margin: 0 auto; padding: 0 20px 32px; }
        .panel { background: white; border: 1px solid #e5e7eb; border-radius: 24px; padding: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .panel.leftAlign { text-align: left; }
        .eyebrow { margin: 0 0 14px; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #737373; font-weight: 700; }
        .sectionHeader h2 { margin: 0; font-size: 30px; letter-spacing: -0.03em; }
        .sectionHeader p { margin: 8px 0 0; color: #525252; font-size: 17px; }
        .projectGrid { display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 24px; }
        .card { background: white; border: 1px solid #e5e7eb; border-radius: 24px; padding: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .card h3 { margin: 0 0 12px; font-size: 24px; line-height: 1.2; }
        .card p { margin: 0 0 12px; color: #525252; line-height: 1.65; }
        .tagRow { display: flex; flex-wrap: wrap; gap: 10px; }
        .tagRow.compact { margin-top: 14px; }
        .tag { display: inline-flex; align-items: center; border-radius: 999px; background: #f5f5f5; border: 1px solid #e5e7eb; padding: 7px 12px; font-size: 13px; color: #404040; }
        .textLink { color: #171717; text-decoration: underline; text-underline-offset: 4px; }
        .textLink.strong { margin-top: 18px; display: inline-block; font-weight: 600; }
        .ctaSection { max-width: 1100px; margin: 20px auto 0; padding: 40px 20px; }
        .ctaSection > div, .ctaSection > h2, .ctaSection > p, .ctaSection > a { max-width: 1100px; }
        .ctaSection { background: #171717; color: white; border-radius: 28px; text-align: center; }
        .ctaSection h2 { margin: 0; font-size: 34px; letter-spacing: -0.03em; }
        .ctaSection p { margin: 12px auto 0; max-width: 620px; color: #d4d4d4; font-size: 17px; }
        .ctaButton { display: inline-flex; margin-top: 24px; border-radius: 999px; background: white; color: #171717; padding: 12px 20px; font-weight: 600; }
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
        .contentStack section ul { margin: 10px 0 0; padding-left: 20px; color: #404040; line-height: 1.75; }
        .imageGrid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 16px; }
        .imageCard { border: 1px solid #e5e7eb; border-radius: 18px; overflow: hidden; background: white; }
        .imageLabel { padding: 12px 14px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 700; }
        .imagePlaceholder { min-height: 220px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; color: #737373; text-align: center; padding: 20px; }
        .realImage { width: 100%; display: block; }
        .resumeStack { display: grid; gap: 22px; margin-top: 18px; }
        .jobTitle { margin: 0; font-weight: 700; }
        .muted { color: #737373; margin: 4px 0 8px; }
        .contactRow { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 22px; }
        .secondaryButton { display: inline-flex; align-items: center; justify-content: center; border: 1px solid #171717; border-radius: 999px; padding: 11px 16px; }
        .secondaryButton.light { border-color: #d4d4d4; }
        @media (min-width: 768px) {
          .topbar { flex-direction: row; align-items: center; justify-content: space-between; }
          .heroGrid { grid-template-columns: 1.2fr 0.8fr; }
          .projectGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
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
    </div>
  );
}
