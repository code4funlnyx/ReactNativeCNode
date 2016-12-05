/**
 * Created by lvdawei on 2016/12/3.
 */
import Ajax from '../util/Ajax';
import config from '../../config';

let MessageLogic = {
    doCountUnreadMsg:(accesstoken)=>{
        return Ajax.get(`${config.host}/message/count`,{accesstoken})
    },
    doGetAllMsg:(accesstoken,mdrender)=>{
        return Ajax.get(`${config.host}/messages`,{accesstoken,mdrender})
    },
    doMarkAllRead:(accesstoken)=>{
        return Ajax.get(`${config.host}/message/mark_all`,{accesstoken})
    }
};

module.exports = MessageLogic;