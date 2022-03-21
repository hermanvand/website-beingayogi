import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Button } from "react-bootstrap"
import DynamicComponent from '../DynamicComponent'
import DynamicIcon from '../DynamicIcon'

const StyledContainer = styled(Container)`
  // row
  > div {
    margin-top: 30px;
    padding: 0px;
  };
  // col 1
  // grey: #828290
  // green: #34605f
  > div > div.left {
    text-align: center;

    .cat {
      text-align: center;
      margin-bottom: 20px;
      padding: 20px;
      // border-bottom-style: solid;
      // border-bottom-width: 10px;
      // border-bottom-color: rgba(1, 85, 154, 1.0);
      // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  };
  // col 2
  > div > div.content {
    img {
      max-width: 100%;
    }
  };
  > div > div.content > h1,h2,h3 {
    color: #AE877D;
  };
  // col 3
  > div > div.right {
    text-align: right;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
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
  };
  > div > div.right > div.related {
    width: 150px;
    display: inline-block;
  };
`

function Main ({ content }) {
  //console.log(JSON.stringify(content))

  return (
  <SbEditable content={content}>
    <StyledContainer>
        <Row>
          <Col sm={2} className="left">
            <div className="cat">
              <DynamicIcon type={content.categorie} />
            </div>
            <p>
              <Button href={"/search?q=categorie%3A" + content.categorie} variant="secondary">Artikelen over dit inzicht</Button>
            </p>
          </Col>

          <Col sm={8} className="content">
              <h1>{content.title}</h1>
              {render(content.long_text)}
          </Col>

          <Col sm={2} className="right">
            <div>
              <p>Alle inzichten</p>
              <ul>
              <li className="fysiek"><a className="card" href="/main/bewandel-het-yoga-pad"><DynamicIcon className="my-icon" type="fysiek" /></a></li>
              <li className="subtiel"><a className="card" href="/main/ontdek-jezelf"><DynamicIcon className="my-icon" type="subtiel" /></a></li>
              <li className="causaal"><a className="card" href="/main/vergroot-je-bewustzijn"><DynamicIcon className="my-icon" type="causaal" /></a></li>
              <li className="bewustzijn"><a className="card" href="/main/wees-een-met-het-leven"><DynamicIcon className="my-icon" type="bewustzijn" /></a></li>
              </ul>
            </div>
            <div className="related">
              {(typeof content.related !== 'undefined') &&
              content.related.map((nestedBlok) => (
              <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default Main