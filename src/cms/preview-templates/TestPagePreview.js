import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, jssPreset, StylesProvider } from '@material-ui/styles';
import { create } from 'jss';

// theme
import { TestPageTemplate } from '../../pages/test';

class TestPagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  handleRef = (ref) => {
    const ownerDocument = ref ? ref.ownerDocument : null;
    this.setState({
      ready: true,
      jss: create({
        ...jssPreset(),
        insertionPoint: ownerDocument ? ownerDocument.querySelector('#demo-frame-jss') : null,
      }),
      sheetsManager: new Map(),
    });
  }

  render() {
    const { entry, getAsset } = this.props;
    const data = entry.getIn(['data']).toJS();
    const { ready, jss, sheetsManager } = this.state;

    // data.components = data.components.map((component) => {
    //   if (component.image) {
    //     return {
    //       ...component,
    //       image: getAsset(component.image),
    //     };
    //   }
    //   return component;
    // });

    // console.log(data);

    if (data) {
      return (
        <>
          <div id="demo-frame-jss" ref={this.handleRef} />
          {ready ? (
            <StylesProvider jss={jss} sheetsManager={sheetsManager}>
              <ThemeProvider>
                <CssBaseline />
                <TestPageTemplate components={data.components} />
              </ThemeProvider>
            </StylesProvider>
          ) : <div>Not Ready...</div>}
        </>
      );
    }
    return <div>Loading...</div>;
  }
}

// const TestPagePreview = ({ entry, getAsset }) => {
//   const data = entry.getIn(['data']).toJS();

//   if (data) {
//     return (
//       <TestPageTemplate components={data.components} />
//     );
//   }
//   return <div>Loading...</div>;
// };

export default TestPagePreview;
