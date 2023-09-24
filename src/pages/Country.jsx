import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState(``);
  const location = useLocation();

  const goBackLink = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    if (!countryId) {
      return;
    }
    setIsLoading(true);

    fetchCountry(countryId)
      .then(setCountry)
      .catch(error => setError(error.message))
      .finally(setIsLoading(false));
  }, [countryId]);

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink.current}>Back to Countries</Link>
        </div>
        {country && <CountryInfo {...country} />}
      </Container>
      {isloading && <Loader />}
      {error && <p>{error}</p>}
    </Section>
  );
};
