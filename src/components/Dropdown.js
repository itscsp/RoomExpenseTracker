import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-white py-2 px-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown
      </button>
      {isOpen && (
        <div className="absolute left-0 bg-white rounded-lg">
          <ul className="py-2">
            <li className="px-4 py-2">Option 1</li>
            <li className="px-4 py-2">Option 2</li>
            <li className="px-4 py-2">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
