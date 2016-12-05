/**
 * Created by lvdawei on 2016/12/3.
 */
import Ajax from '../util/Ajax';
import config from '../../config';

let ReplyLogic = {
    doAddReply: (topic_id, content, reply_id, accesstoken) => {
        return Ajax.post(`${config.host}/topic/${topic_id}`, {accesstoken, content, reply_id})
    },
    doUpReply: (reply_id,accesstoken) => {
        return Ajax.post(`${config.host}/reply/${reply_id}/ups`, {accesstoken})
    }
};

module.exports = ReplyLogic;