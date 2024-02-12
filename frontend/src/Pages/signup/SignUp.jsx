import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckBox";

const SignUp = () => {
    const navigate = useNavigate();
    const [fullName, setfullName] = useState("");
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [confermPassword, setconfermPassword] = useState("");

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto max-w-[500px] mt-10 lg:py-0">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Register To ChatApp
                    </h1>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label
                                for="fullName"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setfullName(e.target.value);
                                }}
                                name="fullName"
                                id="fullName"
                                className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50  placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                for="username"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                User Name
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
                        <div>
                            <label
                                for="confirmPassword"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                onChange={(e) => {
                                    setconfermPassword(e.target.value);
                                }}
                                name="confirmPassword"
                                id="password"
                                placeholder="••••••••"
                                className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50  placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                required=""
                            />
                        </div>

                        {/* GENDER CHECKBOX GOES HERE */}
                        <GenderCheckbox/>

                        <button
                            type="submit"
                            className="mx-32 text-center bg-slate-200 w-28 py-2"
                            style={{ borderRadius: "10px" }}
                        >
                            Sign up
                        </button>
                        <p className="text-sm font-light text-gray-200">
                            Already have an account!{" "}
                            <Link
                                to="/login"
                                className="font-medium text-primary-600 hover:underline text-primary-500"
                                style={{ color: "blue" }}
                            >
                                login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;