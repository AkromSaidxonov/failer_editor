import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";


function Home() {
  const text = useSelector((store) => store.text.text);


  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>
            {" "}
            Failer editor
          </h1>
          <Link to="/Add" className="btn btn__theme btn__add">
            {" "}
            Create New{" "}
          </Link>

          {text?.map((item) => (
            <>
            <h4>{item.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
