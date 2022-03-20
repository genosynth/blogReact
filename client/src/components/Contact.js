import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return <div className='box'>
        <h1 style={{textAlign:'center'}}>CONTACT US</h1>
      <p>
         You can contact us by sending us an email <a href="mailto:post-ed@posted.com">here</a> at post-ed@posted.com
      </p>
    </div>;
  }
}
