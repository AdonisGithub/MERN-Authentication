import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../logo.svg";
const Home = () => {
    const navigate = useNavigate();
    const logoClick = () => {
        navigate('/');
    }

    // const dropdownclick=()=>{
    //         document.getElementById('dropdown_menu').style.display= 'block';
    // }

    useEffect(() => {
        window.onscroll = () => {
          if ( window.scrollY < 80 ) {
            document.getElementById('nav').style.top = '0';
          }
           else 
            {
                if ( window.scrollY >= 80 && window.scrollY<160) {
                document.getElementById('nav').style.top = '-5rem';
                }
                else
                {
                document.getElementById('nav').style.top = '0'
                }
            }
        };
      }, []);  
    return (
        <nav id= "nav" className=" flex fixed z-50 w-full p-4 items-center justify-between  bg-gradient-to-r from-purple-400 border-solid border-t-2 border-b-2 border-gray-300 transition-[top] duration-300">
            <div className="flex justify-between lg:w-auto w-full pl-5">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <img src={logo} alt="logo"  className="cursor-pointer"  width={60} height={30} onClick={logoClick}></img>               
                    <span className="font-semibold text-xl tracking-tight">MERN STACK</span>
                </div>
                <div className=" dropdown lg:hidden">
                    <button className=" px-3 py-3 border-2 rounded text-blue-400 border-blue-700 hover:text-blue-50 hover:border-blue-200">
                        <svg
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                    <div id="dropdown_menu" className="dropdown-content z-50">
                    <a
                        href="/signup"
                        className="block text-md  rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
                    >
                        Sign up
                    </a>
                    <a
                        href="/login"
                        className=" block text-md  rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
                    >
                        login
                    </a>
                    </div>
                </div>
            </div>
            <div className="menu lg:flex  lg:px-3 px-3">
                <div className="relative  text-gray-600 lg:block hidden">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                        <svg
                            className="text-gray-600 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 56.966 56.966"
                            style={{ enableBackground: "new 0 0 56.966 56.966" }}
                            xmlSpace="preserve"
                            width="512px"
                            height="512px"
                        >
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
                <div className="lg:flex hidden ">
                    <a
                        href="/signup"
                        className="block text-md px-4  py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
                    >
                        Sign up
                    </a>
                    <a
                        href="/login"
                        className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
                    >
                        login
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Home;