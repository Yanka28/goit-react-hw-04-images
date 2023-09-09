import { useEffect, useState } from 'react';
import { Layout } from './Layout';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Button } from './Button';
import { fetchPhotos } from 'api';
import { GlobalStyle } from './GlobalStyle';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [src, setSrc] = useState('');
  const [loadMore, setLoadMore] = useState(true);

 const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.elements.query.value.trim();
   if (value === '') {
     return toast.error('ТАК НЕ СПРАЦЮЄ, ВВЕДИ ЗАПИТ ');
   } else
     setQuery(`${Date.now()}/${value}`);
     setPage(1);
     setImages([]);
  };

  const handleLoadMore = () => {
     setPage(prevPage => prevPage + 1 )
  };
  
  const handleClick = image => {
    setIsShow(true)
    setSrc(image.largeImageURL)
  };

  const onClose = e => {
    setIsShow(false)
    setSrc('')
  };
  useEffect(() => {
    async function getPhotos() { 
      if (!query) return;
      try {
        setLoading(true);
        setError(false);
        const newquery = query.split('/')[1];
        const newpage = page;
        const { hits, totalHits } = await fetchPhotos(newquery, newpage);
        setImages(prevImages => [...prevImages, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / 12))
      } catch (error) {
        setError(true)
      } finally { 
        setLoading(false)
      }
    } getPhotos()
   }, [query,page])

  return (
    <Layout>
        <h1> </h1>
        <Searchbar onSubmit={handleSubmit} />
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} handleClick={handleClick} />
        )}
        {isShow && <Modal src={src} onClose={onClose} />}
        {images.length > 0 && loadMore && (
          <Button onClick={handleLoadMore} />
        )}
        <GlobalStyle />
        <Toaster position="top-center" />
      </Layout>
  );
};
