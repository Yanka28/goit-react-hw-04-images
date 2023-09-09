import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, handleClick }) => {
  const { webformatURL, id } = image;
  return (
    <Item onClick={e => handleClick(image)}>
      {<Image src={webformatURL} alt="photo" id={id} loading="lazy" />}
    </Item>
  );
};
