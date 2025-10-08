import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faSquareGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

const FooterComponent = () => {

    return(
        <footer className="mainFooter">

            <Link className="mainFooterDeadLinks" to="/support">
            <p>Support</p></Link>
            <Link className="mainFooterDeadLinks" to="/">
            <p>Cookie-policy</p></Link>
            <span className="mainFooterIcons">
                <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="https://x.com/">
                <FontAwesomeIcon icon={faXTwitter}/>
                </a>
                <a href="https://github.com/Robinjakobsson/webbShopExamination/">
                <FontAwesomeIcon icon={faSquareGithub}/>
                </a>

            </span>
        </footer>
    )
}

export default FooterComponent;