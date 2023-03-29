import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Get in Touch</h2>
            <ul class="contactList">
                <li>
                    <a href="https://www.linkedin.com/in/robertojan/">
                    <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                </li>
                <li>
                    <a href="https://github.com/RobertoJan">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="mailto:roberto.janliao@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                </li>
            </ul>
            <p>Thank you for checking this project. Please feel free to contact me through email about work/learning opportunities/feedback or let's connect on LinkedIn!</p>
        </div>
    )
}

export default Contact;