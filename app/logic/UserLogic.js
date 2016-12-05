/**
 * Created by lvdawei on 2016/12/3.
 */
import Ajax from '../util/Ajax';
import config from '../../config';


let UserLogic = {
    doGetUserInfo: (loginname) => {
        return Ajax.get(`${config.host}/user/${loginname}`)
    },
    doValidToken: (accesstoken) => {
        return Ajax.post(`${config.host}/accesstoken`, {accesstoken})
    }
};

module.exports = UserLogic;
