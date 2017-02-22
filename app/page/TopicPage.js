/**
 * Created by lvdawei on 2017/2/13.
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, Image, ListView, View, TouchableOpacity,ScrollView} from 'react-native';
// import Markdown from 'react-native-simple-markdown'
// import Markdown from 'react-native-markdown'
// import HTMLView from 'react-native-htmlview'
// import HtmlRender from 'react-native-html-render'
import MyWebView from 'react-native-webview-autoheight'
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
        console.log('componentWillMount',this.props.id);
        TopicLogic.doGetTopic(this.props.id,true).then((res) => {
            if (res.success) {
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

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps',this.props.id);
        TopicLogic.doGetTopic(this.props.id,false).then((res) => {
            if (res.success) {
                this.setState({
                    loading: false,
                    topic: res.data,
                });
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
        let style ='<style>.markdown-text p,.preview p{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;line-height:2em;margin:1em 0}.markdown-text>:last-child,.preview>:last-child,textarea#title{margin-bottom:1em}.markdown-text>:first-child,.preview>:first-child{margin-top:0}.markdown-text li,.preview li{font-size:14px;line-height:2em}.markdown-text li code,.markdown-text p code,.preview li code,.preview p code{color:#000;background-color:#fcfafa;padding:4px 6px}.markdown-text img{cursor:pointer;max-width:100%}.markdown-text a{color:#08c}.preview{padding:.5em;font-size:15px;min-height:200px;word-break:break-all}.preview p>img{display:block;box-shadow:0 0 4px rgba(0,0,0,.6)}</style>'
        let html = this.state.topic.content.replace('"//','"http://');
        return (
            <View>
                <MyWebView source={{html: style+html}} />
            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:20,backgroundColor:'#80bd01'}}></View>
                <View style={{flexDirection:'row',backgroundColor:'#80bd01',height:50}}>
                    <TouchableOpacity onPress={()=>this.props.navigator.pop()} style={{width:50,alignItems:'center',justifyContent:'center'}}>
                        <Icon name="angle-left" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View style={{flex: 1,justifyContent:'center'}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:16,textAlign:'center'}}>详情</Text>
                    </View>
                    <View style={{width:50,alignItems:'center',justifyContent:'center'}}>

                    </View>
                </View>
                <ScrollView>
                    {this.state.loading ? this.loadingView() : this.mainView() }
                </ScrollView>
            </View>
        )
    }
}

const markdownStyles = {
    heading1: {
        fontSize: 24,
    },
    link: {
        color: '#03a9f4',
    },
    paragraph: {
        fontSize: 14,
    },
    a: {
        fontWeight: '300',
        color: '#FF3366', // pink links
    },
    img: {
        width: 100,
        height: 100
    }
}