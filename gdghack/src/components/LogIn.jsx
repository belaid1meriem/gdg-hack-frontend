import React, { useState } from "react";
import Business from '../assets/Business.svg';
import office from '../assets/office.svg';
import pc from '../assets/pc.svg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // For showing a loading spinner
    const [error, setError] = useState(null); // For error handling
    const [success, setSuccess] = useState(null); // For success message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true);
        setError(null);
        setSuccess(null);

        const data = { email, password };

        try {
            const response = await fetch("http://127.0.0.1:7000/account/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(data), 
            });
            console.log(data);
            if (!response.ok) {
                throw new Error("Invalid email or password.");
            }

            const result = await response.json();
            console.log("Login successful:", result);
           
            // Example: You can redirect the user or store a token
            setSuccess("Login successful!");
            localStorage.setItem("token", result.access);
            localStorage.setItem("user", JSON.stringify(result));
            if(result.enterprise_id) {
                localStorage.setItem("entrepriseID", result.enterprise_id )
                localStorage.setItem("studentID", null)
                navigate("/company/"+result.enterprise_id+"/jobs");
            } 
            else {
                localStorage.setItem("studentID", result.student_id);
                localStorage.setItem("entrepriseID", null)
                navigate("/student/"+result.student_id+"/projects");
            } 
        } catch (err) {
            console.error("Login failed:", err);
            console.log(err);
            setError(err.message || "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-row justify-center items-center mt-10  gap-12 ">
            {/* Left Section - Login Form */}
            <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
                <h1 className="text-4xl font-bold mb-4 text-[#4C489E]">Welcome back </h1>
                <p className="text-gray-600 mb-8">Please enter your details</p>

                {/* Login Form */}
                <form className="w-full space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Bind input to state
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E] placeholder-gray-400"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Bind input to state
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C489E] placeholder-gray-400"
                            required
                        />
                    </div>

                    {/* Display loading, error, or success */}
                    {loading && <p className="text-blue-500">Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <button
                        type="submit"
                        className="w-full bg-[#F3965C] text-white py-3 rounded-lg hover:bg-[#e2874e] transition"
                        disabled={loading} // Disable the button while loading
                    >
                        Log In
                    </button>
                </form>
                <p className="text-sm text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <Link
            to="/Chooserole"
            className="text-[#4C489E] font-semibold"
          >
              Sign Up
          </Link>
                </p>
            </div>

            {/* Right Section - Image */}
            <div className="w-[430px] hidden lg:flex justify-center items-center">
                <img src={pc} alt="/" className="rounded-xl" />
            </div>
        </div>
    );
}

export default LogIn;
