import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { headings } from "./constant";
import $ from "jquery";
const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const changeBackround = () => {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
      console.log("reeeeee");
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };
  $('document').ready(function($) {
    // Set effect velocity in ms
    let velocity = 100;
    
    let shuffleElement = $('.shuffle');
  
    $.each( shuffleElement, function(index, item) {
      $(item).attr('data-text', $(item).text());
    });
  
    let shuffle = function(o) {
      for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };
  
    let shuffleText = function(element, originalText) {
      let elementTextArray = [];
      let randomText = [];
  
      for ( let i=0;i<originalText.length;i++) {
        elementTextArray.push(originalText.charAt([i]));
      };
  
      let repeatShuffle = function(times, index) {
        if ( index == times ) {
          element.text(originalText);
          return;
        } 
  
        setTimeout( function() {
          randomText = shuffle(elementTextArray);
          for (let i=0;i<index;i++) {
            randomText[i] = originalText[i];	
          }
          randomText = randomText.join('');
          element.text(randomText);
          index++;
          repeatShuffle(times, index);
        }, velocity);	
      }
      repeatShuffle(element.text().length, 0);
    }
  
    shuffleElement.mouseenter(function() {
      shuffleText($(this), $(this).data('text'));
    });
  });;
  useEffect(() => {
    window.addEventListener("scroll", changeBackround);
  }, []);
  return (
    <nav
      onScrollCapture={changeBackround}
      className={`navbar ${isMenuOpen ? "open" : ""} ${
        activeNavbar ? "activeNavbar" : ""
      }`}
    >
      <div className="LogoLinks">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          {Array.isArray(headings) &&
            headings.length > 0 &&
            headings.map((item) => <a className="shuffle" href="/">{item?.heading}</a>)}
        </div>
      </div>
      <div className="button">
        <button>Start Building</button>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
