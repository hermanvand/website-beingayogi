import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Button } from "react-bootstrap"
import DynamicComponentRendered from '../DynamicComponentRendered'
import DynamicIcon from '../DynamicIcon'
import DisplayRelated from '../pages/displayRelated'

const StyledContainer = styled(Container)`
  .cat {
    margin-bottom: 20px;
    padding: 20px;
  }
  .thisRight {
    color: #828290;
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
  }
`

function Main ({ content }) {
  //console.log(JSON.stringify(content))

  return (
  <SbEditable content={content}>
    <StyledContainer className="contentBody">
        <Row>
          <Col sm={2} className="contentLeft">
            <div className="cat">
              <DynamicIcon type={content.categorie} />
            </div>
            <p>
              <Button href={"/search?q=categorie%3A" + content.categorie} variant="secondary">Artikelen over dit inzicht</Button>
            </p>
          </Col>

          <Col sm={8} className="content">
              <h1>{content.title}</h1>

              {render(content.long_text,
                {
                  defaultBlokResolver: (name, props) => (
                    <DynamicComponentRendered component={name} blok={props} key={props._uid} />
                  )
                }
              )}

              <DisplayRelated related={content.related} />
          </Col>

          <Col sm={2} className="contentRight thisRight">
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
  </SbEditable>
  )
}

export default Main