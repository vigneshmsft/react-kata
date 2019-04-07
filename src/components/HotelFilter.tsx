import React, { useState } from 'react';
import _ from 'lodash';
import {
  Dropdown,
  IDropdownOption
} from 'office-ui-fabric-react/lib/Dropdown';
import HotelFilterComponentProps from './HotelFilterComponentProps';

function HotelFilter(props: HotelFilterComponentProps) {
  const [selectedItems, setSelectedItem] = useState(['']);
  props.onSelectedOptionsChanged(selectedItems);

  const _onChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption
  ): void => {
    const newSelectedItems = [...selectedItems];
    if (item.selected) {
      // add the option if it's checked
      newSelectedItems.push(item.key as string);
    } else {
      // remove the option if it's unchecked
      const currIndex = newSelectedItems.indexOf(item.key as string);
      if (currIndex > -1) {
        newSelectedItems.splice(currIndex, 1);
      }
    }
    setSelectedItem(newSelectedItems);
  };

  let dropDownOptions = new Array<IDropdownOption>();
  _.map(props.options, option =>
    dropDownOptions.push({ key: option, text: option })
  );

  return (
    <Dropdown
      placeholder="Select facilities"
      label="Facilities"
      selectedKeys={selectedItems}
      onChange={(event, item) => _onChange(event, item!)}
      multiSelect
      options={dropDownOptions}
      styles={{ dropdown: { width: 300 } }}
    />
  );
}

export default HotelFilter;
