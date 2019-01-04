import React, { Component, Fragment } from 'react';
export class App extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`  
        section{
          display: flex;
          flex-direction: column;
          margin: auto;
          align-items : center;
        }
      input{
        margin: 16px 0;
        border-radius: 4px;
        width: 360px;
        height: 32px;
        outline: none;
        padding: 0 10px;
        border: 1px solid #B7BBBA;
        background: white;
        transition: all .3s ease-in-out;
        position: relative;
      }
      input:focus{
        box-shadow: 0 3px 10px 0 rgba(0,0,0,.15);
      }
      .styled-input:focus{
        border: 1px solid red;
        transition: all .2s ease-in-out;
      }
      .disabled{
        background: #F9F9F9;
        cursor: not-allowed;
        opacity: .5;
      }
      .logo-input i{
        width: 16px;
        height: 16px;
        position: absolute;
        top: 24px;
        right:12px;
        color : #B7BBBA;
        }
        .logo-input{
          position: relative;
          height: auto;
        }
        .logo-input input:focus + i{
          color : lightblue;
        }
        .logo-input input:focus{
          border-color: lightblue;
          color: lightblue;
        }
        .logo-input input:focus::placeholder{
          color : lightblue;
        }
      `}
        </style>
        <section>
          <input placeholder="Placeholder" className="styled-input" />
          <input
            placeholder="Disabled"
            disabled="disabled"
            className="disabled"
          />
          <div className="logo-input">
            <input placeholder="Search something" />
            <i className="fas fa-search" />
          </div>
        </section>
      </Fragment>
    );
  }
}
