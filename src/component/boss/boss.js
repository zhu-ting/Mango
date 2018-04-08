import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'

@connect(
  state => state.chatuser,
  { getUserList }
)
class Boss extends React.Component{

  componentDidMount(){
    this.props.getUserList("genius")
  }

  render(){
    const Header = Card.Header
    const Body = Card.Body
    return (
      <WingBlank>
        {this.props.userList.map(v=>(
          v.avatar?<Card key={v._id}>
            <Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}></Header>
          </Card>: null
          <Body>
            {v.desc.split('\n').map(v=>(
              <div key={v}>{v}</div>
            ))}
          </Body>
        ))}
      </WingBlank>
    )
  }
}

export default Boss
