import * as React from 'react';
import s from './Menu.module.css';
import cn from 'clsx';

interface MenuProps {
  subMenu: {
    icon: React.ReactNode;
    label: string;
    category: string;
  }[];
  activeLabel: string;
  handleClickCategory: (item: any) => void;
}

export const Menu: React.FC<MenuProps> = ({
  subMenu,
  handleClickCategory,
  activeLabel,
}) => {
  return (
    <div className={s.menu}>
      {subMenu.map((item, i) => {
        return (
          <div
            key={i}
            className={cn(s.menuItemBox, {
              [s.itemActive]: activeLabel === item.label,
            })}
            onClick={() => handleClickCategory(item)}
          >
            {item.icon}
            <p>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};
