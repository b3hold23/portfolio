import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-2 mt-auto">
            <div className="container">
                <h5>Made with ❤️ by Angel Fernandez</h5>
                <p> © {new Date().getFullYear()}</p>
                <div className="container-sm">
                    <Link className="container-sm" to="https://www.linkedin.com/in/angel-fernandez-132083188/">
                        <img className="img-fluid" src={linkedin} alt="linkedin" style={{ width: "33px", height: "33px" }} />
                    </Link>
                    <Link className="container-sm" to="https://github.com/b3hold23">
                        <img className="icon" src={github} alt="github" style={{ width: "35px", height: "35px" }}/>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;



