import * as React from 'react';
import { BUSINESS } from '@/config/business';

const ShortQuoteForm = () => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    // Load Tally script if not already loaded
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';

    script.onload = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      }
    };

    script.onerror = () => {
      setHasError(true);
    };

    document.body.appendChild(script);

    // Set a timeout to show fallback if form doesn't load
    const timeoutId = setTimeout(() => {
      const iframe = document.querySelector('iframe[data-tally-src*="w45Rzr"]');
      if (iframe && (iframe as HTMLIFrameElement).offsetHeight === 0) {
        setHasError(true);
      }
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
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
        {hasError && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center text-gray-600">
            <p>
              Having trouble loading the form? Contact us directly at{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">
                {BUSINESS.email}
              </a>{' '}
              or call{' '}
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary hover:underline">
                {BUSINESS.phone}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortQuoteForm;
