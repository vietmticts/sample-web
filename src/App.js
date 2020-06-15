import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Default iOS Schemes </p>
        <a className="App-link" href="tel:091236029" >tel:091236029</a>
        <a className="App-link" href="sms:091236029" >sms:091236029</a>
        <a className="App-link" href="sms:" >sms:</a>
        <a className="App-link" href="facetime:091236029" >facetime:091236029</a>
        <a className="App-link" href="facetime-audio:091236029" >facetime-audio:091236029</a>
        <a className="App-link" href="mailto:tester@icts.vn" > Mail to tester@icts.vn </a>
        <a className="App-link" href="mailto:" > Mail </a>
        
        <a className="App-link" href="facetime:tester@icts.vn" >facetime:tester@icts.vn</a>
        <a className="App-link" href="facetime-audio:tester@icts.vn" >facetime-audio:tester@icts.vn</a>
        {/* <a className="App-link" href="http://maps.apple.com/?ll=50.894967,4.341626" > Map </a> */}
      </header>
    </div>
  );
}

export default App;
