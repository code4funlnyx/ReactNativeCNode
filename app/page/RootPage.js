/**
 * Created by lvdawei on 2016/12/6.
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet,   View ,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import moment from 'moment';
import locale_zh_cn from "moment/locale/zh-cn";
moment.locale("zh-cn", locale_zh_cn);




export default class RootPage extends Component {


    constructor(props) {
        super(props);
        this.state= {
            selectedTab:'11'
        }

    }




    render() {


        return (
            <View style={{flex:1}}>

                <TabNavigator barTintColor="white">

                    <TabNavigator.Item
                        renderIcon={() => <Icon name="home" size={24} color="#ccc" />}
                        renderSelectedIcon={() => <Icon name="home" size={24} color="#000" />}
                        title='首页'
                        selected={this.state.selectedTab == '11'}
                        onPress={() => this.setState({selectedTab: '11'})}
                        selectedTitleStyle={{color: 'blue'}}
                    >
                        <HomePage navigator={this.props.navigator} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title='发表'
                        renderIcon={() => <Icon name="paper-plane-o" size={22} color="#ccc" />}
                        renderSelectedIcon={() => <Icon name="paper-plane-o" size={22} color="#000" />}
                        selected={this.state.selectedTab === '22'}
                        onPress={() => this.setState({selectedTab: '22'})}
                        selectedTitleStyle={{color: 'blue'}}
                    >
                        <View><Text>111</Text></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title='消息'
                        renderIcon={() => <Icon name="comments-o" size={24} color="#ccc" />}
                        renderSelectedIcon={() => <Icon name="comments-o" size={24} color="#000" />}
                        selected={this.state.selectedTab === '33'}
                        onPress={() => this.setState({selectedTab: '33'})}
                        selectedTitleStyle={{color: 'blue'}}
                    >
                        <View><Text>222</Text></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title='我的'
                        renderIcon={() => <Icon name="user-o" size={24} color="#ccc" />}
                        renderSelectedIcon={() => <Icon name="user-o" size={24} color="#000" />}
                        selected={this.state.selectedTab === '44'}
                        onPress={() => this.setState({selectedTab: '44'})}
                        selectedTitleStyle={{color: 'blue'}}
                    >
                        <LoginPage navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )


    }
}


const styles = StyleSheet.create({
        headNav: {flexDirection: 'row', height: 58, backgroundColor: '#80bd01', alignItems: 'center', paddingTop: 20},
        headNavItem: {
            flex: 1,
            // borderColor:'#fff',
            // borderWidth:1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 28,
            borderRadius: 8,
            marginHorizontal: 10,
            marginVertical: 5
        },
        headNavDivider: {
            height: 18,
            borderLeftWidth: 1,
            borderLeftColor: '#5e8a01',
            borderRightWidth: 1,
            borderRightColor: '#a2f001'
        },
        headNavText: {
            color: '#fff'
        },
        headNavTouched: {
            backgroundColor: '#5e8a01'
        },

        title:{
            flexDirection:'row',
            flex:1,
            // alignItems: 'center',
        },

        titleText:{
            flex:1
        },

        tag: {
            justifyContent: 'center',
            alignItems: 'center',
            // height: 28,
            borderRadius: 3,
            paddingHorizontal: 4,
            paddingVertical: 2,
            marginRight:5,
            width:36
        },

        tagText:{
            fontSize:12

        },

        tagTop: {
            backgroundColor: '#80bd01',
        },

        tagTopText: {
            color: '#fff',
        },

        tagGood: {
            backgroundColor: '#80bd01',
        },

        tagGoodText: {
            color: '#fff',
        },

        tagShare: {
            backgroundColor: '#e5e5e5',
        },
        tagShareText: {
            color: '#999'
        },

        tagJob: {
            backgroundColor: '#e5e5e5',
        },
        tagJobText: {
            color: '#999'
        },

        tagAsk: {
            backgroundColor: '#e5e5e5',
        },
        tagAskText: {
            color: '#999'
        },

        flexContainer: {
            // 容器需要添加direction才能变成让子元素flex
            flexDirection: 'row',
            borderColor:'#0f0',
            flex:1
        },
        cell: {
            flex: 1,
            height: 50,
            backgroundColor: '#aaaaaa'
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10
        },
        cellfixed: {
            height: 50,
            width: 80,
            backgroundColor: '#fefefe'
        }
    })