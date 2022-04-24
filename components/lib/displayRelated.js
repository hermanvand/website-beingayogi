import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"
import DynamicComponent from '../DynamicComponent'

const StyledContainer = styled(Container)`
  margin-top:20px;
  text-align:center;
  color: #828290;
`

function DisplayRelated ({related}) {
  
  return (
    <StyledContainer>
        <Row>
            <Col>
              { related && related.length > 0 && <p><hr className="lineOn"/>Lees een gerelateerd artikel</p> }
              { related && related.map((nestedBlok) => (
                <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default DisplayRelated