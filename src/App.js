import React, { useState } from 'react';
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaHeart, FaCalculator} from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { BsPersonArmsUp, BsPencilSquare} from "react-icons/bs";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import './App.css';
import Footer from './footer/footer';

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
          <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            {collapsed ? <AiOutlineCaretRight /> : <AiOutlineCaretLeft />}
          </button>
          <Menu iconShape="circle">
          <MenuItem icon={<FaGem />}>
          <a href="https://www.ragged.com.co" target="_blank" rel="noopener noreferrer" className="boton-redirigir">
          Ecommerce
          </a></MenuItem>
              <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
              </SubMenu>
              <MenuItem icon={<BsPencilSquare />}>
              <a href="http://serverrgd.eastus.cloudapp.azure.com:81/Greggo/login" target="_blank" rel="noopener noreferrer" className="boton-redirigir">
          Mesa de Ayuda
          </a></MenuItem>
              <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
              </SubMenu>
              <MenuItem icon={<FaComputer />}>
              <a href="http://serverrgd.eastus.cloudapp.azure.com:81/mahaloventas" target="_blank" rel="noopener noreferrer" className="boton-redirigir">
            Administración
            </a></MenuItem>
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
        <Footer/>
      </div>
    </ProSidebarProvider>
  );
}

export default App;
