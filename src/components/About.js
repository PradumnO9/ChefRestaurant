import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1 className="m-4 font-bold text-center text-4xl">About Us</h1>
            <UserClass name={"Pradumn Kumar"} location={"Mahoba, UP"} />
        </div>
    );
}

export default About;