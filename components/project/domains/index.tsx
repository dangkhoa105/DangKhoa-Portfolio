import React from "react";

interface Props {
  domains: string[];
}

function Domains({ domains }: Props) {
  return (
    <div className="flex flex-wrap gap-x-2">
      {domains.map((dom, index) => (
        <p
          key={dom}
          className={`text-sm ${
            index % 2 === 0 ? "text-accent-1" : "text-accent-2"
          }`}
        >
          #{dom}
        </p>
      ))}
    </div>
  );
}

export default React.memo(Domains);
