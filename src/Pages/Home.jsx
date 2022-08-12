import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome Home</h1>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Home;