import React, {Component} from "react"
import {View , Text , TextInput , Image , Button , ActivityIndicator , ScrollView } from 'react-native'

// Router  HashRouter
// Stack 分组的容器，不表示具体的路由，专门用来路由分组
// Scene 表示一个具体的路由规则
// import {Router , Stack} from 'react-native-router-flux'
import TabNavigator from 'react-native-tab-navigator'
import Home from './home/home'
import MyIndexPage from './my'
import musicPlayInfo from './home/musicPlayInfo';

export default class HomePage extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            selectedTitleStyle={{color: '#66D09C'}}
            renderIcon={() => <Image source={require('../static/tarbar/music.png')} style={{width: 20 , height: 20}} />}
            renderSelectedIcon={() => <Image source={require('../static/tarbar/music-selected.png')} style={{width: 20 , height: 20}} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}
          >
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title="我的"
            selectedTitleStyle={{color: '#66D09C'}}
            renderIcon={() => <Image source={require('../static/tarbar/my.png')} style={{width: 20 , height: 20}} />}
            renderSelectedIcon={() => <Image source={require('../static/tarbar/my-selected.png')} style={{width: 20 , height: 20}} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'my' })}
          >
            <MyIndexPage />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}
