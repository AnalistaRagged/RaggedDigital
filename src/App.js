import React, { useState } from 'react';
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaHeart, FaCalculator} from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { BsPersonArmsUp } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ProSidebarProvider>
      <div className="App">
        <Sidebar className="css-ycmq9d" collapsed={collapsed}>
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
            RAGGED DIGITAL
          </div>
          <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: 'black', cursor: 'pointer' }}>
            {collapsed ? 'Expandir' : 'Colapsar'}
          </button>
          <Menu iconShape="circle">
          <MenuItem icon={<FaGem />}>
          <Link to="https://www.ragged.com.co" target="_blank" rel="noopener noreferrer"></Link>
          Ecommerce
          </MenuItem>
              <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
              </SubMenu>
              <MenuItem icon={<BsPencilSquare />}>Mesa de ayuda</MenuItem>
              <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
              </SubMenu>
              <MenuItem icon={<FaComputer />}>Administración </MenuItem>
              <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
              </SubMenu>
              <MenuItem icon={<FaCalculator />}>Contabilidad </MenuItem>
              <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
              </SubMenu>
              <MenuItem icon={<BsPersonArmsUp />}>Gestion Humana </MenuItem>

          </Menu>
          <div
          
            style={{
              padding: '20px 24px',
            }}
          >
            

            
          </div>
        </Sidebar>
      </div>
    </ProSidebarProvider>
  );
}

export default App;
