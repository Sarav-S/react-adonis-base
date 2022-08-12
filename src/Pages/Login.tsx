import React, { useState, useEffect } from 'react';
import axiosInstance from '../helpers/axios';

const paramsInitialState = {
    email: '',
    password: '',
};

const errorsInitialState = {
    email: '',
    password: '',
};

function Login() {
    const [params, setParams] = useState(paramsInitialState);
    const [errors, setErrors] = useState(errorsInitialState);

    function handleChange(e: any) {
        const { name, value } = e.target;
        const data: any = { ...params };
        data[name] = value;
        setParams(data);
    }

    function submit() {
        axiosInstance.post('/login', params)
            .then((data: any) => {

            })
            .catch((validationErrors: any) => {
                setErrors({ ...errors, ...validationErrors });
            });
    }

    return (
        <div>
            <div className="bg-gray-100 p-4 lg:p-8 lg:h-screen">
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submit}>
                            <input type="hidden" name="remember" value="true"/>
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">Email address</label>
                                        <input id="email-address" name="email" type="email" autoComplete="email" required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email address"
                                            onChange={handleChange}
                                            />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">Password</label>
                                        <input id="password" name="password" type="password" autoComplete="current-password" required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Sign in
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
