
let ajax = {
    get: (url, params) => {
        let paramsArr = [];
        console.log(params)
        if (params) {
            for (let key in params) {
                paramsArr.push(key + "=" + params[key])
            }
            if (url.indexOf('?') == -1) {
                url += '?' + paramsArr.join("&")
            } else {
                url += '&' + paramsArr.join("&")
            }
        }
        return fetch(url).then((res) => res.json())
    },
    post: (url, params) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json())
    }
};

module.exports = ajax;

// ajax.get('baidu.com/add?1=1&2=2',{a:1,b:2})