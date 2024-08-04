/* eslint-disable no-unused-vars */
import './App.css';
import { CTA, Brand, Navbar } from './components';
import {
  Blog,
  Features,
  Header,
  Footer,
  Possiblity,
  WhatGPT3,
} from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
