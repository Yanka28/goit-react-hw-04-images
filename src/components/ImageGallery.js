import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images, handleClick }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          handleClick={handleClick}
          key={image.id}
        />
      ))}
    </Gallery>
  );
};
