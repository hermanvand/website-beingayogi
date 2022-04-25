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
    //NOT mobile
    @media (min-width: 576px) {
        a:hover {
            color: black;
            text-decoration: none;
        }
    }
`

function Footer(props) {
    return (
        <StyledContainer className={props.className}>
            <Row className="fullWidth" xs={1} lg={4}>
                <Col>
                    <b>Over being a yogi</b>
                    <p>
                    Being a yogi is een online overzicht van yoga begrippen, verhalen en inzichten om jou te helpen yoga toe te passen en het leven te begrijpen.
                    </p>
                </Col>
               <Col>
                    <b>Inzichten</b>
                    <ol>
                    <li><a href="/main/bewandel-het-yoga-pad">Bewandel het yoga pad</a></li>
                    <li><a href="/main/ontdek-jezelf">Ontdek jezelf</a></li>
                    <li><a href="/main/vergroot-je-bewustzijn">Vergroot je bewustzijn</a></li>
                    <li><a href="/main/wees-een-met-het-leven">Wees één met het leven</a></li>
                    </ol>
                </Col>
                <Col>
                    <b>Over ons</b>
                    <ul>
                    <li><a href="/info/overview">Being a yogi leeswijzer</a></li>
                    <li><a href="/info/wij">Wie zijn wij</a></li>
                    <li><a href="/info/visie">Onze visie</a></li>
                    <li><a href="/info/yoga">Yoga zoals het bedoeld is</a></li>
                    </ul>
                </Col>
                <Col>
                    <b>Meer</b>
                    <ul>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/">Terug naar het begin</a></li>
                    </ul>
                    <p>Being a yogi is een initiatief van het <a href="https://bamboehuis.amsterdam">Bamboehuis</a>. &copy; 2022</p>
                </Col>
                </Row>
        </StyledContainer>
    )
}

export default Footer