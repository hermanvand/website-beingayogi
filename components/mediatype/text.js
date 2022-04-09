import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Button } from "react-bootstrap"
import DynamicComponentRendered from '../DynamicComponentRendered'
import DynamicComponent from '../DynamicComponent'
import DynamicIcon from '../DynamicIcon'
import DisplayDate from '../pages/displayDate'

const StyledContainer = styled(Container)`
  // row
  > div {
    margin-top: 30px;
    padding: 0px;
  };
  // col 1
  div.left > img {
    width: 100%;
  };
  // col 2
  .content > img, .content > p > img {
    width: 100%;
    max-width: 100%;
  };
  .content > h1,h2,h3 {
    color: #AE877D;
  };
  .content > h4,h5,h6 {
    color: #BA9645;
  }
  .intro {
    margin-left:20px;
    margin-right: 20px;
    font-style: italic;
  }
  // col 3
  div.right {
    text-align: center;
  };
  div.related {
    margin-top:20px;
    text-align:center;
    color: #828290;
  };
  .cat {
    display: inline-block;
    margin-bottom: 20px;
    padding: 20px;
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-bottom-color: ${(props) => props.bordercolor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .line {
    width: 150px;
    margin: auto;
    margin-bottom: 10px;
  }
`

function Text ({content, tags, thisDate}) {
  //console.log(JSON.stringify(content))
  //console.log(JSON.stringify(tags))
  //console.log(JSON.stringify(thisDate))
  
  let borderColor= "#BA9645"
  let iconUrl = "";
  switch (content.categorie) {
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
  }

  return (
  <SbEditable content={content} tags={tags}>
    <StyledContainer bordercolor={ borderColor }>
        <Row>
          <Col className="left">
            <img src={content.image}/>
          </Col>
          <Col sm={6} className="content">
              <h1>{content.title}</h1>
              <DisplayDate thisDate={thisDate} />
              <p className="intro">{content.intro}</p>
              {render(content.long_text,
                {
                  defaultBlokResolver: (name, props) => (
                    <DynamicComponentRendered component={name} blok={props} key={props._uid} />
                  )
                }
              )}
              <div className="related">
                {(typeof content.related !== 'undefined') &&
                <p><hr className="line"/>Heeft relatie met</p>
                }
                {(typeof content.related !== 'undefined') &&
                content.related.map((nestedBlok) => (
                <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
              </div>
          </Col>
          <Col className="right">
            <div>
              <p>Geeft inzicht in</p>
              <div className="cat">
                <a className="card" href={iconUrl}><DynamicIcon type={content.categorie} /></a>
              </div>
              <div>
                { tags && tags.length > 0 && <p><hr className="line"/>Is gelabeld als</p> }
                { tags.map((tag) => (
                  <Button key={tag} href={"/search?q=tag:" + tag} variant="secondary">{tag}</Button>
                ))}
              </div>
            </div>
          </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default Text