import * as React from "react";

const Quote = () => {
  React.useEffect(() => {
    document.title = "Get a Free Quote | Omni Fence and Deck | Tulsa OK";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Request a free fence or deck installation quote from Omni Fence and Deck in Tulsa, Oklahoma. Fast response, professional service, competitive pricing.');
    }

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
    <main className="overflow-hidden bg-gradient-to-b from-white to-secondary/30 min-h-screen">
      {/* Header Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Tell us about your project and we'll provide a detailed, personalized estimate
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
              <iframe 
                data-tally-src="https://tally.so/embed/wQLpv1?alignLeft=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height={587} 
                frameBorder={0} 
                marginHeight={0} 
                marginWidth={0} 
                title="Request a Quote"
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
    </main>
  );
};

export default Quote;