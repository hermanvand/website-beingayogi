import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
  // row 1
  .title {
    padding-top: 20px;
    padding-left: 0px;
    font-size: 1.2em;
    color: #AE877D;
  };
  // row 2
  .item {
      position: relative;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: #AE877D;
      padding: 0px;
      width: 150px;
      min-width: 150px;
      height: 200px;
      min-height: 200px;
      flex-grow: 0;
      margin-right: 30px;
      margin-bottom: 30px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
  };
  .item > div {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        background: rgba(255,255,255,0.6);
  }
  .item > div > a {
    font-size: 1.2em;
    color: #AE877D;
    bottom: 0;
  }
  .item > div > a:hover, a:active {
    text-decoration: none;
    color: black;
  }
`

function SearchResult({term, stories}) {
  //console.log(JSON.stringify(stories))
  return (
  <SbEditable content={stories}>
        <StyledContainer>
          <Row>
                <Col className="title">
                    <p>Resultaten voor: {term}</p>
                </Col>
            </Row>
            <Row>
            {stories.map((story) => {
                return (
                        <Col className="item" key={story.content._uid} style={{backgroundImage: "url("+story.content.image+")"}} >
                            <div>
                            <a href={"/"+story.full_slug}>
                               {story.content.title}
                            </a>
                            </div>
                        </Col>
                        )
                    })}
            </Row>
        </StyledContainer>
  </SbEditable>
  )
}

export default SearchResult