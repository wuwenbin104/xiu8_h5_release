var HttpRequest={Get(e,t,o,n,a){null!=t&&(t.id=MemberInfo.id),o&&(HttpRequest.CallBackMap[o]=cc.director.getScene());var s=new XMLHttpRequest;s.onreadystatechange=function(){4==s.readyState&&s.status>=200&&s.status<400&&(null!=a&&0!=a||UITools.hideWaiting(),o&&(HttpRequest.CallBackMap[o]==cc.director.getScene()?(o(s.responseText),delete HttpRequest.CallBackMap[o]):cc.log("====\u573a\u666f\u5df2\u5207\u6362\uff0c\u4e0d\u56de\u8c03=url=",e)))},s.ontimeout=function(){UITools.hideWaiting(),n&&n("ontimeout")},s.onerror=function(){UITools.hideWaiting(),n&&n("XMLHttpRequestEventTarget.onerror")},s.timeout=1e4,e+="?";for(let r in t)e+=r+"="+encodeURIComponent(t[r])+"&";e=e.substring(0,e.length-1),cc.log("get url="+e),s.open("GET",e,!0),s.send()},Post(e,t,o,n,a){t.id=MemberInfo.id;var s=new XMLHttpRequest;s.onreadystatechange=function(){(cc.log("====xhr.status=",s.status),4==s.readyState&&s.status>=200&&s.status<400)&&(UITools.hideWaiting(),o&&(o(s.responseText),HttpRequest.CallBackMap[o]==cc.director.getScene()?(o(s.responseText),delete HttpRequest.CallBackMap[o]):cc.log("====\u573a\u666f\u5df2\u5207\u6362\uff0c\u4e0d\u56de\u8c03")))},s.ontimeout=function(){cc.log("ontimeout"),UITools.hideWaiting(),n&&n("ontimeout")},s.onerror=function(){cc.log("onerror"),UITools.hideWaiting(),n&&n("XMLHttpRequestEventTarget.onerror")},s.timeout=1e4;let r="";for(let l in t)r+=1!=a?l+"="+encodeURIComponent(t[l])+"&":l+"="+t[l]+"&";cc.log("POST url="+e),cc.log("=length=====HttpRequest="),r=r.substring(0,r.length-1),console.log("POST:url=",e,"params:",r),s.open("POST",e,!0),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.send(r)},OpenUrl(e,t){t.id=MemberInfo.id,e+="?";for(let o in t)e+=o+"="+encodeURIComponent(t[o])+"&";e=e.substring(0,e.length-1),cc.sys.openURL(e)},GetShareUrl(e,t){let o=cc.sys.localStorage.getItem("share_"+e);if(cc.log("====rsp1=",e),null==o){let o={code:"28652140235026",key:"6180b45ab2b7ab1975bb839bf9b97e88","params[name]":"xiuxiu"};o["params[age]"]=e,HttpRequest.Post("http://openshare.nongwanga.cn/api/params/create",o,o=>{let n=JSON.parse(o),a={};2==AreaCode?a.url="http://zx.mesecreative.net/lsj/index.html?sp="+n.data+"&p_id="+e:a.url="http://zx.mesecreative.net/xiuxiu/index.html?sp="+n.data+"&p_id="+e,a.mark="xiuxiu",HttpRequest.Post("https://45dwz.cn/apicreate.php?token=yzuF1hmu3CTFMu1r8jm1ww9JfH5EtJN8",a,o=>{let n=JSON.parse(o);if("1000"==n.code){cc.log("====rsp2=",o);let a=n.shortUrl;cc.sys.localStorage.setItem("share_"+e,a),t(a)}})})}else cc.log("====rsp2=",o),t(o)},CallBackMap:{}};