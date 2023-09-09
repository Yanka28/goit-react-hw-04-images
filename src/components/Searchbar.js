import { Header, SearchForm, Button, Span } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <Span>
            <ImSearch />
          </Span>
        </Button>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
