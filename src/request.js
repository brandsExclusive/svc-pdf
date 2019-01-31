require("babel-polyfill");

import fetch from 'node-fetch';

const defaultOptions = {
  method: 'GET',
};

module.exports = async (destination, inOptions) => {

  const options = Object.assign({}, defaultOptions, inOptions);
  
  const response = await fetch(destination, options);

  if (!response) {
    return {
      error: {
        status: 500,
        message: 'Something went wrong'
      }
    }
  }

  if (!response.ok) {
    const error = await response.text()
    console.error('response :', error);
    return {
      error: {
        status: response.status,
        message: response.statusText || error
      }
    }
  }

  return response.json();
};
