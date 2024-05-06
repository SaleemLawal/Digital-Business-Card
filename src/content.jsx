import "./content.css";
import Footer from './footer.jsx'
import mail from "./assets/mail.svg";
import linkedIn from "./assets/linkedin.png";

function Content() {
    return (
        <>
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3>laurasmith.website</h3>

            <div className="buttons">
                <button>
                    <img src={mail} />
                    <p>Email</p>
                </button>

                <button>
                    <img src={linkedIn} />
                    <p>LinkedIn</p>
                </button>
            </div>

            <div className="About">
                <h2>About</h2>
                <p>
                    I am a frontend developer with a particular interest in making things
                    simple and automating daily tasks. I try to keep up with security and
                    best practices, and am always looking for new things to learn.
                </p>
                <h2>Interests</h2>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
                    Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>

            <Footer />


        </>
    );
}
export default Content;
