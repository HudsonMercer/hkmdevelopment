import React, { Component } from 'react'
import {
  Container,
  Divider,
  Segment,
  Button,
  Header,
  Menu,
  Visibility,
  Label,
  Image,
  Grid,
} from 'semantic-ui-react'
import image from '../../res/images/image.png'
import reactImg from '../../res/images/react.svg'
import reduxImg from '../../res/images/redux.svg'
import firebaseImg from '../../res/images/firebase.svg'
import sassImg from '../../res/images/sass.svg'
import jqueryImg from '../../res/images/jquery.svg'
import semanticImg from '../../res/images/semantic-ui.svg'

export default class ProjectsView extends Component{
  render(){
    return(
      <Container>
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header content='"Tic Tac Toe"'/>
                <Header.Subheader content="June, 28th, 2017"/>
                <br/>
                <Label
                  as="a"
                  href="https://jquery.com/"
                  target="_blank"
                  ribbon
                  color="green"
                  content="JQuery"
                />
                <br/> <br/>
                <Container text>
                  <Image src={image} size="small"/>
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Grid.Column width={12}>
                <Container text>
                  <p>First implementation of a javascript library. Namely, <a href="https://jquery.com/" target="_blank">JQuery</a>. This implementation is primative and makes little to no use of third party tooling such as babel, webpack, or NodeJS.</p>

                  <p>This version of the project was abandoned due to complexity and lack of proper state management however, it is in a mostly functional state. Shortly there after I moved to more standard approach to this task.</p>
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Container text>
                <Label color="green" image>
                  <img src={jqueryImg} alt="JQuery"/>
                  JQuery
                  <Label.Detail>Library</Label.Detail>
                </Label>
              </Container>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header content='"Tic Tac Toe - React"'/>
                <Header.Subheader content="Dec, 21st, 2017"/>
                <br/>
                <Label
                  as="a"
                  href="https://reactjs.org/"
                  target="_blank"
                  ribbon
                  color="blue"
                  content="React"
                />
                <br/> <br/>
                <Image src={image} size="small"/>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Grid.Column width={12}>
                <Container text>
                  <p>
                    A more mature implementation of the original idea, fully implemented and functional. This approach uses a number of frameworks and or libraries such as React, Material Web Components, and Redux.
                  </p>
                  <p>
                    This version of the Tic Tac Toe demonstration takes a more modern "app" approach. It fully implements real-time multiplayer via Google's <a href="https://firebase.google.com/" target="_blank">Firebase</a> platform, state management with <a href="https://redux.js.org/introduction" target="_blank">Redux</a> and front end interaction with Facebook's <a href="https://reactjs.org/" target="_blank">React</a> framework.
                  </p>
                  <p>
                    Styled with Google's Material UI guidelines it takes on a modern and stylish visual appearance most users are familiar with.
                  </p>
                </Container>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <Container text>
                  <Label color="blue" image>
                    <img src={reactImg} alt="React JS"/>
                    React
                    <Label.Detail>Framework</Label.Detail>
                  </Label>
                  <Label color="purple" image>
                    <img src={reduxImg} alt="Redux"/>
                    Redux
                    <Label.Detail>Library</Label.Detail>
                  </Label>
                  <Label color="yellow" image>
                    <img src={firebaseImg} alt="Firebase"/>
                    Firebase
                    <Label.Detail>Library</Label.Detail>
                  </Label>
                  <Label color="pink" image>
                    <img src={sassImg} alt="Sass Lang"/>
                    Sass
                    <Label.Detail>Language</Label.Detail>
                  </Label>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header content='"HKM Development"'/>
                <Header.Subheader content="Feb, 3rd, 2018"/>
                <br/>
                <Label
                  as="a"
                  href="https://reactjs.org/"
                  target="_blank"
                  ribbon
                  color="blue"
                  content="React"
                />
                <br/> <br/>
                <Image src={image} size="small"/>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Grid.Column width={12}>
                <Container text>
                  <p>
                    The very website you are visiting! Technology is amazing isn't it?
                  </p>
                  <p>
                    Used as a platform to track personal projects and demonstrate aptitude in designing, implementing, and deploying your every day web page. Primarily a static experience with swift and smooth interaction and loading.
                  </p>
                  <p>
                    Styled with Semantic UI it assumes a modern and stylish demeanor with a minimalist approach. Once again using React as the backbone of the website.
                  </p>
                </Container>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <Container text>
                  <Label color="blue" image>
                    <img src={reactImg} alt="React JS"/>
                    React
                    <Label.Detail>Framework</Label.Detail>
                  </Label>
                  <Label color="green" image>
                    <img src={semanticImg} alt="Semantic UI"/>
                    Semantic UI
                    <Label.Detail>Library</Label.Detail>
                  </Label>
                  <Label color="pink" image>
                    <img src={sassImg} alt="Sass Lang"/>
                    Sass
                    <Label.Detail>Language</Label.Detail>
                  </Label>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}
