/* eslint-env browser */

// dependencies
import { $, jQuery } from 'jquery';
import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

window.$ = $;
window.jQuery = jQuery;

ReactDOM.render(<App />, document.getElementById('root'));
