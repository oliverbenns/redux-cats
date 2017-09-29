import React from 'react';
import connect from '../lib/connect';

import Header from '../components/header';
import Wrapper from '../components/wrapper';

import { getCats } from '../actions/cats';

const Page = (props, context) => (
  <div>
    <Header onButtonClick={props.actions.getCats} />
    <Wrapper>
      {props.loading ? <div style={{ marginTop: 10 }}>Loading... 🐈</div> : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {props.images.map(url => <img src={url} key={url} style={{ margin: '10px auto', maxWidth: '100%' }} />)}
        </div>
      )}
    </Wrapper>
  </div>
);

const mapState = state => ({ ...state.cats });

export default connect(mapState, { getCats })(Page);
