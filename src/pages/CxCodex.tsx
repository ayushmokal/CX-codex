import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export function CxCodex() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Hide the footer inside the iframe to avoid duplication
    const iframe = document.querySelector('iframe[title="CX Codex Knowledge Base"]') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      const injectStyles = () => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            const style = iframeDoc.createElement('style');
            style.textContent = '.footer { display: none !important; }';
            iframeDoc.head.appendChild(style);
          }
        } catch (e) {
          console.log('Could not inject styles into iframe:', e);
        }
      };

      // Inject after iframe loads
      iframe.addEventListener('load', injectStyles);
      if (isLoaded) injectStyles();
    }
  }, [isLoaded]);

  return (
    <div className="h-full w-full">
      <div className="relative h-full w-full">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{
            background: 'radial-gradient(circle at 15% 20%, #f4f7ff 0%, #d9e2ff 45%, #cbd5ff 70%, #c0cdff 100%)'
          }}>
            <Loader2 className="h-6 w-6 animate-spin text-[#212121]" />
            <p className="text-sm text-[#5C5F64]">Loading CX Codex…</p>
          </div>
        )}
        <iframe
          src="/cx-codex-embed/index.html"
          title="CX Codex Knowledge Base"
          className="h-full w-full border-0"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
