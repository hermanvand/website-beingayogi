import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import DynamicComponent from '../DynamicComponent'

const StyledContainer = styled(Container)`
  // title row
  > div > div.title {
    margin-top: 30px;
    padding-left: 0px;
    font-size: 1.2em;
    color: #E9AEC9;
  };
  > div.itemList {
    background-color: white;
    padding: 20px;
  };

`

function CardRow ({blok}) {

  return (
    <SbEditable content={blok}>
          <StyledContainer className="cardRow">
              <Row className="itemList">
                  {blok.columns.map((nestedBlok) => (
                      <Col key={nestedBlok._uid}>
                          <DynamicComponent blok={nestedBlok} />
                      </Col>
                      )
                  )}
              </Row>
          </StyledContainer>
    </SbEditable>
  )

}

export default CardRow