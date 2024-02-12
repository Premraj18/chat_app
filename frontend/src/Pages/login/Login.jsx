import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:4000/login',{email,password})
    //         .then(result => {
    //             console.log(result)
    //             if(result.data === "Success"){
    //                 navigate ('/home')
    //             }else{
    //                 alert("invalid credentials");
    //             }
    //     })
    //     .catch(err=> console.log(err))
    // }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto max-w-[500px] lg:py-0 mt-40">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Login ChatApp
                    </h1>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label
                                for="username"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                UserName
                            </label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setusername(e.target.value);
                                }}
                                name="username"
                                id="username"
                                className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50  placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50  placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                required=""
                            />
                        </div>

                        <button
                            type="submit"
                            className="mx-36 text-center bg-slate-200 px-5 py-2"
                            style={{ borderRadius: "10px" }}
                        >
                            Login
                        </button>
                        <p className="text-sm font-light text-gray-200">
                            Don’t have an account yet{" "}
                            <Link
                                to="/signup"
                                className="font-medium text-primary-600 hover:underline text-primary-500"
                                style={{ color: "blue" }}
                            >
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
