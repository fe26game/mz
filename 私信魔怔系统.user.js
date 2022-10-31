// ==UserScript==
// @name         私信魔怔系统
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  None
// @author       Luxiuyuan2013
// @match        https://*.luogu.com.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=luogu.com.cn
// @grant        none
// ==/UserScript==

async function sendMessage(uid,content){
    await fetch("https://www.luogu.com.cn/api/chat/new", {
        headers: [
            ["content-type", "application/json"],
            ["referer", "https://www.luogu.com.cn/"],
            ["x-csrf-token", document.querySelector("meta[name=csrf-token]").content],
        ],
        body: JSON.stringify({
            user: uid,
            content: content,
        }),
        method: "POST",
    });
}

(function() {
    sendMessage(685826,"你好，陆修远！");
})();