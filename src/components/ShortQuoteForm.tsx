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

  return (
    <section className="py-16 bg-gradient-to-b from-white via-secondary/30 to-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <iframe 
            data-tally-src="https://tally.so/embed/w45Rzr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height={752} 
            frameBorder={0} 
            marginHeight={0} 
            marginWidth={0} 
            title="Contact Us"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ShortQuoteForm;