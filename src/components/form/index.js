import React from 'react';
import { useState } from 'react';

import './form.scss';


function Form(props) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('METHOD IN HANDLE: ', method);
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }

  let [method, setMethod] = useState('GET');
  console.log('method state: ', method);
  let [url, setURL] = useState();
  console.log('url state: ', url);

  function changeMethod(method) {
    setMethod(method);
  }
  function changeURL(url) {
    setURL(url);
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => changeURL(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          {/* <button onClick={setMethod()}> */}
          <span id="get" onClick={() => changeMethod('GET')}>GET</span>
          {/* </button> */}
          {/* <button onClick={setMethod('post')}> */}
          <span id="post" onClick={() => changeMethod('POST')}>POST</span>
          {/* </button> */}
          {/* <button onClick={setMethod('put')}> */}
          <span id="put" onClick={() => changeMethod('PUT')}>PUT</span>
          {/* </button> */}
          {/* <button onClick={setMethod('delete')}> */}
          <span id="delete" onClick={() => changeMethod('DELETE')}>DELETE</span>
          {/* </button> */}




        </label>
      </form>
    </>
  );
}

export default Form;
