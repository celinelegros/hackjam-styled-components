import React, { Component, Fragment } from 'react';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`
          @keyframes bounceAnimation {
            0% { margin-bottom: 0; }
            50% { margin-bottom: 15px; }
            100% { margin-bottom: 0; }
          }
          section{
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            background :red;
          }
          div{
            display: flex;
            align-items: flex-end;
          }
          span{
            background-color: black;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            margin: 0 5px;
            animation: bounceAnimation 0.5s ease-in-out infinite;
          }
          span:first-child{
            animation-delay : 0s;
          }
          span:nth-child(2){
            animation-delay : .1s;
          }
          span:last-child{
            animation-delay : .2s;
          }
        `}
        </style>
        <section>
          <div>
            <span />
            <span />
            <span />
          </div>
        </section>
      </Fragment>
    );
  }
}
