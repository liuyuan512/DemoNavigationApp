/**
 * 404页面
 * 404 not found.
 */
import React, { Component } from 'react';
import style from './style.less';

class Page404 extends Component{
  render(): Object{
    return (
      <div className={ style.body }>
        <div className={ style.n404 }>
          <b>4</b>
          <b>0</b>
          <b>4</b>
        </div>
        <p className={ style.error }>ERROR</p>
        <p className={ style.notFound }>Page not found.</p>
      </div>
    );
  }
}

export default Page404;