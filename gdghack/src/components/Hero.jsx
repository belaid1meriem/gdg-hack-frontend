
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Hero() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate("/Chooserole"); 
  };
  return (
    <div className="text=black" id="Hero">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <br/>
      <br/>
      <h1 className="md:text-5xl sm:text-4xl   text-4xl font-bold md:py-6 text-[#4C489E]" >Empowering Students to Earn and Build Their Future</h1>
      <br/>
      <p className="md:text-2xl text-xl font-semibold text-gray-500">
      Start earning money, gain real-world skills, and take control of your career—all in one platform.
      </p>
     
      <button onClick={handleButtonClick}  className="bg-[#ED9AC2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white  ">Get Started</button>
      <p className="text-sm text-gray-600 ">
            Already have an account?{" "}
            <Link
            to="/Login"
            className="text-[#4C489E] font-semibold"
          >
              Log In
          </Link>
      </p>
      </div>
    </div>
  )
}

export default Hero