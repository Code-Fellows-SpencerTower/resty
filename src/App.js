import React from 'react';

import './app.scss';

import axios from 'axios';
import { useState, useEffect } from 'react';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App(props) {

  // componentDidMount

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});


  function changeData(data) {
    setData(data);
  }

  function changeRequestParams(requestParams) {
    console.log('CHANGEREQUESTPARAMS TRIGGERED');
    setRequestParams(requestParams);
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }
  useEffect(() => {
    console.log('useEffect Triggered')
    const data = axios.get(requestParams.url)
      .then((data) => {
        changeData(data);
        // changeRequestParams(requestParams);

      })
      .then(() => console.log(data));
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form updateRequestState={changeRequestParams} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;