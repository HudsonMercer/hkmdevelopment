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
import ProjectsView from './components/views/ProjectsView'
import HomeView from './components/views/HomeView'

class HeaderContainer extends Component{
  constructor(){
    super()
    this.state = {activeTab: 'home'}
  }

  setActiveTab =  (target) => {
    this.setState({
      ...this.state,
      activeTab: target
    })
  }

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
              <Link to="/about">
                <Menu.Item
                  content="About"
                  onClick={() => this.setActiveTab('about')}
                  active={this.state.activeTab === 'about' ? true : false}
                />
              </Link>

              <Link to="/work">
                <Menu.Item
                  content="Work"
                  onClick={() => this.setActiveTab('work')}
                  active={this.state.activeTab === 'work' ? true : false}
                />
              </Link>

              <Link to="/projects">
                <Menu.Item
                  content="Projects"
                  onClick={() => this.setActiveTab('projects')}
                  active={this.state.activeTab === 'projects' ? true : false}
                />
              </Link>

              <Link to="/contact" position="right">
                <Menu.Item
                  content="Contact"
                  onClick={() => this.setActiveTab('contact')}
                  active={this.state.activeTab === 'contact' ? true : false}
                  floated="right"
                />
              </Link>
            </Menu>
          </Container>
          <Link to="/">
            <Header
              as="h1"
              content="HKM Dev"
              inverted
              onClick={() => this.setActiveTab('home')}
            />
          </Link>
        </Segment>
      </Container>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderContainer/>
          <Route path="/about" component={AboutView}/>
          <Route path="/work" component={WorkView}/>
          <Route path="/projects" component={ProjectsView}/>
          <Route path="/contact" component={ContactView}/>
          <Route exact path="/" component={HomeView}/>
        </div>

      </Router>
    )
  }
}
