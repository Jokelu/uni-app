
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"content{height:100%;overflow:auto}\n.",[1],"about{margin-top:10px;background:#fff;padding:15px 10px;box-sizing:border-box;text-indent:1em;letter-spacing:2px;font-size:16px}\n",],undefined,{path:"./pages/user/aboutme/aboutme.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/user/aboutme/aboutme.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      