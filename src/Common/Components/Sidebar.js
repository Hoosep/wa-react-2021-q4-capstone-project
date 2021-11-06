import React, { useState } from 'react';

// Own Styles
import SidebarStyled from 'Styles/Sidebar';

const Sidebar = ({ items, onChange }) => {
  const [itemsActived, setItemsActived] = useState([]);

  const handleClickItemActive = (name) => {
    let newItemsActivated;
    if (itemsActived.includes(name)) {
      newItemsActivated = itemsActived.filter((item) => item !== name);
    } else {
      newItemsActivated = [
        ...itemsActived,
        name,
      ];
    }
    setItemsActived(newItemsActivated);
    onChange(newItemsActivated);
  };

  return (
    <SidebarStyled>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={itemsActived.includes(item.name) ? 'activated' : ''}
            onClick={() => handleClickItemActive(item.name)}
            aria-hidden="true"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </SidebarStyled>
  );
};

export default Sidebar;
