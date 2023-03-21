import React from 'react';
import { PhotoRes } from '../../types/Photo';
import { Landscapes } from '../icons';
import s from './ContentArea.module.css';

interface ContentAreaProps {
  selectedPhoto: PhotoRes;
}

export const ContentArea: React.FC<ContentAreaProps> = ({ selectedPhoto }) => {
  if (selectedPhoto)
    return (
      <div className={s.root}>
        <div className={s.imgBox}>
          <img src={selectedPhoto.metadata[0].value} alt="" />
        </div>
        <div className={s.imgDescription}>
          <p>{selectedPhoto.description}</p>
        </div>
      </div>
    );

  return (
    <div className={s.root}>
      <Landscapes />
      <span>Select the Photo</span>
    </div>
  );
};
