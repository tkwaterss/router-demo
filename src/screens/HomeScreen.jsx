import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchRef.current.value.length < 6) {
      return alert("thats too short");
    } 
    
    console.log('its longer than 6')
    navigate(`/details/${searchRef.current.value}`)
  };

    return (
      <div>
        <h1>HomeScreen</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={searchRef} />
          <button>Search</button>
        </form>
      </div>
    );
  };

export default HomeScreen;
