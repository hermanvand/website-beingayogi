import styled, { css } from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
    margin-top: 30px;
    background-color: #34605f;
    color: white;
    padding: 10px;
    font-size: 0.8em;
    
    max-width:100%;
    .fullWidth {
        margin-left: 0px;
        margin-right: 0px;
    }   

    .copyright {
        position:relative;
    }
    .copyright > p {
        position: absolute;
        bottom: 0%;
    }
    a {
        color: white;
    }
    a:hover {
        color: black;
        text-decoration: none;
    }
`

function Footer(props) {
    return (
        <StyledContainer className={props.className}>
            <Row className="fullWidth">
                <Col className="copyright">
                    <p>
                    &copy; Bamboehuis, 2021
                    </p>
                </Col>
               <Col>
                    <p>
                        Inzichten
                        <ul>
                        <li><a href="/main/bewandel-het-yoga-pad">Bewandel het yoga pad</a></li>
                        <li><a href="/main/ontdek-jezelf">Ontdek jezelf</a></li>
                        <li><a href="/main/vergroot-je-bewustzijn">Vergroot je bewustzijn</a></li>
                        <li><a href="/main/wees-een-met-het-leven">Wees één met het leven</a></li>
                        </ul>
                    </p>
                </Col>
                <Col>
                    <p>
                        Informatie
                        <ul>
                        <li><a href="/info/overview">Over being a yogi</a></li>
                        <li><a href="/info/yoga">Yoga zoals het bedoeld is</a></li>
                        <li><a href="/info/wij">Over ons</a></li>
                        <li><a href="/info/visie">Onze visie</a></li>
                        </ul>
                    </p>
                </Col>
                <Col>
                    <p>
                        Ga naar
                        <ul>
                        <li><a href="/">Beginpagina</a></li>
                        <li><a href="/search?q=yoga">Zoeken</a></li>
                       </ul>
                    </p>
                </Col>
                </Row>
        </StyledContainer>
    )
}

export default Footer