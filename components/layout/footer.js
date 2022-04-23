import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
    margin-top: 30px;
    background-color: #34605f;
    color: white;
    padding: 10px;
    font-size: 0.8em;
    max-width:100%;

    //row
    .fullWidth {
        margin-left: 0px;
        margin-right: 0px;
    }   

    // col
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
            <Row className="fullWidth" xs={1} sm={4}>
                <Col>
                    <b>Over being a yogi</b>
                    <p>
                    Being a yogi is een online overzicht van yoga begrippen, verhalen en inzichten om jou te helpen yoga toe te passen en het leven te begrijpen.
                    </p>
                </Col>
               <Col>
                    <b>Inzichten</b>
                    <ul>
                    <li><a href="/main/bewandel-het-yoga-pad">Bewandel het yoga pad</a></li>
                    <li><a href="/main/ontdek-jezelf">Ontdek jezelf</a></li>
                    <li><a href="/main/vergroot-je-bewustzijn">Vergroot je bewustzijn</a></li>
                    <li><a href="/main/wees-een-met-het-leven">Wees één met het leven</a></li>
                    </ul>
                </Col>
                <Col>
                    <b>Informatie</b>
                    <ul>
                    <li><a href="/info/overview">Over being a yogi</a></li>
                    <li><a href="/info/yoga">Yoga zoals het bedoeld is</a></li>
                    <li><a href="/info/wij">Over ons</a></li>
                    <li><a href="/info/visie">Onze visie</a></li>
                    </ul>
                </Col>
                <Col>
                    <p>Being a yogi is een initiatief van het <a href="https://bamboehuis.amsterdam">Bamboehuis</a>. &copy; 2022</p>
                </Col>
                </Row>
        </StyledContainer>
    )
}

export default Footer