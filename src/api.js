import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPhotos = async (newquery, newpage) => {
  const resp = await axios.get(
    `?q=${newquery}&page=${newpage}&key=38400956-ed3ce45b124f70d420fda24dd&image_type=photo&orientation=horizontal&per_page=12`
  );
  return resp.data;
};
