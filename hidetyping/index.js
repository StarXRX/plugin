(function(t){"use strict";var e={onLoad:function(){const{metro:n,utils:r}=vendetta,u=n.findByProps("startTyping");r.patcher.before(u,"startTyping",function(i){i.result=null})}};return t.default=e,Object.defineProperty(t,"__esModule",{value:!0}),t})({});
