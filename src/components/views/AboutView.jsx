import React, { Component } from 'react'
import {
  Segment,
  Container,
  Divider,
} from 'semantic-ui-react'

export default class AboutView extends Component {
  render(){
    return(
      <Container id="about">
        <Divider content="About Me" as="h1" horizontal/>
        <Segment>
          Oh, hello. I'm a guy, I do nerd things with javascript and make interwebs.
        </Segment>
      </Container>
    )
  }
}
