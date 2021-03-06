import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import { Button } from '../../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,NavIcon,
     MobileIcons,
     NavMenu,
     NavItems,
     NavLinks,
     NavItemBtn,
     NavBtnLink
 } from './Navbar.elements';


const Navbar = () => {

    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value = {{color:'#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                        ULTRA
                    </NavLogo>
                    <MobileIcons onClick = {handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcons>
                    <NavMenu onClick = {handleClick} click = {click}>
                        <NavItems>
                            <NavLinks to ="/">
                                Home
                            </NavLinks>
                        </NavItems>

                        <NavItems>
                            <NavLinks to ="/services">
                                Services
                            </NavLinks>
                        </NavItems>

                        <NavItems>
                            <NavLinks to ="/products">
                                Products
                            </NavLinks>
                        </NavItems>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ): (
                                <NavBtnLink to='/sign-up'>
                                    <Button  fontBig primary>
                                        SIGN UP</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                        
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
}

export default Navbar
