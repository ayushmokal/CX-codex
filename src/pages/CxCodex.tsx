import { useState } from "react";
import { Loader2 } from "lucide-react";

export function CxCodex() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-[#7A7D81]">
          Knowledge Base
        </p>
        <h1 className="text-3xl font-semibold text-[#212121]">CX Codex</h1>
        <p className="text-sm text-[#5C5F64]">
          Explore the full CX documentation, SOPs, and troubleshooting playbooks
          without leaving the dashboard.
        </p>
      </div>

      <div className="relative h-[70vh] min-h-[600px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white">
            <Loader2 className="h-6 w-6 animate-spin text-[#212121]" />
            <p className="text-sm text-[#5C5F64]">Loading CX Codex…</p>
          </div>
        )}
        <iframe
          src="/cx-codex/index.html"
          title="CX Codex Knowledge Base"
          className="h-full w-full"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
