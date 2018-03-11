import React, { Component } from 'react'
import {
  Segment,
  Container,
  Divider,
  Label,
} from 'semantic-ui-react'

export default class HomeView extends Component{
  sampleText = () => (
    <div>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tincidunt nulla, eget fermentum nisl ultrices et. Duis accumsan odio nunc, ut malesuada elit mollis vitae. Vivamus interdum risus non turpis interdum, id molestie libero commodo. Aenean nec mi mi. Ut blandit blandit elit sed auctor. Mauris eleifend, lorem eu vestibulum feugiat, nibh libero tempor lacus, ut convallis arcu lacus eget enim. Donec commodo diam sed lectus scelerisque, id placerat est tincidunt. <br/><br/>

      Donec vel nunc rhoncus, tempor nisl semper, condimentum tellus. Sed eget leo eu mi imperdiet porta ac a arcu. Nulla quis augue posuere mi placerat vestibulum ut eu dolor. Vestibulum non neque sed turpis porttitor posuere. Curabitur lorem odio, rhoncus vitae dignissim ac, sollicitudin sit amet nisi. Vestibulum vitae mauris sit amet quam rutrum finibus. Fusce ullamcorper tristique dui, eget consequat arcu dapibus eget. Mauris laoreet turpis quis placerat dictum. Suspendisse scelerisque ultrices facilisis. Nullam eget luctus felis, id ultricies nisi. <br/><br/>

      Etiam bibendum, enim non finibus euismod, mauris lectus facilisis nisi, non finibus nibh lorem eget eros. Sed libero tortor, tempus ac accumsan in, placerat nec velit. Aenean dignissim libero dui, nec consequat elit dictum nec. Morbi dapibus sit amet sem eu vehicula. Integer diam sem, gravida ut dapibus sit amet, tempor eget dolor. Etiam ut sem faucibus, tincidunt turpis eu, sagittis nisl. Ut justo ligula, fringilla ut leo in, vulputate auctor nulla. Nam laoreet est vitae nunc ultrices, ut consequat tellus ultrices. Aenean auctor quam non est aliquet, ut congue lorem semper. <br/><br/>

      Sed imperdiet eros sit amet neque porttitor, quis lobortis ante dignissim. Sed ac neque nec quam finibus blandit. Nunc egestas felis at justo rhoncus, a feugiat justo eleifend. Etiam egestas posuere arcu vitae imperdiet. Sed in odio nulla. Vivamus consequat nisl ut eros laoreet imperdiet. Integer non metus tristique, congue massa eget, pretium risus. Quisque eget augue sodales, sollicitudin neque id, auctor velit. Aenean posuere dui consectetur iaculis sodales. <br/><br/>

      Nulla mi metus, hendrerit sed dapibus convallis, elementum eget lacus. Proin laoreet elit vel bibendum laoreet. Praesent ut viverra lacus. Aenean blandit velit ipsum, non lobortis velit lacinia euismod. Cras ex erat, lacinia sit amet nulla eu, tempor efficitur tortor. Nulla vitae erat eget tellus faucibus dictum eget in nisi. Vestibulum pretium ex id urna dapibus, pharetra feugiat quam commodo. Morbi vel lorem tempus, tincidunt ante ut, pellentesque justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet elementum tortor, sed semper diam sollicitudin at. Aenean ipsum magna, pellentesque in luctus in, tincidunt eu leo. Donec posuere enim nec dui commodo, vel dapibus dui elementum. Nam pharetra, nibh id porta cursus, est sapien lobortis orci, eu fermentum mauris turpis sit amet erat. Nam vel elementum justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br/><br/>
    </div>
  )

  render(){
    return(
      <div>
        <Container >
          <Segment>
            <Label ribbon color="blue" content="Ribbons are cool"/>
            test3
            test
            <Divider section content="Some Booleans"/>
            This really isn't working how I had imagined it...
            This is the home Page.
          </Segment>

          {this.sampleText()}
          <div>{this.sampleText()}</div>
          {this.sampleText()}
        </Container>
      </div>
    )
  }
}
