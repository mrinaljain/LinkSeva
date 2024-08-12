import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
   return (
      <header className="bg-indigo-600 text-white py-4">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">LINKSEVA</h1>
            <nav>
               <Link to="/test" className="text-white px-3">Home</Link>
               <Link to="#" className="text-white px-3">Features</Link>
               <Link to="#" className="text-white px-3">About</Link>
               <Link to="#" className="text-white px-3">Contact</Link>
            </nav>
         </div>
      </header>
   );
}

export default Header;