import React from 'react';

import './form.scss';


function handleSubmit(e, props) {
  e.preventDefault();
  const formData = {
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon',
  };
  props.handleApiCall(formData);
}

function Form(props) {

  handleSubmit(props);

  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );

}

export default Form;
