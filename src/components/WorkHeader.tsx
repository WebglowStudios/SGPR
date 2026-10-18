"use client";

interface WorkHeaderProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function WorkHeader({
  activeFilter,
  onFilterChange,
}: WorkHeaderProps) {
  const handleTabClick = (filter: string) => {
    if (filter === "avail") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    onFilterChange(filter);
  };

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="work-head-container">
      <div className="work-head-top">
        <div className="work-title-wrap">
          <span className="eyebrow">Portfolio &amp; Retrospect</span>
          <h2>
            SELECTED <em>Work</em>
          </h2>
          <p className="work-subtitle">
            A creative lead directing and shaping brand worlds as they emerge,
            evolve, or transform.
          </p>
        </div>
        <a
          href="#contact"
          onClick={handleStartProject}
          className="works-cta mag-btn"
        >
          Start a Project ↗
        </a>
      </div>

      {/* FILTER TABS BAR */}
      <div className="work-tabs-bar" role="tablist">
        <button
          className={`work-tab-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleTabClick("all")}
          role="tab"
          aria-selected={activeFilter === "all"}
        >
          All Works <span className="tab-count">(37)</span>
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "pr" ? "active" : ""}`}
          onClick={() => handleTabClick("pr")}
          role="tab"
          aria-selected={activeFilter === "pr"}
        >
          PR Campaigns
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "brand" ? "active" : ""}`}
          onClick={() => handleTabClick("brand")}
          role="tab"
          aria-selected={activeFilter === "brand"}
        >
          Brand Identity
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "editorial" ? "active" : ""}`}
          onClick={() => handleTabClick("editorial")}
          role="tab"
          aria-selected={activeFilter === "editorial"}
        >
          Fashion &amp; Editorial
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "spatial" ? "active" : ""}`}
          onClick={() => handleTabClick("spatial")}
          role="tab"
          aria-selected={activeFilter === "spatial"}
        >
          Spatial &amp; Digital
        </button>
        <button
          className="work-tab-btn"
          onClick={() => handleTabClick("avail")}
          role="tab"
          aria-selected={false}
        >
          <span className="avail-dot" />
          Available Q1/Q2
        </button>
      </div>
    </div>
  );
}
