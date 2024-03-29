import React , {useState} from 'react';
import Web from './Web';
import Mobile from './Mobile';
import './header.css';

const Header = () => {
  const [isOpen , setIsOpen] = useState(false);
  return (
    <div className="header">
        <div className="logo">A.Khaled</div>
        <div className="menu">
          <div className="web-menu">
              <Web />
          </div>
          <div className="mobile-menu">
              <div onClick={() => setIsOpen(!isOpen)}>
                  <i className="ri-apps-line menu-icon"></i>
              </div>
              {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
          </div>
        </div>
    </div>
  )
}

export default Header
