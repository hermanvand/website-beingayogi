import styled from 'styled-components'
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"

const StyledContainer = styled(Container)`
  // row 1
  .title {
    padding-top: 20px;
    font-size: 1.2em;
    color: #AE877D;
  };
  // row 2
  .item {
    margin-bottom: 20px;
  }
  .itemBG {
    position: relative;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #AE877D;
    border-radius: 15px;
    padding: 0px;
    width: 150px;
    min-width: 150px;
    height: 200px;
    min-height: 200px;
    flex-grow: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
  };
  .anchorBG {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: rgba(255,255,255,0.7);
    border-radius: 15px;
  }
  a.subjectLink {
    font-size: 1.2em;
    color: #AE877D;
    bottom: 0;
  }
  //NOT mobile
  @media (min-width: 576px) {
    a.subjectLink:hover, a.subjectLink:active {
      text-decoration: none;
      color: black;
    }
  }`

function SearchResult({display, term, stories}) {
  //console.log(JSON.stringify(stories))
  return (
    <StyledContainer>
      <Row>
            <Col className="title">
              {stories && stories.length > 0 && <p>Artikelen over {display} <b>{term}</b></p>}
              {stories && stories.length == 0 && <p>Er zijn geen artikelen gevonden.</p>}
            </Col>
        </Row>
        <Row>
        {stories && stories.map((story) => {
            return (
              <Col className="item" key={story.content._uid} xs="auto">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>{story.content.summary}</Tooltip>}>
                    <a className="subjectLink notContentLink" href={"/"+story.full_slug}>
                      <div className="itemBG" style={{backgroundImage: "url("+story.content.image+")"}}>
                        <div className="anchorBG">
                          {story.content.title}
                        </div>
                      </div>
                    </a>
                </OverlayTrigger>
              </Col>
            )
        })}
        </Row>
    </StyledContainer>
  )
}

export default SearchResult