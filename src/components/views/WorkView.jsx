import React, { Component } from 'react'
import {
  Progress,
  Container,
  Divider,
  Segment,
} from 'semantic-ui-react'

export default class WorkView extends Component{
  render(){
    return(
      <Container id="work">
        <Divider horizontal>
          Work Experience
        </Divider>
        <Segment>
          <h1 style={{textAlign: 'center'}}>
            404 Experience Not Found.
          </h1>
          <Progress percent={5} indicating size="large"></Progress>
        </Segment>
      </Container>
    )
  }
}
