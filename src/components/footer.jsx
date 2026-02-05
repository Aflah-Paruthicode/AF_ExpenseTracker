import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 pb-10 px-6 font-poppins">
      <div className="max-w-md mx-auto">
        <div className="w-full h-[1px] bg-gray-100 mb-8" />
        
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4 mb-4" />

          <h3 className="text-sm font-bold text-gray-800 tracking-tight">
            Thank you for choosing <span className="text-emerald-600">AF Tracker</span>
          </h3>
          
          <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
            Helping you master your finances, one transaction at a time. <br />
            Built with ❤️ by Aflah.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;