import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookie'
import { logoutSubmit } from '../../redux/user.redux'

@connect(
  state=>state.user
)
class User extends React.component{
  constructor(propr){
    super(props)
    this.logout = this.logout.bind(this)
  }
  logout(){
    const alert = Modal.alert
    alert('注销', '确认退出吗？', [
      {text: '取消', onPress: ()=> console.log('cancel')},
      {text: '确认', onPress: ()=> {
        browserCookie.erase('userid')
        // window.location.href = window.location.href
        this.props.logoutSubmit()
      }},
    ])

  }

  render(){
    const props = this.props
    const Item = List.Item
    const Brief = Item.Brief

    return props.user?(
      {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
      <div>
        <Result
          img={<img src={require(`../img/${this.props.avatar}.png`)} alt='' style={{width:50px}}/>}
          title={props.user}
          message={props.type=='boss'?props.company:null}
        />
        <List renderHeader={()=>'简介'}>
          <Item
            multipleLine
            >
            {props.title}
            {this.props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
            {props.money?<Brief>薪资：{props.money}</Brief>:null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item>退出登录</Item>
        </List>
      </div>
    ):<Redirect to={this.props.redirectTo}/>
  }
}

export default User
