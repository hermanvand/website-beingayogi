import styled from 'styled-components'
import { Container, Row, Col, Button } from "react-bootstrap"
import DynamicIcon from '../DynamicIcon'

const StyledContainer = styled(Container)`
  color: #828290;
  div.cat {
    display: inline-block;
    margin-bottom: 20px;
    padding: 20px;
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-bottom-color: ${(props) => props.bordercolor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

function DisplayCategory ({category}) {

  let borderColor= "#BA9645"
  let iconUrl = "";
  let mainPage = true;
  switch (category) {
    case "fysiek":
      iconUrl = "/main/bewandel-het-yoga-pad";
      borderColor = "#BA9645";
     break;
    case "subtiel":
      iconUrl = "/main/ontdek-jezelf";
      borderColor = "#B76352";
      break;
    case "causaal":
      iconUrl = "/main/vergroot-je-bewustzijn";
      borderColor = "#793540";
      break;
    case "bewustzijn":
      iconUrl = "/main/wees-een-met-het-leven";
      borderColor = "#E9AEC9";
      break;
    case "inspiratie":
      mainPage = false;
  }

  return (
    <StyledContainer bordercolor={ borderColor }>
        <Row>
            <Col>
              { mainPage &&
              <div><p>Geeft inzicht in</p>
              <div className="cat">
                <a className="cat" href={iconUrl}><DynamicIcon type={category} /></a>
              </div>
              </div>
              }
              { ! mainPage && 
                <Button href={"/search?q=inzicht%3A" + category} variant="secondary">Meer inspiratie</Button>
              }
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default DisplayCategory