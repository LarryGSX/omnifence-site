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
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Provide your information and we'll get in touch with you about your question or request.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
            <iframe 
              data-tally-src="https://tally.so/embed/w45Rzr?alignLeft=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height={752} 
              frameBorder={0} 
              marginHeight={0} 
              marginWidth={0} 
              title="Contact Us"
              className="rounded-lg"
              style={{ 
                border: 'none',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortQuoteForm;