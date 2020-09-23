import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div>Header goes here</div>
      <div>{children}</div>
      <div>Footer goes here</div>
    </div>
  );
};

export default Layout;