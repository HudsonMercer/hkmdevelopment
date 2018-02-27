import React, {Component} from 'react'
import './styles.css'
import {
  Container,
  Segment,
  Button,
  Header,
  Menu,
} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import RouteTest from './RouteTest'

class HeaderContainer extends Component {
  render(){
    return(
      <Container fluid>
        <Segment
          inverted
          vertical
          size="massive"
          textAlign="center"
        >
          <Container>
            <Menu
              fixed
              inverted
            >
              <Menu.Item>
                Aboot
              </Menu.Item>
              <Menu.Item>
                Work
              </Menu.Item>
              <Menu.Item>
                Projects
              </Menu.Item>
              <Menu.Item position="right">
                Contact
              </Menu.Item>
            </Menu>
          </Container>
          <Header
            as="h1"
            content="HKM Development"
            inverted
          />

        </Segment>
      </Container>
    )
  }
}

export default class App extends Component {
  render() {
    return (
        <HeaderContainer/>
    )
  }
}
