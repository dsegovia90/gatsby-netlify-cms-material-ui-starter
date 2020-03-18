import React from 'react';
import {
  Container, Grid, makeStyles, Typography, Box,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import Image from './PreviewCompatibleImage';


const useStyles = makeStyles({
  root: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  textContainer: {
    height: '100%',
  },
});

const CopyImage = ({ data: { title, text, image } }) => {
  const styles = useStyles();
  return (
    <Container className={styles.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Image imageInfo={image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height="100%" display="flex" alignItems="center">
            <Container>
              <Typography variant="h2" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body1">
                {text}
              </Typography>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

CopyImage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
};

export default CopyImage;
