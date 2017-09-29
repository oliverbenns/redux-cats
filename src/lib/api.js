import 'whatwg-fetch';
import parseXml from 'xml-parser';
import qs from 'qs';

const constructUrl = (path, query) => {
  const queryString = qs.stringify(query);

  return 'http://thecatapi.com/api' + path + (queryString !== '' ? `?${queryString}` : '');
};

const checkStatus = (response) => {
  const { status, statusText } = response;

  if (status >= 200 && status < 300) {
    return response;
  }

  throw new Error(statusText);
};

const parseData = response => {
  return response
  .text()
  .then(text => {
    return parseXml(text).root.children[0].children[0]; // Lol what?
  })
};

const request = (path, options = {}) => {
  const url = constructUrl(path, options.query);

  return fetch(url, { method: 'GET', ...options })
    .then(checkStatus)
    .then(parseData);
};

export default {
  request,
};
