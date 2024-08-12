import React, { useState } from 'react';
import { CREATE_LINK } from '../utils/constants/api';

const HeroSection = () => {
   const [url, setUrl] = useState('');
   const [shortUrlSuffix, setShortUrlSuffix] = useState('');
   const generateShortLink = async () => {
      try {
         const obj = { title: "", url: url, short_url: shortUrlSuffix };
         const response = await fetch(CREATE_LINK, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json' // Specify that the payload is JSON
            },
            body: JSON.stringify(obj)
         },
         );

         const data = await response.json();
         // console.log(data);

         if (data.status === true) {
            console.log(`The shorthen url is https://visit.mrinaljain.com/${data.data.short_url}`);
         } else {
            console.log("Please try again");
         }

      } catch (error) {
         console.log(error.message);

      }



   }
   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, e.g., send data to the backend
      // console.log('Original URL:', url);
      // console.log('Short URL Suffix:', shortUrlSuffix);

      generateShortLink();
   };

   return (
      <section className="text-center mt-10">
         <h2 className="text-4xl font-bold text-gray-800 mb-6">Shorten Your Links in Seconds</h2>
         <p className="text-gray-600 mb-8">Enter your long URL, a title, and choose a short URL suffix to get a shorter, more manageable link.</p>

         <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col bg-white rounded shadow-md p-4 space-y-4">

               <input
                  type="text"
                  placeholder="Enter your long URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
               />
               <input
                  type="text"
                  placeholder="Custom short URL suffix (optional)"
                  value={shortUrlSuffix}
                  onChange={(e) => setShortUrlSuffix(e.target.value)}
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
               />
               <button
                  type="submit"
                  className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500">
                  Shorten
               </button>
            </form>
         </div>
      </section>
   );
};

export default HeroSection;
