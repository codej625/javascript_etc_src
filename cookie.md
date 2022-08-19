
    ```javascript
    // cookie save
    let setCookie = (key, value, exp) => {
        let date = new Date();
        date.setTime(date.getTime() + exp*24*60*60*1000);
        document.cookie = key + '=' + escape(value) + ';expires=' + date.toUTCString() + ';path=/';
        data.toGMTString();
    };
    // cookie load
    let getCookie = (key) => {
        key = new RegExp(key + '=([^;]*)');
        return key.test(document.cookie) ? unescape(RegExp.$1) : '';
    };
    // cookie delete
    let deleteCookie = (key) => {
        let date = new Date();
        document.cookie = key + "=; path=/; expires=" + date.toUTCString() + ";"
        
    }
    // cookie check
    let cookieChk = (key) => {
        return getCookie(key) != '' ? true : false;
    }
    ```