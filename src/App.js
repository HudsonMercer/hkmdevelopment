import React, {Component} from 'react'
import './styles.css'
import {
  Container,
  Accordion,
  Divider,
} from 'semantic-ui-react'
import HomeView from './components/views/HomeView'
import HeaderContainer from './components/HeaderContainer'
import WorkView from './components/views/WorkView'
import ContactView from './components/views/ContactView'
import ProjectsView from './components/views/ProjectsView'


export default class App extends Component {


  render() {
    return (
        <div id="top">
          <HeaderContainer/>
          <HomeView/>
          <ProjectsView/>
          <WorkView/>
          <ContactView/>
          <Container fluid text textAlign="center">©{Math.floor(new Date().getFullYear() +Math.random()*100)}</Container>
          </div>
    )
  }
}
