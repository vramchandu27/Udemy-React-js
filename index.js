import React from 'react';
import ReactDOM from 'react-dom'
import Comments from './udemychild'
import Card from './udemycard'
import img3 from './Images/udemy Course1.jfif';
import img4 from './Images/udemy course2.jfif';
import img5 from './Images/udemy course3.jfif';
import Head from './header';
import Form from './form'
import Footer from './footer'
import './index.css'
import './form.css'
import './Home.css'
import './header.css'
import './Signin.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Signin from './Signin';

const Webpage = () => 
{
  return (
    <div className='background'>

      <BrowserRouter>
      <div className="App">
        <Head />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/about" element={<About/>} />
            <Route path="/signup" element={<Form/>} />
            <Route path="/signin" element={<Signin/>} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>

          <br/><br/>

          <div className='page-container'>
      <div className='content-wrap'></div>
        <Footer />
        </div><br/><br/>
        </div>
        // <div class="ui bottom attached button" tabindex="0">
        // <button class="ui circular facebook icon button">
        //   <i class="facebook icon"></i>
        // </button>
        // <button class="ui circular twitter icon button">
        //   <i class="twitter icon"></i>
        // </button>
        // <button class="ui circular linkedin icon button">
        //   <i class="linkedin icon"></i>
        // </button>
        // <button class="ui circular google plus icon button">
        //   <i class="google plus icon"></i>
        // </button>
        // </div>
       
      //  <div>hello</div>
  );
}

ReactDOM.render(
  <Webpage />,
  document.querySelector('#root')
)