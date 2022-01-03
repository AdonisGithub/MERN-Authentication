import React from "react";
const Home = () => {
  return (
    <div className= "background h-80 w-full">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
          <h2 className="text-4xl mt-15 mt-20 tracking-tight font-extrabold text-gray-100">
            <span className="block">MERN STACK</span>
          </h2>
          <p className="text-gray-300 mt-5">
            MERN Stack is using React, Node.js, Express.js, MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;