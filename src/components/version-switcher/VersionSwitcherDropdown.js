import React from 'react';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import {useVersionSwitchTargets} from './useVersionSwitchTargets';

export default function VersionSwitcherDropdown({...dropdownProps}) {
  const {currentVersion, items} = useVersionSwitchTargets();

  return (
    <DropdownNavbarItem
      label={`Version: ${currentVersion}`}
      items={items}
      {...dropdownProps}
    />
  );
}
