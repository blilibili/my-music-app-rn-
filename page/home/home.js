import React, {Component} from "react"
import {View , Text , TextInput , Image , Button , ActivityIndicator , ScrollView } from 'react-native'

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      musicList: [
        {
          name: 'what is Love' ,
          publishTime: '2020-03-05' ,
          specialName: 'what is Love' ,
          musicImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg',
          author: 'Twice'
        },
        {
          name: 'what is Love' ,
          publishTime: '2020-03-05' ,
          specialName: 'what is Love' ,
          musicImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg',
          author: 'Twice'
        },
        {
          name: 'what is Love' ,
          publishTime: '2020-03-05' ,
          specialName: 'what is Love' ,
          musicImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg',
          author: 'Twice'
        }
      ]
    }
  }

  render(){
    return (
      <ScrollView>
        <View>
          {this.state.musicList.map((v , k) => {
            return (
              <View style={{padding: 15,flexDirection: 'row' , flex: 1 , backgroundColor: 'white' , alignItems: 'center' , justifyContent: 'space-around'}}>
                <Image source={{uri: v.musicImg}}
                       style={{width: 50 , height: 50}}
                />
                <View>
                  <Text>音乐名: {v.name}</Text>
                  <Text>发布时间: {v.publishTime}</Text>
                </View>
                <View>
                  <Text>专辑名: {v.specialName}</Text>
                  <Text>作者: {v.author}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}
