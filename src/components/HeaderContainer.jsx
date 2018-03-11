import React, {Component} from 'react'
import {
  Menu,
  Visibility,
  Segment,
  Header,
  Container,
} from 'semantic-ui-react'

export default class HeaderContainer extends Component{
  constructor(){
    super()
    this.state = {activeTab: 'top'}
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
            style={{marginBottom: '1rem'}}
          >
            <Container text>
              <Menu
                style={{backgroundColor: fixed ? 'white' : 'rgb(27, 28, 29)'}}
                inverted={!fixed}
                pointing
                secondary
                fixed={fixed ? 'top' : null}
              >
                <Menu.Item
                  name="top"
                  content="Top"
                  href="#top"
                  onClick={this.setActiveTab}
                  active={this.state.activeTab === 'top' ? true : false}
                />
                <Menu.Item
                  name="about"
                  content="About"
                  href="#about"
                  onClick={this.setActiveTab}
                  active={this.state.activeTab === 'about' ? true : false}
                />


                <Menu.Item
                  name="projects"
                  content="Projects"
                  href="#projects"
                  onClick={this.setActiveTab}
                  active={this.state.activeTab === 'projects' ? true : false}
                />

                <Menu.Item
                  name="work"
                  content="Work"
                  href="#work"
                  onClick={this.setActiveTab}
                  active={this.state.activeTab === 'work' ? true : false}
                />

                <Menu.Item
                  name="contact"
                  content="Contact"
                  href="#contact"
                  onClick={this.setActiveTab}
                  active={this.state.activeTab === 'contact' ? true : false}
                  floated="right"
                />

              </Menu>
              <Header
                content="BECAUSE THIS ROBOT LAND IS INSANE"
                inverted
              />
            </Container>
          </Segment>
        </Visibility>
    )
  }
}
