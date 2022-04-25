import styled from 'styled-components'
import { Container, Dropdown, Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap"
import ThemeButton from '../navigation/themeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from '../navigation/search'

const StyledContainer = styled(Container)`
    /* ral 9010 */
    background-color: #e8e3d9;
    border-bottom: 2px solid #34605f;
    padding: 0px;
    max-width:100%;

    // navbar
    #myNavbarBrand, #myNavbar {
        padding-top: 0px;
        padding-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
    }
    #myNavbarBrand {
        margin-left: 20px;
    }
    #myNavbarToggle {
        margin-right: 20px;
    }
    #myNavbarCollapse {
        //margin-right: 20px;
    }
    #myNavbarContainer {
        margin-bottom: 20px;
        padding-left: 0px;
        padding-right: 10px;
        max-width: 75%;
    }
    .myNavbarItem {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        margin-left: 10px;
    }
`

// <!-- known bug: align=end on a dropdownmenu does not work within a navbar
/* exclude theme toggle, not mvp...
                        <Container className="w-auto">
                        <ThemeButton/>
                        </Container>
*/
function Header(props) {
    return (
        <StyledContainer className={props.className}>
            <Navbar className="fullWidth" id="myNavbar" expand="md">
                <Navbar.Brand id="myNavbarBrand" href="/"><img src="/beingayogi-logo.png" height="80px"/></Navbar.Brand>
                <Navbar.Toggle id="myNavbarToggle" aria-controls="myNavbarCollapse" />
                <Navbar.Collapse id="myNavbarCollapse">
                    <Nav className="ms-auto">
                        <NavDropdown className="myNavbarItem" title="Inzichten" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/main/bewandel-het-yoga-pad">1. Bewandel het yoga pad</NavDropdown.Item>
                            <NavDropdown.Item href="/main/ontdek-jezelf">2. Ontdek jezelf</NavDropdown.Item>
                            <NavDropdown.Item href="/main/vergroot-je-bewustzijn">3. Vergroot je bewustzijn</NavDropdown.Item>
                            <NavDropdown.Item href="/main/wees-een-met-het-leven">4. Wees één met het leven</NavDropdown.Item>
                        </NavDropdown>                        
                        <NavDropdown className="myNavbarItem" title="Over ons" id="collasible-nav-dropdown2">
                            <NavDropdown.Item href="/info/overview">Being a yogi leeswijzer</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/info/wij">Wie zijn wij</NavDropdown.Item>
                            <NavDropdown.Item href="/info/visie">Onze visie</NavDropdown.Item>
                            <NavDropdown.Item href="/info/yoga">Yoga zoals het bedoeld is</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink className="myNavbarItem" href="/">Contact</NavLink>
                        <Container id="myNavbarContainer" className="myNavbarItem">
                            <Search/>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </StyledContainer>
    )
}

export default Header