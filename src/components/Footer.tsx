import linkedInLogo from '../img/in.png';
import githubLogo from '../img/gh.png'
import { Navbar, Alignment, AnchorButton } from "@blueprintjs/core";

export const Footer = () => {
    return (
        <footer >
            <Navbar >
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>{new Date().getFullYear()}</Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <AnchorButton
                        className="bp4-minimal"
                        href="https://www.linkedin.com/in/marco-ramos-dev"
                        text={
                            <span>
                                <img src={linkedInLogo} alt="linkedin" height={20} /> mramos-ramos-dev
                            </span>} />
                    <AnchorButton
                        className="bp4-minimal"
                        href="https://github.com/mramos-dev"
                        text={
                            <span>
                                <img src={githubLogo} alt="github" height={20} /> mramos-dev
                            </span>} />
                </Navbar.Group>
            </Navbar>
        </footer>
    );
};
