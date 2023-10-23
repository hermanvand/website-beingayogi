import styled from 'styled-components'
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { storyblokEditable } from '@storyblok/react'

const StyledContainer = styled(Container)`
  margin: 20px;
`

function LinkCard ({blok}) {
  //console.log(JSON.stringify({blok}))

  let url = blok.link.cached_url;
  if (! url.startsWith("https://")) {
    url = "/" + url;
  }

  return (
    <StyledContainer {...storyblokEditable(blok)}>
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
                        <Button className="notContentLink" variant="primary" href={url}>{blok.linktext}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default LinkCard