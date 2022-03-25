import React from 'react';
import '../scss/global.scss';

const App = ({ Component, props }: any) => {

  	return <Component {...props} />
}

export default App