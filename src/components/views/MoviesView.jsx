import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchMoviesList from '../views/SearchMoviesList';

import Searchbar from 'components/Searchbar';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MoviesView() {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const onSubmitClick = searchQuery => {
    if (searchQuery.trim() === '') {
      toast.error('Enter what you want to find ', {
        position: 'top-right',
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    navigate(`?&query=${searchQuery}`);
    setSearchQuery(searchQuery);
  };

  return (
    <>
      <Searchbar onSubmitClick={onSubmitClick} />

      {searchQuery && <SearchMoviesList searchQuery={searchQuery} />}
      <ToastContainer
        closeButton={false}
        position="bottom-right"
        autoClose={3000}
      />
    </>
  );
}
export default MoviesView;
