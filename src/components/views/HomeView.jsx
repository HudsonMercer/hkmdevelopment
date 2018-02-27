import React, { Component } from 'react'
import {
  Segment,
  Container,
  Divider,
  Label,
} from 'semantic-ui-react'

export default class HomeView extends Component{
  render(){
    return(
      <Container Text>
        <Segment>
          <Label ribbon color="blue" content="Ribbons are cool"/>
          test3
          test
          <Divider content="Some Booleans"/>
          This really isn't working how I had imagined it...
          This is the home Page.
        </Segment>
      </Container>
    )
  }
}
