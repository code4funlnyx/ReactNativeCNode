/**
 * Created by lvdawei on 2017/2/13.
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, Image, ListView, View, TouchableOpacity} from 'react-native';
// import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import TopicLogic from '../logic/TopicLogic';
import moment from 'moment';
import locale_zh_cn from "moment/locale/zh-cn";
moment.locale("zh-cn", locale_zh_cn);


export default class TopicPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            topic: {}
        }
    }

    componentWillMount() {
        TopicLogic.doGetTopic('58a0683c792e42336f489ac3').then((res) => {
            if (res.success) {
                alert('success');
                this.setState({
                    loading: false,
                    topic: res.data,
                });
                console.log(this.state.loading);
            } else {
                alert(JSON.stringify(res))
            }
        })
    }

    static timeFormat(date) {
        return moment(date, moment.ISO_8601).startOf('day').fromNow()
    }

    loadingView() {
        return (
            <View>
                <Text>loading1</Text>
            </View>
        )
    }

    mainView() {
        return (
            <View style={{flex: 1, flexDirection:'row'}}>
                <Text>{JSON.stringify(this.state.topic)}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:20,backgroundColor:'#80bd01'}}></View>
                <View style={{flexDirection:'row',backgroundColor:'#80bd01',height:50}}>
                    <View style={{width:50,alignItems:'center',justifyContent:'center'}}>
                        <Icon name="angle-left" size={24} color="#fff" />
                    </View>
                    <View style={{flex: 1,justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:16,textAlign:'center'}}>详情</Text>
                    </View>
                    <View style={{width:50,alignItems:'center',justifyContent:'center'}}>

                    </View>
                </View>
                {this.state.loading ? this.loadingView() : this.mainView() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headNav: {
        flexDirection: 'row',
        height: 58,
        backgroundColor: '#80bd01',
        alignItems: 'center',
        paddingTop: 20
    },
    headNavItem: {
        flex: 1,
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
    title: {
        flexDirection: 'row',
        flex: 1,
        // alignItems: 'center',
    },
    titleText: {
        flex: 1
    },
    tag: {
        justifyContent: 'center',
        alignItems: 'center',
        // height: 28,
        borderRadius: 3,
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginRight: 5,
        width: 36
    },
    tagText: {
        fontSize: 12

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

})