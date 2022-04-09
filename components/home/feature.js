import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import DynamicIcon from '../DynamicIcon'

// geel:#BA9645
// oranje:#B76352
// rood:#793540
// roze:#E9AEC9
const StyledContainer = styled(Container)`
  background-color: white;
  // background: linear-gradient(to top right,#fff 50%,#01559A 50.1%) top right/40px 40px no-repeat,white; 
  height: 100%;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-bottom-color: ${(props) => props.bordercolor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  text-align: center;
  // title
  .title {
      font-size: 2em;
      font-weight: bold;
      padding: 10px;
  }
  .description {
  }
`

function Feature ({blok}) {
  //console.log(JSON.stringify(blok.link))

  //                        {blok.name}

  let borderColor= "#BA9645"
  switch (blok.icon) {
    case "fysiek":
      borderColor = "#BA9645";
      break;
    case "subtiel":
      borderColor = "#B76352";
      break;
    case "causaal":
      borderColor = "#793540";
      break;
    case "bewustzijn":
      borderColor = "#E9AEC9";
      break;  
  }

  return (
    <SbEditable content={blok}>
        <StyledContainer bordercolor={ borderColor }>
            <Row>
                <Col>
                    <a href={blok.link.cached_url} className="text-decoration-none text-reset">
                    <DynamicIcon type={blok.icon} />
                    <p className="title">
                    </p>
                    <p className="description">
                        {blok.description}
                    </p>
                    </a>
                </Col>
            </Row>
        </StyledContainer>
    </SbEditable>
  )
}

export default Feature