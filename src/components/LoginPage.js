import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const { setIsLoggedIn } = useContext(UserContext);

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const DUMMY_USER = {
    "name": "Pradumn",
    "password": "1234",
    "token": "LR3SVJSY89kPzWbcAeLEIIyHtydKTHc7IB5PcDytubxBXttRk99hJM4Jkab7wZQs"
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(loginData.name === DUMMY_USER.name && loginData.password === DUMMY_USER.password) {
        localStorage.setItem("data", JSON.stringify({
            "name": DUMMY_USER.name,
            "token": DUMMY_USER.token
        }));
        alert(`Welcome ${DUMMY_USER.name}`);
        navigate('/home');
        setIsLoggedIn(true);
        setErrorMsg("");
    } else {
        setErrorMsg("Wrong credentials!")
    }
  }

  return (
    <div className="mt-16">
      <div className="flex text-center px-6 py-2 w-[25%] m-auto border-2 border-solid border-gray-200 rounded-lg shadow-md">
        <form className="p-4" onSubmit={handleSubmit}>
          <h1 className="font-bold text-2xl mb-2">Login</h1>
          <div className=" mr-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={loginData.name}
              onChange={handleChange}
              placeholder="name"
              className="border border-gray-300 m-2 p-2 rounded-md"
            />
          </div>
          <div className="items-start mr-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="password"
              className="border border-gray-300 m-2 p-2 rounded-md"
            />
          </div>
          <button className="border border-gray-300 rounded-lg m-2 py-1 px-2 bg-black text-white">
            Submit
          </button>
          <span className="text-red-600"><h1>{errorMsg}</h1></span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
