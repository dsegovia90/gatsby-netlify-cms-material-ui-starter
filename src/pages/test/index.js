import React from 'react';
import { graphql } from 'gatsby';

import { PropTypes } from 'prop-types';
import Cards from '../../components/Cards';
import CopyImage from '../../components/CopyImage';
import Layout from '../../components/Layout';

const TestPage = ({ data }) => {
  const { components } = data.markdownRemark.frontmatter;

  const componentsSwitch = ((componentData, idx) => {
    switch (componentData.type) {
      case 'cards':
        return <Cards key={`${componentData.type}-${idx}`} data={componentData} />;
      case 'copyImage':
        console.log('here', componentData);
        return <CopyImage key={`${componentData.type}-${idx}`} data={componentData} />;
      default:
        return null;
    }
  });

  return (
    <Layout>
      {components.map(componentsSwitch)}
    </Layout>
  );
};

TestPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        components: PropTypes.array,
      }),
    }),
  }).isRequired,
};

export const pagesQuery = graphql`
query {
  markdownRemark(fields: {slug: {eq: "/test/"}}) {
    id
    frontmatter {
      title
      components {
        cards {
          text
          title
        }
        config {
          colMd
        }
        title
        text
        type
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`;


export default TestPage;
