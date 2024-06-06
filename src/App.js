import React, { useState } from 'react';
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaHeart } from 'react-icons/fa';
import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ProSidebarProvider>
      <div className="App">
        <Sidebar collapsed={collapsed}>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 20,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              
            }}
          >
            Mi ProSidebar
          </div>
          <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: 'black', cursor: 'pointer' }}>
            {collapsed ? 'Expandir' : 'Colapsar'}
          </button>
          <Menu iconShape="circle">
            <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<FaHeart />}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
          <div
            style={{
              padding: '20px 24px',
            }}
          >
            Footer
          </div>
        </Sidebar>
      </div>
    </ProSidebarProvider>
  );
}

export default App;
