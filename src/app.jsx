import React from 'react';
import { hot } from 'react-hot-loader/root';
import Alert from './components/Alert/Alert';
import AlertHeader from './components/Alert/AlertHeader';

export function App() {
  return (
    <>
      <h1>Hello from ES2015+</h1>
      <div className="main container-fluid">
        <Alert dismissible>
          <AlertHeader>Title</AlertHeader>
          This is a description
        </Alert>
      </div>
    </>
  );
}

export default hot(App);
