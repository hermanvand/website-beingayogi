import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"
import DynamicIcon from '../DynamicIcon'

const StyledContainer = styled(Container)`
  color: #828290;
  ul {
    display: inline-block;
    list-style-type: none;
    padding: 0;
    max-width: 200px;
  }
  li {
    text-align: center;
    margin-bottom: 20px;
    padding: 20px;
    border-bottom-style: solid;
    border-bottom-width: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .fysiek {
    border-bottom-color: #BA9645;
  }
  .subtiel {
    border-bottom-color: #B76352;
  }
  .causaal {
    border-bottom-color: #793540;
  }
  .bewustzijn {
    border-bottom-color: #E9AEC9;
  }
`

function DisplayCategoryAll ({thisDate}) {
  
  return (
    <StyledContainer>
        <Row>
          <Col>
            <hr className="line"/>
            <p>Alle inzichten</p>
            <ul>
            <li className="fysiek"><a className="cat" href="/main/bewandel-het-yoga-pad"><DynamicIcon type="fysiek" /></a></li>
            <li className="subtiel"><a className="cat" href="/main/ontdek-jezelf"><DynamicIcon type="subtiel" /></a></li>
            <li className="causaal"><a className="cat" href="/main/vergroot-je-bewustzijn"><DynamicIcon type="causaal" /></a></li>
            <li className="bewustzijn"><a className="cat" href="/main/wees-een-met-het-leven"><DynamicIcon type="bewustzijn" /></a></li>
            </ul>
          </Col>
        </Row>
    </StyledContainer>
  )
}

export default DisplayCategoryAll