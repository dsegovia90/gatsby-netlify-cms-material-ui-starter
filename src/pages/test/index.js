import React from 'react';
import { graphql } from 'gatsby';
import { ServerStyleSheets } from '@material-ui/styles';

import { PropTypes } from 'prop-types';
import Cards from '../../components/Cards';
import CopyImage from '../../components/CopyImage';
import Layout from '../../components/Layout';

const TestPageTemplate = ({ components }) => {
  const componentsSwitch = ((componentData, idx) => {
    switch (componentData.type) {
      case 'cards':
        return <Cards key={`${componentData.type}-${idx}`} data={componentData} />;
      case 'copyImage':
        return <CopyImage key={`${componentData.type}-${idx}`} data={componentData} />;
      default:
        return null;
    }
  });

  return components.map(componentsSwitch);
};

TestPageTemplate.propTypes = {
  components: PropTypes.array.isRequired,
};

const TestPage = ({ data }) => {
  const { components } = data.markdownRemark.frontmatter;
  const sheets = new ServerStyleSheets();

  console.log(sheets);

  return (
    <Layout>
      <TestPageTemplate components={components} />
    </Layout>
  );
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

export { TestPageTemplate };
export default TestPage;
