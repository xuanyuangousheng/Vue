(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16c802da"],{"2d3b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"serach"},[i("div",{ref:"searchBar",staticClass:"search-bar"},[i("div",{staticClass:"input-warp"},[i("i",{staticClass:"iconfont icon-sousuo"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"搜索歌曲、歌单、专辑"},domProps:{value:t.value},on:{focus:function(e){return t.toggleShow(!0)},input:function(e){e.target.composing||(t.value=e.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"iconfont icon-chahao",on:{click:t.deleteValue}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"cancel-btn",on:{click:function(e){return t.toggleShow(!1)}}},[t._v("取消")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"hot-keys"},[i("h3",[t._v("热门搜索")]),i("ul",t._l(t.hotlist,function(e,s){return i("li",{key:s,on:{click:function(i){return t.selectHotKey(e.k)}}},[i("span",[t._v(t._s(e.k))])])}),0)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"focus-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!value"}],staticClass:"search-history"},[i("ul",[t._l(t.searchHistory,function(e,s){return i("li",{key:s,staticClass:"history",on:{click:function(i){t.value=e}}},[i("i",{staticClass:"iconfont icon-lishiyouxibitongjiweijihuo"}),i("span",[t._v(t._s(e))]),i("span",{staticClass:"cha",on:{click:function(e){return e.stopPropagation(),t.removeItem({key:"searchHistory",index:s})}}},[t._v("×")])])}),i("li",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"clearlist"},[i("i",{staticClass:"iconfont icon-lajitong1"}),t._v(" \n\t\t\t\t\t"),i("span",{on:{click:function(e){return t.clearList("searchHistory")}}},[t._v("清空搜索记录")])])],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],ref:"suggestion",staticClass:"search-suggestion"},[i("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded},on:{"bottom-status-change":t.test}},[i("ul",[t._l(t.suggestionList,function(e,s){return i("li",{key:s,on:{click:function(i){return t.addSearchHistory(e,e.type)}}},[i("div",{staticClass:"media-icon"},[i("i",{staticClass:"iconfont icon-yinle1"})]),i("div",{staticClass:"media-text"},[i("h3",{domProps:{innerHTML:t._s(t.getContent(e,"h3"))}}),i("p",{domProps:{innerHTML:t._s(t.getContent(e,"p"))}})])])}),i("li",{directives:[{name:"show",rawName:"v-show",value:t.allLoaded&&t.suggestionList.length,expression:"allLoaded&&suggestionList.length"}],staticClass:"allLoaded"},[t._v("已加载全部")])],2)])],1)])])},n=[],a=(i("20d6"),i("5176")),o=i.n(a),r=(i("ac6a"),i("cebc")),c=i("582e");function l(){var t="https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",e={uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1};return Object(c["a"])(t,e,{param:"jsonpCallback"})}function u(t,e){var i="https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w=".concat(t),s={uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,w:t,zhidaqu:1,catZhida:1,t:0,flag:1,ie:"utf-8",sem:1,aggr:0,perpage:20,n:20,p:e,remoteplace:"txt.mqq.all"};return Object(c["a"])(i,s,{param:"jsonpCallback"})}var h=i("8dd1"),d=i("2f62"),g={data:function(){return{hotlist:[],value:"",isShow:!1,suggestionList:[],pageNum:1,allLoaded:!1}},created:function(){this._getHotKey()},mounted:function(){this.getHeight()},computed:Object(r["a"])({},Object(d["e"])(["searchHistory","playlist","sequencelist","currentIndex","fullScreen"]),Object(d["c"])(["currentSong"])),watch:{value:function(){var t=this;this.pageNum=1,u(this.value,1).then(function(e){var i=e.data;console.log(i),t.suggestionList=[],i.song.list.forEach(function(e){var i={type:0};o()(i,Object(h["a"])(e)),t.suggestionList.push(i)})})}},methods:Object(r["a"])({},Object(d["d"])(["addItem","removeItem","clearList","setFullScreenState","addItemPosition","setCurrentIndex","setPlayingState"]),Object(d["b"])(["selectPlay"]),{_getHotKey:function(){var t=this;l().then(function(e){for(var i=0;i<10;i++)t.hotlist.push(e.data.hotkey[i])})},deleteValue:function(){this.value=""},toggleShow:function(t){this.isShow=t},loadBottom:function(){var t=this;u(this.value,this.pageNum++).then(function(e){var i=e.data;if(!i.song.list.length)return t.allLoaded=!0,void(t.$refs.suggestion.style.paddingBottom="80px");i.song.list.forEach(function(e){var i={type:0};o()(i,Object(h["a"])(e)),t.suggestionList.push(i)})})},getHeight:function(){var t=window.innerHeight,e=this.$refs.searchBar.clientHeight,i=t-e-84+"px";this.$refs.suggestion.style.height=i},getContent:function(t,e){switch(t.type){case 3:return"h3"===e?t.albumname:t.singername;default:return"h3"===e?t.songname:t.singername}},addSearchHistory:function(t,e){var i=this,s=this.searchHistory.findIndex(function(t){return t===i.value});switch(-1===s&&this.addItem({key:"searchHistory",song:this.value}),e){case 2:this.$router.push("/singerlist/singer/"+t.singermid);break;case 3:this.$router.push("/album/"+t.albummid);break;default:if(this.sequencelist.length){var n=this.playlist.findIndex(function(t){return t.id===i.currentSong.id});this.addItemPosition({key:"playlist",song:t,index:n+1}),this.setCurrentIndex(n+1),this.setPlayingState(!0),this.setFullScreenState(!0)}else{var a=[];a.push(t),this.selectPlay({list:a,index:0}),this.setFullScreenState(!0)}break}},selectHotKey:function(t){this.value=t,this.isShow=!0}})},m=g,f=(i("bb2a"),i("2877")),v=Object(f["a"])(m,s,n,!1,null,"bece5800",null);e["default"]=v.exports},"7afd":function(t,e,i){},"7f7f":function(t,e,i){var s=i("86cc").f,n=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in n||i("9e1e")&&s(n,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"8dd1":function(t,e,i){"use strict";i("7f7f"),i("ac6a");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",function(){return a});var n=function t(e){var i=e.id,n=e.mid,a=e.singername,o=e.songname,r=e.albumname,c=e.duration,l=e.img,u=e.url;s(this,t),this.id=i,this.mid=n,this.singername=a,this.songname=o,this.albumname=r,this.duration=c,this.img=l,this.url=u};function a(t){return new n({id:t.songid,mid:t.songmid,singername:o(t.singer),songname:t.songname,albumname:t.albumname,duration:t.interval,img:"https://y.gtimg.cn/music/photo_new/T002R300x300M000".concat(t.albummid,".jpg?max_age=2592000"),url:"http://ws.stream.qqmusic.qq.com/C100".concat(t.songmid,".m4a?fromtag=0&guid=126548448")})}function o(t){var e=[];return t?(t.forEach(function(t){e.push(t.name)}),e.join("/")):""}},ac6a:function(t,e,i){for(var s=i("cadf"),n=i("0d58"),a=i("2aba"),o=i("7726"),r=i("32e9"),c=i("84f2"),l=i("2b4c"),u=l("iterator"),h=l("toStringTag"),d=c.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=n(g),f=0;f<m.length;f++){var v,p=m[f],w=g[p],y=o[p],b=y&&y.prototype;if(b&&(b[u]||r(b,u,d),b[h]||r(b,h,p),c[p]=d,w))for(v in s)b[v]||a(b,v,s[v],!0)}},bb2a:function(t,e,i){"use strict";var s=i("7afd"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-16c802da.0af9827c.js.map