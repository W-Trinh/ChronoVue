import React from 'react';
import logo from './logo.svg';

function ContentPanel() {
  return (
    <div className="bg-white text-black p-4">
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-2">Hello la team</h1>
          <p>Description ici...</p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default ContentPanel;
