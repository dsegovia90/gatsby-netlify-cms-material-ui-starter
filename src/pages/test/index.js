import React from 'react';
import { graphql } from 'gatsby';

import { PropTypes } from 'prop-types';
import Cards from '../../components/Cards';
import Layout from '../../components/Layout';

const TestPage = ({ data }) => {
  const { components } = data.markdownRemark.frontmatter;

  const componentsSwitch = ((componentData) => {
    switch (componentData.type) {
      case 'cards':
        return <Cards data={componentData} />;
      default:
        break;
    }
  });

  return (
    <Layout>
      {components.map((component) => componentsSwitch(component))}
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
        type
      }
    }
  }
}
`;


export default TestPage;
