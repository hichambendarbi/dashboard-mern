import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNotesMedical, faClinicMedical,faUsers } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <h3>Laboratoire Fes</h3>
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-1">

          <NavItem>
            <NavLink tag={Link} to={'/acceuil'}>
              <FontAwesomeIcon icon={faHome} className="mr-2"/>Acceuil
            </NavLink>
          </NavItem>
          <SubMenu title="contributeurs" icon={faClinicMedical} items={submenus[0]}/>
          <NavItem>
            <NavLink tag={Link} to={'/analyses'}>
              <FontAwesomeIcon icon={faNotesMedical} className="mr-2"/>Analyses
            </NavLink>
          </NavItem>
          <SubMenu title="Utilisateurs" icon={faUsers} items={submenus[1]}/>
        </Nav>        
      </div>
    </div>
  );

  const submenus = [
    [
      {
        title: "Medecins",
        target: "Medecins"
      },
      {
        title: "Pharmacie",
        target: "Pharmacie",        
      },
      {
        title: "Laboratoire",
        target: "Laboratoire",      
      }
    ],
    [
      {
        title: "Administrateurs",
        target: "Administrateurs",          
      },
      {
        title: "Utilisateurs",
        target: "Utilisateurs",        
      }
    ]
  ]
  

export default SideBar;