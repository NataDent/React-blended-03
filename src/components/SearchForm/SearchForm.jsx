import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({onSelect}) => {
const [continent, setContinent] = useState('');

const onChange = evt => {
  setContinent(evt.target.value);
}

const onSubmit = evt => {
evt.preventDefault();

  onSelect(continent);
}

  return (
    <SearchFormStyled onSubmit={onSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select defaultValue="default" onChange={onChange}  aria-label="select" name="region" required>
        <option disabled value="default">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
