import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, FormControl, Button } from "react-bootstrap"

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