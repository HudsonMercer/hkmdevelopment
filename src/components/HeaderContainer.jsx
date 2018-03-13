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
    this.titleText = [
      'HKM Development',
      'Interwebs, on Demand',
      '"Obsolete Comments are Worse Than no Comments."',
      '"undefined and NaN are not Constants."',
      '"JavaScript is a Language With More Than its Share of Bad Parts."',
      '"Global Scope is Like a Public Toilet. You can’t avoid it, but try to limit your contact with surfaces when you use it."',
      '"Lets configure webpack-dev-server for fun." - Nobody',
      '"You should definitely use jQuery, it’s really great and does all things."',
      'NPM - No Particular Meaning',
      'Nobody Uses Titles Anymore',
      'The Difference Between Winners and Losers is Quitters.',
      'If You Know Exactly What to do, You aren’t Learning Anything.'
    ]
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
                content={this.titleText[Math.floor(Math.random()*this.titleText.length)]}
                inverted
                onClick={this.state.activeTab === '/' ? this.setActiveTab : null}
              />
            </Container>
          </Segment>
        </Visibility>
    )
  }
}
