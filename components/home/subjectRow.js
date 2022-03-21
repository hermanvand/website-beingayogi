import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
  // title row
  > div > div.title {
    padding-top: 20px;
    padding-left: 0px;
    font-size: 1.2em;
    color: #AE877D;
  };
  // item row
  > div > div.item {
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
      margin-right: 10px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  };
  > div > div.item > div {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        background: rgba(255,255,255,0.6);
  }
  > div > div.item > div > a {
    font-size: 1.2em;
    color: #AE877D;
    bottom: 0;
  }
  > div > div.item > div > a:hover, a:active {
    text-decoration: none;
    color: black;
  }
`

function SubjectRow({blok}) {
  //console.log(JSON.stringify(blok))
  return (
  <SbEditable content={blok}>
        <StyledContainer className="subjectRow">
          <Row>
                <Col className="title">
                  {blok.title && blok.subject &&
                    <p>{blok.title} <a href={"/search?q=onderwerp:" + blok.subject}><FontAwesomeIcon icon='external-link-alt'/></a></p> 
                  }
                </Col>
            </Row>
            <Row>
            {blok.articleList.map((article) => {
                return (
                        <Col className="item" key={article.content._uid} style={{backgroundImage: "url("+article.content.image+")"}} >
                            <div>
                            <a href={"/"+article.full_slug}>
                               {article.content.title}
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

export default SubjectRow