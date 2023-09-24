import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';

import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then(setCountries)
      .catch(error => setError(error.message))
      .finally(setIsLoading(false));
  }, []);
  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </Section>
  );
};
