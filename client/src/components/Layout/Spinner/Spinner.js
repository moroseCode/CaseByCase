import React, { Fragment } from 'react';
import spinner from '../../../images/spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '60px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);