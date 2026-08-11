import './App.css'

const projects = [
  {
    title: 'Mypethub',
    summary:
      'Full-stack web application developed entirely from scratch. Implements complex data access across 20+ pages and 50+ modular components.',
    tags: ['Next.js', 'TypeScript', 'React', 'Redux'],
  },
  {
    title: 'Coffee Platform',
    summary:
      'High-concurrency meeting scheduling ecosystem complete with a native companion desktop application powered by real-time sync.',
    tags: ['React', 'Electron', 'WebSocket', 'Node.js'],
  },
  {
    title: 'Techpal Suite',
    summary:
      'Multi-platform corporate communication utilities designed for high reliability and low-latency interaction across environments.',
    tags: ['React Native', 'Flutter', 'Electron', 'GraphQL'],
  },
  {
    title: 'MyPlayer',
    summary:
      'Advanced open-source audio/video streaming suite integrating complex media decoders and a headless content CMS backend.',
    tags: ['React Native', 'Strapi', 'MUI', 'REST APIs'],
  },
]

const stats = [
  ['5+ Years', 'Professional development'],
  ['12+ Projects', 'Shipped globally'],
  ['4 Countries', 'International remote exp'],
  ['3 Platforms', 'Web, mobile, desktop'],
]

const stackGroups = [
  {
    title: 'Front-End Core',
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'SASS / SCSS', 'WebGL'],
  },
  {
    title: 'Cross-Platform',
    items: ['React Native', 'Flutter', 'Electron', 'CLI Tooling'],
  },
  {
    title: 'Data & State',
    items: ['Redux Toolkit', 'GraphQL', 'REST APIs', 'WebSockets', 'Zustand'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Git / GitHub', 'Docker', 'Figma', 'Jira', 'CI/CD Pipelines'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['Python', 'Reinforcement Learning', 'GRU Networks', 'PyTorch'],
  },
  {
    title: 'Testing Architecture',
    items: ['Jest', 'Playwright', 'React Testing Library'],
  },
]

const career = [
  {
    years: '2025 - 2026',
    meta: 'Italy · Remote',
    company: 'Mypethub',
    role: 'Senior Frontend Developer',
    description:
      'Led development of the entire front-facing modular React ecosystem, ensuring pristine rendering, highly modular atomic components, and global state management.',
  },
  {
    years: '2022 - 2023',
    meta: 'Australia · Remote',
    company: 'Uniplato',
    role: 'Frontend Developer',
    description:
      'Spearheaded critical cross-platform communications applications, maintaining pixel-perfect native compliance and optimized resource usage.',
  },
  {
    years: '2021 - 2022',
    meta: 'Russia · Remote',
    company: 'Comfortel',
    role: 'Frontend Developer',
    description:
      'Designed complex Electron desktop wrappers and unified design tokens into a fast-loading, predictable utility suite.',
  },
  {
    years: '2020 - 2021',
    meta: 'Iran · On-site',
    company: 'Eaglet',
    role: 'Frontend Engineer',
    description:
      'Managed clean UI overhauls for localized high-traffic platforms, optimizing core web vitals and overall page-load speeds.',
  },
  {
    years: '2019 - 2020',
    meta: 'Iran · On-site',
    company: 'Bytino',
    role: 'Junior Frontend Developer',
    description:
      'Authored modular CSS guidelines and spearheaded lightweight React implementations for interactive agency projects.',
  },
]

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Saba Marzoughi home">
          SABA<span>DEV</span>
          <small>AI / 3D</small>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
        </div>
        <a className="pill-button ghost" href="mailto:saba.marzoughi18@gmail.com">
          Let&apos;s talk
        </a>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="availability">
              <span aria-hidden="true"></span>
              Available for new projects
            </span>
            <h1>
              I build interfaces
              <br />
              in three dimensions.
            </h1>
            <p>
              Creative developer crafting immersive, WebGL-powered digital
              experiences where design, motion, and code meet.
            </p>
            <div className="hero-actions">
              <a className="pill-button primary" href="#work">
                View Work +
              </a>
              <a className="pill-button secondary" href="/fatemeh_marzoughi.pdf">
                Download CV
              </a>
            </div>
            <div className="hero-meta" aria-label="Portfolio highlights">
              <div>
                <span>Portfolio</span>
                <strong>12 Projects</strong>
              </div>
              <div>
                <span>Experience</span>
                <strong>5+ Years</strong>
              </div>
              <div>
                <span>Core Engine</span>
                <strong>Three.js · R3F · WebGL</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Key metrics">
        <div className="container stats-grid">
          {stats.map(([value, label]) => (
            <div className="stat" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="work">
        <div className="container section-heading two-column">
          <div>
            <span className="eyebrow">Explore Creative Labs</span>
            <h2>Selected Work</h2>
          </div>
          <p>
            A curated selection of commercial and open-source applications built
            with interactive interfaces and scalable codebases.
          </p>
        </div>

        <div className="container work-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual visual-${index + 1}`}>
                <div className="empty-frame" aria-hidden="true">
                  <span></span>
                </div>
              </div>
              <div className="project-copy">
                <a className="project-title" href="#contact">
                  {project.title}
                  <span aria-hidden="true">↗</span>
                </a>
                <p>{project.summary}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section profile-section" id="about">
        <div className="container profile-grid">
          <div className="portrait-wrap">
            <div className="portrait-placeholder" aria-label="Empty portrait image placeholder">
              <span>Portrait</span>
            </div>
          </div>
          <div className="profile-copy">
            <span className="eyebrow">The Developer</span>
            <h2>Saba Marzoughi</h2>
            <p>
              Frontend Engineer with 5+ years building scalable, pixel-perfect
              web, mobile, and desktop applications. Having worked with
              international remote teams across Italy, Australia, and Russia, I
              adapt quickly to rigorous engineering standards.
            </p>
            <p>
              Currently pursuing a Master&apos;s degree in Artificial Intelligence
              to merge spatial WebGL compute with state-of-the-art neural
              interfaces and reinforcement learning.
            </p>
            <a className="video-link" href="#contact">
              <span className="play-dot" aria-hidden="true">▶</span>
              <span>
                <strong>Watch Personal Video Intro</strong>
                <small>1.45 min · transcript included</small>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="container centered-heading">
          <span className="eyebrow">Engineering Capabilities</span>
          <h2>Core Technology Stack</h2>
        </div>
        <div className="container stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section career-section" id="experience">
        <div className="container section-heading two-column">
          <div>
            <span className="eyebrow">Professional Journey</span>
            <h2>Career History</h2>
          </div>
          <p>
            Partnering with global remote agencies and product companies to
            engineer robust software.
          </p>
        </div>

        <div className="container timeline">
          {career.map((item) => (
            <article className="timeline-row" key={`${item.company}-${item.years}`}>
              <div className="timeline-date">
                <strong>{item.years}</strong>
                <span>{item.meta}</span>
              </div>
              <div className="timeline-copy">
                <h3>
                  {item.company}
                  <span>//</span>
                  <small>{item.role}</small>
                </h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-card">
            <span className="eyebrow">Have an idea?</span>
            <h2>Let&apos;s build something extraordinary</h2>
            <a className="pill-button primary" href="mailto:saba@example.com">
              Secure Consultation
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand" href="#home">
            SABA<span>MARZOUGHI</span>
          </a>
          <div className="footer-links">
            <a href="mailto:saba@example.com">Email: saba.marzoughi18@gmail.com</a>
            <a href="https://www.linkedin.com/in/sabamarzoughi/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/fatemehmarzoughi" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Saba Marzoughi. Immersive Portfolio. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App
