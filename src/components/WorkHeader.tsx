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

  return (
    <div className="work-head-container">
      <div className="work-head-top">
        <div className="work-title-wrap">
          <span className="eyebrow reveal">Portfolio &amp; Retrospect</span>
          <h2 className="reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
            SELECTED <em>Work</em>
          </h2>
          <p className="work-subtitle reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
            A creative lead directing and shaping brand worlds as they emerge, evolve, or transform.
          </p>
        </div>
        <a
          href="#contact"
          className="works-cta mag-btn reveal"
          style={{ "--d": ".3s" } as React.CSSProperties}
        >
          Start a Project ↗
        </a>
      </div>

      {/* FILTER TABS BAR */}
      <div
        className="work-tabs-bar reveal"
        style={{ "--d": ".35s" } as React.CSSProperties}
        role="tablist"
      >
        <button
          className={`work-tab-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleTabClick("all")}
          data-filter="all"
          role="tab"
          aria-selected={activeFilter === "all"}
        >
          All Works <span className="tab-count">(37)</span>
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "pr" ? "active" : ""}`}
          onClick={() => handleTabClick("pr")}
          data-filter="pr"
          role="tab"
          aria-selected={activeFilter === "pr"}
        >
          PR Campaigns
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "brand" ? "active" : ""}`}
          onClick={() => handleTabClick("brand")}
          data-filter="brand"
          role="tab"
          aria-selected={activeFilter === "brand"}
        >
          Brand Identity
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "editorial" ? "active" : ""}`}
          onClick={() => handleTabClick("editorial")}
          data-filter="editorial"
          role="tab"
          aria-selected={activeFilter === "editorial"}
        >
          Fashion &amp; Editorial
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "spatial" ? "active" : ""}`}
          onClick={() => handleTabClick("spatial")}
          data-filter="spatial"
          role="tab"
          aria-selected={activeFilter === "spatial"}
        >
          Spatial &amp; Digital
        </button>
        <button
          className={`work-tab-btn ${activeFilter === "avail" ? "active" : ""}`}
          onClick={() => handleTabClick("avail")}
          data-filter="avail"
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
