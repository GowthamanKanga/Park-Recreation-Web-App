
import React from 'react';

function Footer() {
  return (
<footer className="bg-gray-800 p-2 text-center text-white">
  My Event App &copy; {new Date().getFullYear()}
</footer>
  );
}

export default Footer;