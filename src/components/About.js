import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {

    const { loggedInUser } = useContext(UserContext);

    return(
        <div>
            <div className="m-4 text-center">
            <h1 className="font-bold text-4xl">About Us</h1>
            <h2 className="mt-2 text-2xl">Logged User: {loggedInUser}</h2>
            </div>
            <UserClass name={"Pradumn Kumar"} location={"Mahoba, UP"} />
        </div>
    );
}

export default About;