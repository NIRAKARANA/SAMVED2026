import { useNavigate } from "react-router-dom";
import "./CentralDashboard.css";

const CentralDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* HERO */}
      <section className="hero">

        <div className="badge">Smart City Initiative</div>

        <h1>Smart Sanitation Management System</h1>

        <p>
          Improving waste collection efficiency, tracking sanitation tasks,
          and coordinating between workers and supervisors through digital innovation.
        </p>

        <div className="role-container">

          <div className="role-card" onClick={() => navigate("/worker-login")}>
            <div className="icon">👥</div>
            <h3>Continue as Worker</h3>
            <p>View tasks, report issues, and track your daily progress</p>
            <span className="enter">Enter Dashboard →</span>
          </div>

          <div className="role-card" onClick={() => navigate("/supervisor-login")}>
            <div className="icon">👷</div>
            <h3>Continue as Supervisor</h3>
            <p>Assign tasks, monitor workers, and view analytics</p>
            <span className="enter">Enter Dashboard →</span>
          </div>

        </div>
      </section>


      {/* SECTION */}
      <Section
        title="Problem We Are Solving"
        items={[
          "Inefficient manual tracking of sanitation tasks",
          "Lack of communication between field workers and supervisors",
          "Delayed problem reporting (overflowing bins, blocked drains)",
          "No data-driven insights for route planning"
        ]}
      />

      <Section
        title="How Our System Works"
        items={[
          "Workers receive assigned tasks via mobile interface",
          "Workers can report issues with photos and location",
          "Supervisors monitor progress in real time",
          "Dashboard tracks completion analytics"
        ]}
      />

      <Section
        title="How Our Product Addresses the Problem"
        items={[
          "Digital task assignment",
          "Issue reporting with photo/location",
          "Real-time monitoring",
          "Performance analytics"
        ]}
      />

      {/* WORKFLOW */}

      <section className="content-section">

        <h2>Complete Workflow</h2>

        <div className="workflow">

          <div className="step">
            <div className="step-number">1</div>
            Supervisor assigns routes & tasks
          </div>

          <div className="step">
            <div className="step-number">2</div>
            Worker logs in and views tasks
          </div>

          <div className="step">
            <div className="step-number">3</div>
            Worker marks tasks complete or reports issues
          </div>

          <div className="step">
            <div className="step-number">4</div>
            System updates dashboard analytics
          </div>

        </div>

      </section>

      {/* FEASIBILITY */}

      <Section
        title="Feasibility & Viability"
        items={[
          "Mobile-friendly web application",
          "Cloud database for scalability",
          "Scalable microservice architecture"
        ]}
      />

      {/* CHALLENGES */}

      <section className="content-section">

        <h2>Challenges & Solutions</h2>

        <div className="challenge-grid">

          <div className="challenge-card">
            <span className="challenge">Challenge</span>
            Worker digital literacy
            <span className="solution">Solution</span>
            Simple intuitive UI with large icons
          </div>

          <div className="challenge-card">
            <span className="challenge">Challenge</span>
            Connectivity issues in the field
            <span className="solution">Solution</span>
            Offline sync and lightweight design
          </div>

          <div className="challenge-card">
            <span className="challenge">Challenge</span>
            Resistance to adoption
            <span className="solution">Solution</span>
            Training modules and gradual rollout
          </div>

        </div>

      </section>

      {/* BUSINESS MODEL */}

      <Section
        title="Business Model"
        items={[
          "SaaS for municipalities",
          "Licensing for city administrations",
          "Usage-based pricing tiers"
        ]}
      />

      {/* FUTURE */}

      <Section
        title="Future Scope"
        items={[
          "AI-powered route optimization",
          "IoT smart bin sensors",
          "Predictive waste analytics",
          "Advanced geospatial mapping"
        ]}
      />

      {/* TECH STACK */}

      <Section
        title="Tech Stack"
        items={[
          "Frontend: React",
          "Backend: Node.js / Express",
          "Database: PostgreSQL",
          "Maps: Map integration for route tracking"
        ]}
      />

      {/* FOOTER */}

      <footer className="footer">
        <h3>Smart Sanitation Management System</h3>
        <p>© 2026 All Rights Reserved. Built for cleaner, smarter cities.</p>
      </footer>

    </div>
  );
};

export default CentralDashboard;



const Section = ({ title, items }) => (
  <section className="content-section">
    <h2>{title}</h2>

    <div className="card-grid">

      {items.map((item, i) => (
        <div key={i} className="card">
          {item}
        </div>
      ))}

    </div>
  </section>
);
