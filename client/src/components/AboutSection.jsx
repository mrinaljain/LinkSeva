import React from 'react';

const AboutSection = () => {
   return (
      <section className="mt-16 bg-indigo-600 text-white py-12">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">About Shortify</h3>
            <p className="max-w-2xl mx-auto">
               Shortify is a free and easy-to-use URL shortening service that allows you to create short, memorable links. Our platform offers customizable URLs, real-time analytics, and more to help you manage and track your links efficiently.
            </p>
         </div>
      </section>
   );
};

export default AboutSection;
