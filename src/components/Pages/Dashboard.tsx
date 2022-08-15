import React from "react";
import { useSelector } from "react-redux";

function Home() {
    const { user } = useSelector((state: any) => state.auth);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-lg py-8 text-gray-700">Welcome home, <span className="font-bold">{user.email}</span>!</h1>
        </div>
    );
}

export default Home;
