import React from 'react';
import Contacts from '../Contacts/Contacts';

export default function SideMenu() {
  return (
    <nav className="side-menu">
      <ul className="side-menu__list">
        <Contacts />
      </ul>
    </nav>
  );
}
