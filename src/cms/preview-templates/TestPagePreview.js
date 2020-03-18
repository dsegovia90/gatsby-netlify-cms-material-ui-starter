import React from 'react';
import { TestPageTemplate } from '../../pages/test';

const TestPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <TestPageTemplate components={data.components} />
    );
  }
  return <div>Loading...</div>;
};

export default TestPagePreview;
