import * as React from 'react';

// Extend Window interface to include Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}
const ShortQuoteForm = () => {
  React.useEffect(() => {
    // Load Tally script if not already loaded
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  return <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
        <iframe data-tally-src="https://tally.so/embed/w45Rzr?alignLeft=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height={752} frameBorder={0} marginHeight={0} marginWidth={0} title="Contact Us" className="rounded-lg" style={{
        border: 'none',
        borderRadius: '8px'
      }} />
      </div>
    </div>;
};
export default ShortQuoteForm;