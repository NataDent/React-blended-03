import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ flag, id }) => (
        <GridItem key={id}>
          <img src={flag} alt={id} />
        </GridItem>
      ))}
    </Grid>
  );
};
