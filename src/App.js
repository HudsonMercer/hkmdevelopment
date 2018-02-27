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
import AboutView from './components/views/AboutView'
import WorkView from './components/views/WorkView'
import ContactView from './components/views/ContactView'

const HeaderContainer = () => {
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
              <Link to="/about">
                <Menu.Item>
                  Aboot
                </Menu.Item>
              </Link>

              <Link to="/work">
                <Menu.Item>
                  Work
                </Menu.Item>
              </Link>

              <Menu.Item>
                Projects
              </Menu.Item>

              <Link to="/contact">
                <Menu.Item position="right">
                  Contact
                </Menu.Item>
              </Link>
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

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {HeaderContainer()}
          <Route path="/about" component={AboutView}/>
          <Route path="/work" component={WorkView}/>
          <Route path="/contact" component={ContactView}/>
        </div>

      </Router>
    )
  }
}
