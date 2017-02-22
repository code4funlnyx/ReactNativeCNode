/**
 * Created by lvdawei on 2016/12/6.
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, Image, ListView, View, TouchableOpacity} from 'react-native';
import TopicLogic from '../logic/TopicLogic';
import moment from 'moment';
import locale_zh_cn from "moment/locale/zh-cn";
import TopicPage from "./TopicPage";
moment.locale("zh-cn", locale_zh_cn);


export default class HomePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            navTab: "all",
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
            case 'job':
                return (
                    <View style={[styles.tag,styles.tagJob]}>
                        <Text style={[styles.tagJobText,styles.tagText]}>招聘</Text>
                    </View>
                );
        }
    }

    timeFormat(date) {
        return moment(date, moment.ISO_8601).startOf('day').fromNow()
    }


    go(page,id){
        this.props.navigator.push({
            component: TopicPage,
            params: {
                id: id
            }
        })
    }

    renderItem(rowData, sectionID, rowID, highlightRow) {

        return (
        <TouchableOpacity onPress={()=>this.go('Topic',rowData.id)}>
            <View style={{flex:1,flexDirection:'column' ,padding:10,borderBottomWidth:1,borderBottomColor:'#ddd'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    {this.topicTagView(rowData)}
                    <View style={styles.titleText}>
                        <Text numberOfLines={1} ellipsizeMode="tail">{rowData.title}</Text>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:5}}>
                    <View style={{justifyContent:'flex-end'}}>
                        <Image source={{uri: rowData.author.avatar_url}}
                               style={{width:36,height:36,resizeMode: 'cover',borderRadius:18,marginRight:10,}}/>
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
                                <Text
                                    style={{textAlign:'right',fontSize:12}}>{rowData.reply_count}/{rowData.visit_count}</Text>
                            </View>
                            <View>
                                <Text
                                    style={{textAlign:'right',fontSize:12}}>{this.timeFormat(rowData.last_reply_at)}</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </TouchableOpacity>
        )
    }

    loadingView() {
        return (
            <View>
                <Text>loading</Text>
            </View>
        )
    }

    mainView() {
        return (
            <View style={{flex: 1, flexDirection:'row'}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem.bind(this)}
                />
            </View>
        )
    }

    navView() {
        return (
            <View style={styles.headNav}>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.navTab=='all' && styles.headNavTouched]}
                                  onPress={()=>{this.setState({navTab:'all'})}}>
                    <View>
                        <Text style={styles.headNavText}>全部</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.headNavDivider}></View>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.navTab=="good" && styles.headNavTouched]}
                                  onPress={()=>{this.setState({navTab:'good'})}}>
                    <View>
                        <Text style={styles.headNavText}>精华</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.headNavDivider}></View>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.navTab=="share" && styles.headNavTouched]}
                                  onPress={()=>{this.setState({navTab:'share'})}}>
                    <View>
                        <Text style={styles.headNavText}>分享</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.headNavDivider}></View>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.navTab=="ask" && styles.headNavTouched]}
                                  onPress={()=>{this.setState({navTab:'ask'})}}>
                    <View>
                        <Text style={styles.headNavText}>问答</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.headNavDivider}></View>
                <TouchableOpacity activeOpacity={0.7}
                                  style={[styles.headNavItem , this.state.navTab=="job" && styles.headNavTouched]}
                                  onPress={()=>{this.setState({navTab:'job'})}}>
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