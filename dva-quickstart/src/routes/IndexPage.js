import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({ dispatch , example }) {

  console.log('example', example)
  return (
    <div className={styles.normal}>
      <div onClick={() => {
        dispatch({
          type: 'example/save',
          payload: {
            hello: 333,
          },
        })
      }}>click</div>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(
  ({ example }) => ({
    example
  })
)(IndexPage);
