import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
   return (
      <section className="mt-16">
         <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Why Use Shortify?</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
               icon={<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m-2 8h.01M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /></svg>}
               title="Easy to Use"
               description="Shorten URLs in just a few clicks."
            />
            <FeatureCard
               icon={<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1m10 10h1m1 0h3m1 0a1 1 0 01.293.707V22a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.293A1 1 0 013 20V4a1 1 0 011-1h4a1 1 0 011 1v5h4a1 1 0 011 1v9h1m1-10h3m1 0a1 1 0 01.293.707V10a1 1 0 01-1 1H16a1 1 0 01-1-1V5a1 1 0 01.293-.707M10 2h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V3a1 1 0 011-1zm0 0v4m0 4H4m10-4h-3m10 4h-3m10 4h-4m0-4v4m0 4h4" /></svg>}
               title="Customizable Links"
               description="Create short URLs with your own branding."
            />
            <FeatureCard
               icon={<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m9-5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
               title="Real-time Analytics"
               description="Track the performance of your links."
            />
         </div>
      </section>
   );
};

export default FeaturesSection;
