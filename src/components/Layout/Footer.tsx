import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-3 px-3">
      <div className="d-lg-flex text-dark justify-content-between">
        <div>
          <small>Proudly Serving the Greater Midwest &amp; Beyond</small>
        </div>
        <div>
          <small>(269) 348-3690</small>
        </div>
        <div>
          <small>&copy; Beyond Events, {currentYear}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;