import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function ProjectPage({ project }) {
  // Scroll to top whenever a project page mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project.slug])

  return (
    <>
      <section className="project-page-header">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          <h1 className="fade-in">{project.title}</h1>
          <p className="tagline fade-in fade-in-delay-1" style={{ fontSize: 19, color: 'var(--ink-soft)', fontStyle: 'italic', marginTop: 16 }}>
            {project.blurb}
          </p>

          <div className="project-card-tags fade-in fade-in-delay-2" style={{ marginTop: 24 }}>
            {project.tags.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>

          <div className="project-meta fade-in fade-in-delay-3">
            <div className="project-meta-item">
              Status
              <strong>{project.status}</strong>
            </div>
            <div className="project-meta-item">
              Duration
              <strong>{project.duration}</strong>
            </div>
            <div className="project-meta-item">
              Deliverable
              <strong>{project.deliverable}</strong>
            </div>
          </div>
        </div>
      </section>

      {project.sections.map((s, i) => (
        <section key={i} className="project-section">
          <div className="container">
            <h2>{s.heading}</h2>
            {s.body && <p>{s.body}</p>}
            {s.list && (
              <div className="project-list">
                {s.list.map((item, j) => (
                  <div key={j} className="project-list-item">
                    <div className="label">{item.label}</div>
                    <div className="text">{item.text}</div>
                  </div>
                ))}
              </div>
            )}
            {s.body2 && <p style={{ marginTop: 24 }}>{s.body2}</p>}
            {s.timeline && (
              <div className="phase-list">
                {s.timeline.map((t, j) => (
                  <div key={j} className="phase-item">
                    <div className="phase-num">{t.phase}</div>
                    <div className="phase-weeks">{t.weeks}</div>
                    <div className="phase-title">{t.title}</div>
                    <div className="phase-note">{t.note}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  )
}
