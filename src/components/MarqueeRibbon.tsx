import { MarqueeItem } from "@/types";

interface MarqueeRibbonProps {
  id: string;
  items: MarqueeItem[];
  reverse?: boolean;
}

export default function MarqueeRibbon({
  id,
  items,
  reverse = false,
}: MarqueeRibbonProps) {
  // Duplicate array for 100% seamless infinite loop
  const displayItems = [...items, ...items];

  return (
    <div
      className={`marquee-wrapper ${reverse ? "reverse" : ""}`}
      id={id}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {displayItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>
              {item.text}
              {item.em && (
                <>
                  {" "}
                  <em>{item.em}</em>
                </>
              )}
            </span>
            <svg className="marquee-arrow" viewBox="0 0 200 200">
              <path d="M170.281 20.146v144.371L25.892 20.16l-6.27 6.268 144.421 144.393H19.588v8.866h159.561V20.146h-8.868z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
