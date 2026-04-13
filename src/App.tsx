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

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const renderHome = () => (
    <>
      <section className="section">
        <div className="card strengths-card">
          <div className="strengths-layout">
            <div className="strengths-title-wrap">
              <h2 className="eyebrow">Core strengths</h2>
            </div>
            <div className="strengths-pills">
              {skills.map((skill) => (
                <span key={skill} className="pill pill-outline">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A selection of research projects spanning AI, workflow redesign, and
            complex internal systems.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="card project-card">
              <p className="card-eyebrow">{project.category}</p>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-copy">{project.summary}</p>
              <p className="card-impact">{project.impact}</p>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {project.page ? (
                <button
                  type="button"
                  onClick={() => setPage(project.page)}
                  className="link-button"
                >
                  View case study
                </button>
              ) : (
                <span className="muted-note">Case study coming soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Let&apos;s work together</h2>
        <p className="cta-copy">
          I&apos;m always open to new opportunities, collaborations, or just chatting
          about research and product.
        </p>
        <div className="cta-button-wrap">
          <a href="mailto:mrussellpaige@gmail.com" className="cta-button">
            Reach out →
          </a>
        </div>
        <p className="cta-email">mrussellpaige@gmail.com</p>
      </section>
    </>
  );

  const renderCaseStudyAI = () => (
    <section className="case-study-section">
      <div className="subnav">
        <button type="button" onClick={() => setPage("home")} className="subnav-link">
          ← Back to portfolio
        </button>
        <button type="button" onClick={() => setPage("resume")} className="subnav-link">
          About
        </button>
      </div>

      <div className="case-study-shell">
        <p className="case-study-label">Case Study</p>
        <h2 className="case-study-title">AI-Powered Client Reporting</h2>
        <p className="case-study-intro">
          End-to-end user research to explore how AI can improve financial
          advisor report generation and client conversations.
        </p>

        <div className="stats-grid">
          <div><p className="stat-label">Role</p><p>UX Researcher</p></div>
          <div><p className="stat-label">Methods</p><p>Moderated interviews, concept testing</p></div>
          <div><p className="stat-label">Participants</p><p>6 advisors across roles and usage levels</p></div>
        </div>

        <div className="case-study-stack">
          <section>
            <h3 className="section-heading">Problem</h3>
            <p>
              Financial advisors rely on client review reports to prepare for
              meetings, but the process is time-consuming, inflexible, and
              difficult to tailor for complex client scenarios. There was also
              an open question around how AI could meaningfully support this
              workflow without reducing trust.
            </p>
          </section>

          <section>
            <h3 className="section-heading">Goals</h3>
            <ul className="bullet-list">
              <li>Understand key pain points in report creation and meetings</li>
              <li>Identify where AI could add value in the workflow</li>
              <li>Determine how AI recommendations should be delivered and explained</li>
            </ul>
          </section>

          <section>
            <h3 className="section-heading">Methods</h3>
            <p>
              Conducted six moderated 1:1 interviews across analysts,
              associate bankers, and a VP banker. I tested two low-fidelity
              concepts to evaluate reactions to AI-driven recommendations,
              including where recommendations should appear and what information
              users needed to trust them.
            </p>
            <div className="image-grid">
              <figure className="image-card">
                <div className="image-card-label">Concept A</div>
                <div className="placeholder-image">Add Concept A image here</div>
              </figure>
              <figure className="image-card">
                <div className="image-card-label">Concept B</div>
                <div className="placeholder-image">Add Concept B image here</div>
              </figure>
            </div>
            <p className="supporting-copy">
              These concepts were used to probe how and where AI recommendations
              should appear, and what level of transparency users needed to
              trust them.
            </p>
          </section>

          <section>
            <h3 className="section-heading">Key Insights</h3>
            <ul className="bullet-list">
              <li><strong>Core pain points were operational.</strong> Advisors struggled with bugs, limited customization, missing formatting controls, and difficulty handling complex client structures.</li>
              <li><strong>AI was seen as a quality amplifier.</strong> Participants felt AI could help them create stronger, sharper reports and surface more thoughtful talking points for client meetings.</li>
              <li><strong>Trust depended on explainability.</strong> Advisors consistently wanted a clear why behind each recommendation, making transparency critical for adoption.</li>
              <li><strong>Human judgment remained essential.</strong> Some participants wanted to review AI suggestions with a banker before including them, showing that confidence and collaboration were central to adoption.</li>
            </ul>
          </section>

          <section>
            <h3 className="section-heading">Impact</h3>
            <p>
              This research helped shape product direction by supporting a
              concept that integrated recommendations into the workflow, rather
              than presenting them as disconnected AI outputs. It also clarified
              that personalization needed to account for client data, advisor
              preferences, prior reports, and internal context.
            </p>
          </section>

          <section>
            <h3 className="section-heading">Next Steps</h3>
            <p>
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
    <section className="case-study-section">
      <div className="subnav">
        <button type="button" onClick={() => setPage("home")} className="subnav-link">
          ← Back to portfolio
        </button>
        <button type="button" onClick={() => setPage("resume")} className="subnav-link">
          About
        </button>
      </div>

      <div className="case-study-shell">
        <p className="case-study-label">Case Study</p>
        <h2 className="case-study-title">Account Opening End-to-End Workflow Research</h2>
        <p className="case-study-intro">
          Led a multi-phase research program across discovery, concept
          validation, and usability testing to redesign a complex account
          opening workflow used by analysts, bankers, and investors.
        </p>

        <div className="stats-grid">
          <div><p className="stat-label">Role</p><p>UX Research Lead</p></div>
          <div><p className="stat-label">Methods</p><p>Interviews, guerilla testing, usability testing</p></div>
          <div><p className="stat-label">Participants</p><p>~19 across analysts, bankers, investors</p></div>
        </div>

        <div className="case-study-stack">
          <section>
            <h3 className="section-heading">Problem</h3>
            <p>
              Account opening required navigating multiple disconnected systems,
              duplicating information, and coordinating across roles with
              unclear ownership. This created delays, inefficiencies, and risk,
              especially as new requirements like IM pre-acceptance were
              introduced.
            </p>
          </section>

          <section>
            <h3 className="section-heading">My Approach</h3>
            <p>
              I structured the research across three iterative phases to both
              understand the current state and shape the future experience:
            </p>
            <ul className="bullet-list">
              <li><strong>Phase 1 – Foundational:</strong> Understand current workflows, pain points, and mental models.</li>
              <li><strong>Phase 2 – Guerilla:</strong> Rapidly test concepts and refine direction.</li>
              <li><strong>Phase 3 – Usability:</strong> Validate end-to-end flows before launch.</li>
            </ul>
          </section>

          <section>
            <h3 className="section-heading">What I Learned Across Phases</h3>
            <ul className="bullet-list">
              <li><strong>Workflows were fragmented and redundant.</strong> Users repeatedly entered the same data across systems, creating friction and inefficiency.</li>
              <li><strong>Attestations lacked clear ownership.</strong> While analysts often completed them, responsibility across roles was ambiguous.</li>
              <li><strong>Email, not internal tools, was the real system of action.</strong> Senior stakeholders relied almost entirely on email to complete approvals.</li>
              <li><strong>Speed versus control was a constant tension.</strong> Adding approvals increased risk coverage but also slowed down account opening.</li>
              <li><strong>Users were willing to change behavior if it saved time.</strong> Earlier data collection was acceptable when it reduced downstream back-and-forth.</li>
            </ul>
          </section>

          <section>
            <h3 className="section-heading">Key Design Decisions Influenced</h3>
            <ul className="bullet-list">
              <li><strong>Centralized attestations</strong> into a single location to reduce fragmentation.</li>
              <li><strong>Enabled parallel workflows</strong> to avoid unnecessary bottlenecks.</li>
              <li><strong>Pre-filled data</strong> from existing systems to reduce duplication.</li>
              <li><strong>Email-first interactions</strong> for approvals, aligning the experience to real user behavior.</li>
            </ul>
          </section>

          <section>
            <h3 className="section-heading">Impact</h3>
            <p>
              This research directly shaped product and design decisions across
              multiple sprints, resulting in a more efficient and scalable
              workflow aligned with how users actually work, not how we assumed
              they did.
            </p>
            <p>
              The updated experience was featured in the JP Morgan Private Bank
              Town Hall, where it was highlighted that the process was reduced
              from <strong>1.2 days to just 4 hours</strong>.
            </p>
          </section>

          <section>
            <h3 className="section-heading">What I&apos;d Do Next</h3>
            <p>
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
    <section className="case-study-section">
      <div className="subnav">
        <button type="button" onClick={() => setPage("home")} className="subnav-link">
          ← Back to portfolio
        </button>
        <button type="button" onClick={() => setPage("resume")} className="subnav-link">
          About
        </button>
      </div>

      <div className="case-study-shell">
        <p className="case-study-label">Case Study</p>
        <h2 className="case-study-title">Swaydle Discovery Research</h2>
        <p className="case-study-intro">
          Co-founded and led UX for a startup focused on helping families travel
          more easily by renting baby gear at their destination.
        </p>

        <div className="stats-grid">
          <div><p className="stat-label">Role</p><p>Co-founder &amp; UX Lead</p></div>
          <div><p className="stat-label">Methods</p><p>Survey, competitive analysis, personas, MVP, analytics</p></div>
          <div><p className="stat-label">Timeline</p><p>~6 months</p></div>
        </div>

        <div className="case-study-stack">
          <section>
            <h3 className="section-heading">Problem</h3>
            <p>
              Traveling with babies is logistically difficult due to the volume
              of gear required. Many parents feel inhibited from traveling
              altogether because transporting items like cribs, car seats, and
              strollers is cumbersome and stressful.
            </p>
          </section>

          <section>
            <h3 className="section-heading">Research &amp; Validation</h3>
            <p>
              I designed and distributed a survey to validate the problem and
              understand user needs. Ninety-four parents across the U.S.
              participated.
            </p>
            <div className="image-grid">
              <figure className="image-card">
                <img src="/images/survey-usage.png" alt="Pie chart showing only 10% of parents had used baby gear rental services" className="responsive-image" />
              </figure>
              <figure className="image-card">
                <img src="/images/survey-interest.png" alt="Pie chart showing most parents were interested in a baby gear rental service" className="responsive-image" />
              </figure>
            </div>
            <ul className="bullet-list">
              <li>Only ~10% had used a rental service before</li>
              <li>~2/3 said they would be interested in renting baby gear while traveling</li>
            </ul>
            <p>
              This confirmed both demand and an opportunity to differentiate on
              experience.
            </p>
          </section>

          <section>
            <h3 className="section-heading">Competitive Insights</h3>
            <p>
              Existing services were fragmented and often required manual
              coordination through calls or emails, had poor UX, and lacked
              trust signals like quality assurance.
            </p>
            <ul className="bullet-list">
              <li>Low usability and outdated design</li>
              <li>Inconvenient booking processes</li>
              <li>Lack of high-quality inventory</li>
            </ul>
          </section>

          <section>
            <h3 className="section-heading">Design Strategy</h3>
            <p>Based on research, we prioritized a seamless, digital-first experience:</p>
            <ul className="bullet-list">
              <li>Online scheduling without calls or emails</li>
              <li>Delivery and pickup included</li>
              <li>High-quality, brand-name products</li>
              <li>Clear availability and timing</li>
            </ul>
          </section>

          <section>
            <h3 className="section-heading">User Journey &amp; Prototype</h3>
            <p>
              I mapped both the customer journey and backend service flow to
              ensure feasibility and usability. This dual perspective helped
              align operations with experience design.
            </p>
            <div className="image-grid">
              <div className="placeholder-image">Journey map image</div>
              <div className="placeholder-image">Prototype screens</div>
            </div>
          </section>

          <section>
            <h3 className="section-heading">MVP &amp; Learnings</h3>
            <p>
              Instead of traditional prototyping, we launched an MVP to
              simultaneously test usability, validate demand, and gather
              behavioral data.
            </p>
            <ul className="bullet-list">
              <li>Users were unclear about service locations</li>
              <li>Timing expectations for delivery were confusing</li>
              <li>Limited inventory reduced conversions</li>
              <li>Mobile traffic was high, but conversions skewed desktop</li>
            </ul>
          </section>

          <section>
            <h3 className="section-heading">Personas</h3>
            <p>
              We identified three core user types: traveling parents,
              convenience-driven planners, and grandparents preparing for
              visits. Each had different motivations but shared a desire for
              ease and trust.
            </p>
          </section>

          <section>
            <h3 className="section-heading">Impact</h3>
            <p>
              This work validated market demand, shaped the product strategy,
              and demonstrated how UX can directly influence business viability
              in early-stage startups.
            </p>
          </section>

          <section>
            <h3 className="section-heading">Post-Mortem</h3>
            <p>
              In retrospect, the biggest constraint was technology. Using a
              limited platform restricted our ability to build key features.
            </p>
            <ul className="bullet-list">
              <li>We launched before the tech stack could support our vision</li>
              <li>Skipping early prototyping increased downstream risk</li>
              <li>Better tooling decisions could have improved success</li>
            </ul>
            <p>
              This experience reinforced the importance of aligning product
              ambition with technical feasibility.
            </p>
          </section>
        </div>
      </div>
    </section>
  );

  const renderResume = () => (
    <section className="case-study-section">
      <div className="subnav">
        <button type="button" onClick={() => setPage("home")} className="subnav-link">
          ← Back to work
        </button>
        <button type="button" onClick={() => setPage("case-study-ai")} className="subnav-link">
          Featured case study
        </button>
      </div>

      <div className="case-study-shell">
        <p className="case-study-label">About</p>
        <h2 className="case-study-title">Melissa Russell Paige</h2>
        <p className="case-study-intro">
          I am a UX research leader with experience spanning internal
          platforms, financial services, consulting, and startups. My work
          focuses on turning ambiguity into clear product direction through
          thoughtful research, strong cross-functional collaboration, and
          compelling storytelling.
        </p>

        <div className="card">
          <h3 className="section-heading">Resume highlights</h3>
          <div className="resume-stack">
            <div>
              <p className="resume-role">JP Morgan Chase &amp; Co. — VP, Product Insights</p>
              <p className="resume-date">October 2025 – Present</p>
              <p>
                Lead and grow a multidisciplinary research and design team across
                complex internal platforms, embedding user insights into product
                strategy and executive decision making.
              </p>
            </div>
            <div>
              <p className="resume-role">JP Morgan Chase &amp; Co. — VP UX Research Manager</p>
              <p className="resume-date">March 2021 – September 2025</p>
              <p>
                Drove high-impact research initiatives that improved internal
                workflows, contributed to award-winning user experience, and
                saved 8,000+ hours annually.
              </p>
            </div>
            <div>
              <p className="resume-role">Create NYC — Design Researcher</p>
              <p className="resume-date">December 2017 – March 2021</p>
              <p>
                Interfaced with clients, conducted design and interactive
                research, and partnered with strategy, copy, and design teams to
                improve end-user experiences.
              </p>
            </div>
          </div>

          <div className="resume-note">
            Add your resume PDF link here when you are ready to publish the site.
          </div>

          <div className="contact-row">
            <a href="mailto:mrussellpaige@gmail.com?subject=Inquiry%20about%20UX%20Research%20Role" className="secondary-button">
              Contact Me
            </a>
            <a href="https://www.linkedin.com/in/melissapaige1" target="_blank" rel="noopener noreferrer" className="secondary-button secondary-button-light">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="site-shell">
      <div className="site-inner">
        <header className="hero">
          <div className="topbar">
            <button type="button" onClick={() => setPage("home")} className="brand-button">
              Melissa Russell Paige
            </button>
            <nav className="topnav">
              <button type="button" onClick={() => setPage("home")} className={page === "home" ? "topnav-link topnav-link-active" : "topnav-link"}>
                Work
              </button>
              <button type="button" onClick={() => setPage("resume")} className={page === "resume" ? "topnav-link topnav-link-active" : "topnav-link"}>
                About
              </button>
            </nav>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title">Hello! I&apos;m Melissa.</h1>
              <p className="hero-text">
                I am curious about how people move through experiences where
                digital and physical spaces intersect. So after many years
                working in advertising and running my own startup, I decided to
                take that curiosity and transition my career to UX research.
              </p>
              <p className="hero-text">
                <strong>With over a decade of experience</strong>, I bring a
                strategic, end-to-end perspective to understanding users and
                shaping meaningful product experiences.
              </p>
              <button type="button" onClick={() => setPage("resume")} className="primary-outline-button">
                Learn More
              </button>
            </div>

            <div className="hero-image-wrap">
              <div className="hero-image-frame">
                <img src="/melissa-hero.jpg" alt="Melissa Russell Paige with team" className="hero-image" />
                <svg className="hero-arrow" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                  <path d="M20 20 C 120 0, 120 140, 100 160" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
                  <polygon points="95,150 110,165 90,165" fill="#F59E0B" />
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

        <footer className="footer">
          <p>© Melissa Russell Paige</p>
        </footer>
      </div>
    </div>
  );
}
