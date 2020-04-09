// RN中只能使用js作为后缀名
import React, {Component} from "react"
// view 组件负责布局，类似div元素
import {View , Text , TextInput , Image , Button , ActivityIndicator , ScrollView } from 'react-native'


export default class Demo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  onChangeText(txt){
    console.log(txt)
    this.setState({
      value: txt
    })
  }


  render(){
    return (
      // 在RN中不能使用网页中的所有标签
      // 如果想要实现布局 rn 提供了view 组件实现布局
      // 在RN中所有的文本必须使用RN提供的text组件包裹 否则报错
      // RN 中主轴默认是纵向的
      <View>
        <ScrollView style={{width: '100%'}}>
          <ActivityIndicator color="red" />
          <Text>hello daniel</Text>
          <View style={{justifyContent: 'center' , alignItems: 'center'}}>
            <TextInput
              style={{  width:90+'%', height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => this.onChangeText(text)}
              value={this.state.value}
            />
          </View>

          {/* 引入网络图片，除了指定一个url路径外，还需要为这张图片设置宽高，否则不显示*/}
          <Image
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg'}}
            style={{width: 200 , height: 200}}
          />
          <Image
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg'}}
            style={{width: 200 , height: 200}}
          />
          <Image
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg'}}
            style={{width: 200 , height: 200}}
          />
          <Image
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg'}}
            style={{width: 200 , height: 200}}
          />
          <Image
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg'}}
            style={{width: 200 , height: 200}}
          />
          <Image
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586093644303&di=01aa11e5b87c18d1332c4a3d991bd36c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402205951_wlebf.thumb.700_0.jpg'}}
            style={{width: 200 , height: 200}}
          />


          <Button
            title="这是一个按钮"
            onPress={() => {console.warn('test')}}
          />
        </ScrollView>

      </View>
    )
  }
}
