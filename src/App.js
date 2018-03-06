import React, {Component} from 'react'
import './styles.css'
import {
  Container,
  Segment,
  Button,
  Header,
  Menu,
  Visibility,
} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
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

  setActiveTab =  (e, {name}) => {
    this.setState({
      ...this.state,
      activeTab: name
    })
  }

  setFixed =  () => {
    this.setState({
      ...this.state,
      fixed: true,
    })
  }

  setUnfixed = () => {
    this.setState({
      ...this.state,
      fixed: false,
    })
  }

  render(){
    const fixed = this.state.fixed
    return(

        <Visibility once={false} onBottomPassed={this.setFixed} onBottomPassedReverse={this.setUnfixed}>
          <Segment
            inverted
            vertical
            size="massive"
            textAlign="center"
          >
            <Menu
              style={{backgroundColor: fixed ? 'white' : 'rgb(27, 28, 29)'}}
              inverted={!fixed}
              fluid
              pointing
              secondary
              fixed={fixed ? 'top' : null}
            >
              <Menu.Item
                style={{display: fixed ? null : 'none'}}
                name="/"
                as={Link}
                to="/"
                content="Home"
                onClick={this.setActiveTab}
                active={this.state.activeTab === '/' ? true : false}
              />
              <Menu.Item
                name="about"
                as={Link}
                to="/about"
                content="About"
                onClick={this.setActiveTab}
                active={this.state.activeTab === 'about' ? true : false}
              />

              <Menu.Item
                name="work"
                as={Link}
                to="/work"
                content="Work"
                onClick={this.setActiveTab}
                active={this.state.activeTab === 'work' ? true : false}
              />

              <Menu.Item
                name="projects"
                as={Link}
                to="/projects"
                content="Projects"
                onClick={this.setActiveTab}
                active={this.state.activeTab === 'projects' ? true : false}
              />

              <Menu.Item
                name="contact"
                as={Link}
                to="/contact"
                content="Contact"
                onClick={this.setActiveTab}
                active={this.state.activeTab === 'contact' ? true : false}
                floated="right"
              />

            </Menu>
            <Link to="/">
              <Header
                content="BECAUSE THIS ROBOT LAND IS INSANE"
                inverted
                onClick={this.setActiveTab === '/' ? true : false}
              />
            </Link>
          </Segment>
        </Visibility>

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
          <Container fluid text textAlign="center">{Math.floor(new Date().getFullYear() +Math.random()*100)}©</Container>
        </div>
      </Router>
    )
  }
}
