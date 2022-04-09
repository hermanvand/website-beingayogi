import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col, Button, Card } from "react-bootstrap"

const StyledContainer = styled(Container)`
  margin: 20px;
`

function LinkCard ({blok}) {
  //console.log(JSON.stringify({blok}))

  return (
    <SbEditable content={blok}>
        <StyledContainer>
            <Row>
                <Col>
                    <Card style={{ width: blok.widthpercentage+"%" }}>
                        <Card.Img variant="top" src={blok.image.filename} />
                        <Card.Body>
                            <Card.Title>{blok.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{blok.subtitle}</Card.Subtitle>
                            <Card.Text>
                            {blok.description}
                            </Card.Text>
                            <Button variant="primary" href={"/"+blok.link.cached_url}>{blok.linktext}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </StyledContainer>
    </SbEditable>
  )
}

export default LinkCard