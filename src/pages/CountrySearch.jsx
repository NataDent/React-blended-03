import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
const [params, setParams] = useSearchParams()
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

useEffect(()=> {
  const region = params.get('value')

  if(!region) {
    return
  }

  fetchByRegion(region).then(setCountries).catch(error => setError(error.message))
  .finally(setIsLoading(false));
},[params])

const onSelect = value => {
  setParams({value})
}

  return (
    <Section>
      <Container>
        <SearchForm onSelect={onSelect}/>
        <CountryList countries={countries} />
      </Container>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </Section>
  );
};
