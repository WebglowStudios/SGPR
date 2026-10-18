"use client";

interface MarqueeRibbonProps {
  id: string;
  items: string[];
  reverse?: boolean;
}

export default function MarqueeRibbon({
  id,
  items,
  reverse = false,
}: MarqueeRibbonProps) {
  // Duplicate array for 100% smooth infinite loop
  const displayItems = [...items, ...items];

  return (
    <div
      className={`marquee-wrapper ${reverse ? "reverse" : ""}`}
      id={id}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {displayItems.map((item, index) => {
          // Check if item contains italic keywords like "PR CASES" or "BEYOND" or "POSITIONING" or "COMMERCE"
          const words = item.split(" ");
          const hasEm =
            item.includes("PR CASES") ||
            item.includes("BEYOND") ||
            item.includes("POSITIONING") ||
            item.includes("COMMERCE");

          return (
            <div key={index} className="marquee-item">
              <span>
                {hasEm ? (
                  <>
                    {words.slice(0, -2).join(" ")}{" "}
                    <em>{words.slice(-2).join(" ")}</em>
                  </>
                ) : (
                  item
                )}
              </span>
              <svg className="marquee-arrow" viewBox="0 0 200 200">
                <path d="M170.281 20.146v144.371L25.892 20.16l-6.27 6.268 144.421 144.393H19.588v8.866h159.561V20.146h-8.868z" />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}
