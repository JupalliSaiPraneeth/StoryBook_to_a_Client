import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#new"> New Stories</a></li>
          <li><a href="#genres"> Genres</a></li>
          <li><a href="#favorites"> Favorites</a></li>
          {/* <li><a href="#settings">Settings</a></li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;