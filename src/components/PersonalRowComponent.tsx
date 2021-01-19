import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Paper, Box } from '@material-ui/core';

interface IItem {
  original: string;
  thumbnail: string;
}

interface IProps {
  items: IItem[];
}
function PersonalRow({ items }: IProps) {
  return (
    <Box>
      <ImageGallery items={items} />
    </Box>
  );
}

export default PersonalRow;
