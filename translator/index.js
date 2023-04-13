(function(a,n,e,f,s,r,p){"use strict";const{ScrollView:g,Text:V,TextInput:c,Platform:R}=e.ReactNative,{OS:h}=R,B=n.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default,i=n.findByProps("openLazy","hideActionSheet"),l=n.findByProps("push","pushLazy","pop"),y=n.findByProps("getRenderCloseButton"),{default:E,getRenderCloseButton:S}=y,C=n.findByName("Icon"),{FormRow:P}=p.Forms,u=e.stylesheet.createThemedStyleSheet({codeBlock:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,fontSize:12,backgroundColor:s.semanticColors.BACKGROUND_SECONDARY,color:s.semanticColors.TEXT_NORMAL,marginTop:10,borderRadius:3,padding:10}}),v=r.before("openLazy",i,function(L){const[O,T,k]=L;T==="MessageLongPressActionSheet"&&O.then(function(w){const A=r.after("default",w,function(_,N){e.React.useEffect(function(){return function(){A()}},[]);let[b,d]=N.props?.children?.props?.children?.props?.children,t=b?.props?.message??k?.message;if(!d||!t)return;t.content;const x=function(){return e.React.createElement(E,{initialRouteName:"RawPage",goBackOnBackPress:!0,screens:{RawPage:{title:"ViewRaw",headerLeft:S(function(){return l.pop()}),render:function(){const[D,m]=e.React.useState(t.content);return e.React.createElement(g,{style:{flex:1,marginHorizontal:13,marginVertical:10}},e.React.createElement(B,{text:"Save",color:"brand",size:"small",onPress:function(){const o={...t,content:D};console.log(o)}}),h=="ios"?e.React.createElement(c,{style:u.codeBlock,onChangeText:function(o){return t.content=o},defaultValue:t.content,multiline:!0}):e.React.createElement(c,{style:u.codeBlock,onChangeText:function(o){return t.content=o},defaultValue:t.content,multiline:!0}))}}}})};d.push(e.React.createElement(P,{label:"Edit Message",leading:e.React.createElement(C,{source:f.getAssetIDByName("ic_message_edit")}),onPress:function(){i.hideActionSheet(),l.push(x)}}))})})}),z=function(){return v()};return a.onUnload=z,a})({},vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.ui,vendetta.patcher,vendetta.ui.components);
