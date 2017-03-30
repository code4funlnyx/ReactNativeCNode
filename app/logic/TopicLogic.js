import Ajax from '../util/Ajax';
import config from '../../config';

let TopicLogic = {
    doGetTopics: (prarms) => {
        //page, tab, limit, mdrender
        return Ajax.get(`${config.host}/topics`, prarms)
    },
    doGetTopic: (id, mdrender, accesstoken) => {
        console.log(id, mdrender, accesstoken)
        return Ajax.get(`${config.host}/topic/${id}`, {mdrender, accesstoken})
    },
    doCreateTopic: (title, tab, content, accesstoken) => {
        return Ajax.post(`${config.host}/topics`, {title, tab, content, accesstoken})
    },
    doUpdateTopic: (topic_id, title, tab, content, accesstoken) => {
        return Ajax.post(`${config.host}/topics/update`, {topic_id, title, tab, content, accesstoken})
    },
    doCollectTopic: (topic_id, accesstoken) => {
        return Ajax.post(`${config.host}/topic_collect/collect`, {topic_id, accesstoken})
    },
    doDeleteCollectTopic: (topic_id, accesstoken) => {
        return Ajax.post(`${config.host}/topic_collect/de_collect`, {topic_id, accesstoken})
    },
    doGetUserCollectTopic: (loginname) => {
        return Ajax.get(`${config.host}/topic_collect/${loginname}`)
    }

};

module.exports = TopicLogic;