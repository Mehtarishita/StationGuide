import React, { useState } from 'react'; 
import logo from '../assets/stationsaarthi.svg'; // Import your logo 
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg'; // Assuming you have a back icon

const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();
    const RegisterClick = () => {
        navigate('/Register'); // Navigates to the login page
    }
    const HomeClick = () => {   
        navigate('/'); // Navigates to the home page
    }

    const handleLogin = (e) => { 
        e.preventDefault(); 
        // Handle login logic here 
    };  


    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-5000">
            {/* Logo and Title */} 

            <div ><button onClick={HomeClick}><img src={backicon} alt="" srcset="" className='fixed left-[1vh] h-[9vh] w-auto' /></button></div>

            <div className="mb-10 text-center ">
                <img src={logo} alt="Station Saarthi Logo" className="w-20 mx-auto h-22 " />
                <h1 className="mt-4 text-4xl font-bold text-gray-800 ">Station Saarthi</h1>
                <p className="mt-2 text-lg text-gray-600 ">Your Trusted Platform Guide</p>
            </div>


            {/* Login Form */}
            <form onSubmit={handleLogin} className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
                {/* Login Heading */}
                <h2 className="py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl">
                    Login
                </h2>

                {/* Username Input */}
                <div className="mb-5">
                    <label className="block mb-2 font-semibold text-gray-700 " htmlFor="username">Username</label>
                    <input
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    /> 
                </div> 

                {/* Password Input */} 
                <div className="mb-6"> 
                    <label className="block mb-2 font-semibold text-gray-700" htmlFor="password">Password</label>
                    <input 
                        type="password"    
                        id="password"  
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Login Button */} 
                <button
                    type="submit"
                    className="w-full py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105"
                >
                    Login
                </button>
            </form>

            {/* Don't have an account link */}
            <p className="mt-6 text-gray-600">
                Don't have an account?{' '}
              
                <button onClick={RegisterClick} className="text-blue-500 underline focus:outline-none">
                    Register</button>
            </p> 
            
        </div>  
    ); 
}; 

export default Login;
