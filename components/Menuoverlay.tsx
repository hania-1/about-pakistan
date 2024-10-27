// Menuoverlay.tsx
import React from 'react';

interface MenuoverlayProps {
  links: { title: string; path: string }[];
  isOpen: boolean; // Add this prop
}

const Menuoverlay: React.FC<MenuoverlayProps> = ({ links, isOpen }) => {
  return (
    <div className={`overlay ${isOpen ? 'open' : ''}`}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="text-white">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menuoverlay;
