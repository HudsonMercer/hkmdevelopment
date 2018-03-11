import React, { Component } from 'react'
import {
  Container,
  Button,
  Segment,
  Divider,
} from 'semantic-ui-react'

export default class ContactView extends Component{
  constructor(){
    super()
    this.state={phone: "PHONE"}
  }

  getPhoneNumber = () => {
    let a = "20" + 8 + "-" + "9"
    let b = 64 + "-44" + 10
    this.setState({...this.state, phone: a+b})
  }

  openGitHub = () => {
    window.open('https://github.com/Lou-Saydus')
  }

  tryEmail = () => {
    window.location.href = "mailto:brandon.grissom89@gmail.com?subject=FreeJob&body=Message"
  }

  render(){
    return(
      <Container id="contact">
        <Divider section horizontal>
          Contact Information
        </Divider>
        <Segment>

          <Button
            color="red"
            content={this.state.phone}
            onClick={this.getPhoneNumber}
          />

          <Button
            color="blue"
            content="EMAIL"
            onClick={this.tryEmail}
          />

          <Button
            color="green"
            floated="right"
            content="GIT HUB"
            onClick={this.openGitHub}
          />

        </Segment>
      </Container>
    )
  }
}
