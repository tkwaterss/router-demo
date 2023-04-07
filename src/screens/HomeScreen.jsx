import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const [show, setShow] = useState("");

  const handleRadio = (event) => {
    setShow(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(show);
    console.log(searchRef.current.value);

    // console.log('its longer than 6')
    // navigate(`/details/${searchRef.current.value}`)
  };

  return (
    <div>
      <h1>HomeScreen</h1>
      <h2>Whats Your Favorite Show</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={searchRef} />

        <input
          onChange={handleRadio}
          id="show1"
          value="the-office"
          name="show"
          type="radio"
        />
        <label htmlFor="show1">The Office</label>
        <input
          onChange={handleRadio}
          id="show2"
          value="silicon-valley"
          name="show"
          type="radio"
        />
        <label htmlFor="show2">Silicon Valley</label>
        <input
          onChange={handleRadio}
          id="show3"
          value="peaky-blinders"
          name="show"
          type="radio"
        />
        <label htmlFor="show3">Peaky Blinders</label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default HomeScreen;
