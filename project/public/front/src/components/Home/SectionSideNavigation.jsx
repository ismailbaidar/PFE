import React from 'react';
import SideNavigation from './SideNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SectionSideNavigation = ({set}) => {
  return (
    <div className='SectionSideNavigation' >
      <SideNavigation  set={set} />
    </div>
  );
}

export default SectionSideNavigation;
