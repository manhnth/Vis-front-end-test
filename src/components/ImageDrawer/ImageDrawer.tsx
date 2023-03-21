import React from 'react';
import { PhotoRes } from '../../types/Photo';
import { Search } from '../icons';
import s from './ImageDrawer.module.css';
import cn from 'clsx';

interface ImageDrawProps {
  activeLabel: string;
  data: PhotoRes[];
  selectedPhoto: PhotoRes;
  handleClickPhoto: (photo: PhotoRes) => void;
}

export const ImageDrawer: React.FC<ImageDrawProps> = ({
  activeLabel,
  data,
  selectedPhoto,
  handleClickPhoto,
}) => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <span>{activeLabel}</span>
      </div>
      <div className={s.search}>
        <form>
          <Search />
          <input type="text" placeholder="Search for photo..." />
        </form>
      </div>
      <div className={s.imagesContainer}>
        {data &&
          data.map((item, i) => {
            return (
              <div
                key={i}
                className={cn(s.imageBox, {
                  [s.active]: item.id === selectedPhoto?.id,
                })}
                onClick={() => handleClickPhoto(item)}
              >
                <img src={item.metadata[0].value} alt={item.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
