import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black/50 text-gray-400 rounded py-6 mt-10">
      <div className="mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Employee Management App. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
