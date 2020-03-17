import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Grid, Card, CardContent, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  card: {
    height: '100%',
  },
});

const Cards = ({ data: { cards, config } }) => {
  const styles = useStyles();
  return (
    <Container>
      <Grid className={styles.root} container justify="center" spacing={2}>
        {cards.map(({ title, text }, idx) => (
          <Grid key={`${title}-${idx}`} item xs={12} md={config.colMd}>
            <Card className={styles.card}>
              <CardContent>
                {text}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Cards.propTypes = {
  data: PropTypes.shape({
    cards: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
    config: PropTypes.shape({
      colMd: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Cards;
