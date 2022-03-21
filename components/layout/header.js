import styled, { css } from 'styled-components'
import { Container, Row, Col, Dropdown, Navbar, Nav, NavDropdown } from "react-bootstrap"
import ThemeButton from '../navigation/themeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Search from '../navigation/search'

const StyledContainer = styled(Container)`
    /*background-color: #34605f;*/
    border-bottom: 3px solid #34605f;
    padding: 0px;

    //.dropdown-toggle {
    //    background: #34605f;
    //}
    max-width:100%;
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
            <Navbar className="fullWidth" id="myNavbar" bg="light" expand="lg">
                <Navbar.Brand id="myNavbarBrand" href="/"><img src="/being a yogi.png" height="80px"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="d-flex justify-content-end">
                    <Nav className="flex-row-reverse">
                        <Container className="w-auto">
                        <Search />
                        </Container>
                        <Container className="w-auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                &nbsp; <FontAwesomeIcon icon='info' size="1x"/> &nbsp;
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                                <Dropdown.Item href="/info/overview">Being a Yogi</Dropdown.Item>
                                <Dropdown.Item href="/info/yoga">Yoga zoals het bedoeld is</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="/info/wij">Over ons</Dropdown.Item>
                                <Dropdown.Item href="/info/visie">Onze visie</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Container>
                    </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </StyledContainer>
    )
}

export default Header