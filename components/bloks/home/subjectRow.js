import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { storyblokEditable } from '@storyblok/react'

const StyledContainer = styled(Container)`
  padding: 20px;
  // row 1
  .title {
    padding-left: 0px;
    font-size: 1.2em;
    color: #AE877D;
  };
  // row 2
  // hide scrollbar
  // .scrollBox::-webkit-scrollbar {
  //   display: none;  /* Safari and Chrome browsers */
  // }
  // .scrollBox {
  //     -ms-overflow-style: none; /* IE and Edge */
  //     scrollbar-width: none;  /* mozilla */
  // }
  .item {
    padding-bottom: 10px;
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
  }
`

// <OverlayTrigger
// placement="bottom"
// overlay={<Tooltip>{article.content.summary}</Tooltip>}>
//   <a className="subjectLink notContentLink" href={"/"+article.full_slug}>
//     <div className="itemBG" style={{backgroundImage: "url("+article.content.image+")"}}>
//       <div className="anchorBG">
//         {article.content.title}
//       </div>
//     </div>
//   </a>
// </OverlayTrigger>
function SubjectRow({blok}) {
  //console.log(JSON.stringify(blok))

  let subjectLink = "";
  if (blok.subject) {
    subjectLink = <a href={"/search?q=onderwerp:" + blok.subject}><FontAwesomeIcon icon='external-link-alt'/></a>
  }
  return (
    <StyledContainer {...storyblokEditable(blok)}>
      <Row>
        <Col className="title">
          {blok.title &&
            <p>{blok.title} {subjectLink}</p> 
          }
        </Col>
      </Row>
      <Row className="flex-nowrap overflow-auto scrollBox">
      {blok.articleList.map((article) => {
        if (article.content) {
          return (
            <Col className="item" key={article.content._uid} xs="auto">
              <a className="subjectLink notContentLink" href={"/"+article.full_slug}>
                <div className="itemBG" style={{backgroundImage: "url("+article.content.image+")"}}>
                  <div className="anchorBG">
                    {article.content.title}
                  </div>
                </div>
              </a>
            </Col>
          )
        }
      })}
      </Row>
    </StyledContainer>
  )
}

export default SubjectRow