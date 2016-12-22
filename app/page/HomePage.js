/**
 * Created by lvdawei on 2016/12/6.
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, Image, ListView, View, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserLogic from '../logic/UserLogic';
import TopicLogic from '../logic/TopicLogic';
import moment from 'moment';
import locale_zh_cn from "moment/locale/zh-cn";
moment.locale("zh-cn", locale_zh_cn);




export default class HomePage extends Component {


    constructor(props) {
        super(props);
        // const ds = ;
        this.state = {
            touchState: {
                "0": false,
                "1": false,
                "2": false,
                "3": false,
                "4": false,
            },
            loading: true,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    }

    componentWillMount() {
        TopicLogic.doGetTopics().then((res) => {
            if (res.success) {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(res.data),
                    loading: false
                });
            } else {
                alert(JSON.stringify(res))
            }
        })
    }

    touchHeadNavItem = (index) => {
        let touchState = JSON.parse(JSON.stringify(this.state.touchState));
        for (let key in touchState) {
            if (!touchState[key]) {
                touchState[key] = {}
            }
            touchState[key].touched = (key == index);
        }

        this.setState({
            touchState: touchState
        })

    }

    topicTagView(item) {
        if (item.top) {
            return (
                <View style={[styles.tag,styles.tagTop]}>
                    <Text style={[styles.tagTopText,styles.tagText]}>置顶</Text>
                </View>
            )
        }
        if (item.good) {
            return (
                <View style={[styles.tag,styles.tagGood]}>
                    <Text style={[styles.tagGoodText,styles.tagText]}>精华</Text>
                </View>
            )
        }
        switch (item.tab) {
            case 'good':
                return (
                    <View style={[styles.tag,styles.tagGood]}>
                        <Text style={[styles.tagGoodText,styles.tagText]}>精华</Text>
                    </View>
                );
            case 'job':
                return (
                    <View style={[styles.tag,styles.tagJob]}>
                        <Text style={[styles.tagJobText,styles.tagText]}>招聘</Text>
                    </View>
                );
            case 'share':
                return (
                    <View style={[styles.tag,styles.tagShare]}>
                        <Text style={[styles.tagShareText,styles.tagText]}>分享</Text>
                    </View>
                );
            case 'ask':
                return (
                    <View style={[styles.tag,styles.tagAsk]}>
                        <Text style={[styles.tagAskText,styles.tagText]}>问答</Text>
                    </View>
                );
        }
    }

    timeFormat(date){
        return moment(date, moment.ISO_8601).startOf('day').fromNow()
    }

    renderItem(rowData, sectionID, rowID, highlightRow) {

        return (
            <View style={{flex:1,flexDirection:'column' ,padding:10,borderBottomWidth:1,borderBottomColor:'#ddd'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    {this.topicTagView(rowData)}
                    <View style={styles.titleText}>
                        <Text numberOfLines={1} ellipsizeMode="tail" >{rowData.title}</Text>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:5}}>
                    <View style={{justifyContent:'flex-end'}}>
                        <Image source={{uri: rowData.author.avatar_url}} style={{width:36,height:36,resizeMode: 'cover',borderRadius:18,marginRight:10,}}/>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
                            <View>
                                <Text style={{textAlign:'left',fontSize:12}}>{rowData.author.loginname}</Text>
                            </View>
                            <View>
                                <Text style={{textAlign:'left',fontSize:12}}>{this.timeFormat(rowData.create_at)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
                            <View>
                                <Text style={{textAlign:'right',fontSize:12}}>{rowData.reply_count}/{rowData.visit_count}</Text>
                            </View>
                            <View>
                                <Text style={{textAlign:'right',fontSize:12}}>{this.timeFormat(rowData.last_reply_at)}</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        )
    }

    renderLoadingView() {
        return (
            <View>
                <Text>loading，加载啊啊啊啊啊啊啊</Text>
            </View>
        )
    }


    navView() {
        return (
            <View style={styles.headNav}>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.touchState[0].touched && styles.headNavTouched]}
                                  onPress={()=>{this.touchHeadNavItem(0)}}>
                    <View>

                        <Text style={styles.headNavText}>全部</Text>

                    </View>
                </TouchableOpacity>
                <View style={styles.headNavDivider}></View>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.touchState[1].touched && styles.headNavTouched]}
                                  onPress={()=>{this.touchHeadNavItem(1)}}>
                    <View>

                        <Text style={styles.headNavText}>精华</Text>

                    </View>
                </TouchableOpacity>

                <View style={styles.headNavDivider}></View>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.touchState[2].touched && styles.headNavTouched]}
                                  onPress={()=>{this.touchHeadNavItem(2)}}>
                    <View>

                        <Text style={styles.headNavText}>分享</Text>

                    </View>
                </TouchableOpacity>
                <View style={styles.headNavDivider}></View>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.touchState[3].touched && styles.headNavTouched]}
                                  onPress={()=>{this.touchHeadNavItem(3)}}>
                    <View>

                        <Text style={styles.headNavText}>问答</Text>

                    </View>
                </TouchableOpacity>
                <View style={styles.headNavDivider}></View>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.touchState[4].touched && styles.headNavTouched]}
                                  onPress={()=>{this.touchHeadNavItem(4)}}>

                    <View>

                        <Text style={styles.headNavText}>招聘</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    render() {


        return (
            <View style={{flex:1}}>

                {this.navView()}

                {this.state.loading ? this.renderLoadingView() : (
                        <View style={{flex: 1, flexDirection:'row'}}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderItem.bind(this)}
                            />
                        </View>
                    )}


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