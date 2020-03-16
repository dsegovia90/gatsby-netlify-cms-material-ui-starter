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

const Cards = ({ cards, config }) => {
  const styles = useStyles();
  return (
    <Container>
      <Grid className={styles.root} container justify="center" spacing={2}>
        {cards.map(({ text }) => (
          <Grid item xs={12} md={config.mdCol}>
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
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  config: PropTypes.shape({
    mdCol: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cards;
