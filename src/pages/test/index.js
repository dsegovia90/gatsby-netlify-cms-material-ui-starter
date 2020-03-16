import React from 'react';
import Cards from '../../components/Cards';
import Layout from '../../components/Layout';

const TestPage = () => (
  <Layout>
    <Cards
      cards={[
        {
          title: 'Ut aut adipisci corrupti magni aut iusto adipisci id.',
          text: 'Sit eligendi aspernatur quisquam maiores qui omnis. Quo molestiae voluptates hic reiciendis. Debitis et quibusdam necessitatibus corporis qui sed aut. Similique modi asperiores itaque in molestiae enim. Optio quos id esse. Optio natus et.',
        },
        {
          title: 'Qui dolorum repellendus.',
          text: 'Iure minima et voluptate distinctio. Eum molestias iste rem nulla blanditiis. Nihil rerum iure doloribus excepturi. At impedit cumque hic aut et illo eligendi id. Sunt vero quia mollitia repellendus. Autem et ea quod molestiae nihil rerum sed.',
        },
        {
          title: 'Repellat libero sunt et impedit id aut.',
          text: 'Laborum est ratione. Quis harum omnis aspernatur non ab esse. Velit non ullam dignissimos sit et. Ipsa tempore aliquid adipisci qui quia alias voluptas adipisci laborum. Dignissimos iste rerum et.',
        },
      ]}
      config={{ mdCol: 4 }}
    />
  </Layout>
);

// export const pagesQuery = graphql`
//   query PagesQuery {
//     allSitePage(filter: { path: { ne: "/dev-404-page/" } }) {
//       nodes {
//         path
//       }
//     }
//   }
// `;


export default TestPage;
