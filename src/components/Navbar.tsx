import * as React from 'react';
import {
    Nav,
    NavMenu,
    NavLogo,
    NavContainer,
    StyledLink,
    ResumeLink
} from './Navbar.elements'
// import { Link } from 'react-scroll'
// import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo>
                        JDAnth.
                    </NavLogo>
                    <NavMenu>
                        <StyledLink>
                            <ResumeLink
                                href='https://jdanthdavis.netlify.app/'
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Home
                                </ResumeLink>
                        </StyledLink>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar