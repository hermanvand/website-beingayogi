import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap"

const StyledContainer = styled(Container)`
/*
    padding: 0px;
    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
    form input[type=text] {
        padding: 6px;
        font-size: 16px;
        border: 1px solid #34605f;
        border-right: 0px;
        float: left;
        background: white;
        border-radius: 4px;
    }
    form button, button:hover {
        border: 1px solid #34605f;
        border-left: 0px;
    }
    */
`
/*
        <StyledContainer className={props.className}>
            <form action="/search" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Zoeken</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Zoeken"
                    name="q" 
                />
                <button type="submit" className="btn btn-light"><FontAwesomeIcon icon='search' size="1x"/></button>
            </form>
        </StyledContainer>

*/

function Search (props) {
    return (
        <Form className="d-flex" action="/search" method="get">
            <FormControl
            type="search"
            placeholder="Zoeken"
            className="me-2"
            aria-label="Search"
            name="q"
            />
            <Button type="submit" variant="outline-success"><FontAwesomeIcon icon='search' size="1x"/></Button>
        </Form>
    )
}

export default Search;