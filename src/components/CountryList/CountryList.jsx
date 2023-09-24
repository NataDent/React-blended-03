import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(({ flag, id }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={{ from: location }}>
            <img src={flag} alt={id} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
