(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2118b4ab"],{1511:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"user"},[s("div",{staticClass:"top"},[s("div",{staticClass:"back-warpper"},[s("i",{staticClass:"iconfont icon-zuojiantou back-i",on:{click:t.back}})]),s("div",{staticClass:"switch"},[s("div",{staticClass:"switch-item",class:{active:"mylikeSongs"===t.selected},on:{click:function(e){return t.switchItem("mylikeSongs")}}},[t._v("我喜欢的")]),s("div",{staticClass:"switch-item",class:{active:"playHistory"===t.selected},on:{click:function(e){return t.switchItem("playHistory")}}},[t._v("最近听的")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"mylikeSongs"===t.selected,expression:"selected==='mylikeSongs'"}],staticClass:"container-item"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.mylikeSongs.length,expression:"!mylikeSongs.length"}],staticClass:"empty"},[s("i",{staticClass:"iconfont icon-jiarugedan"}),s("p",[t._v("没有收藏的歌曲")]),s("p",[t._v("你可以挑一些喜欢的单曲添加到这里")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mylikeSongs.length,expression:"mylikeSongs.length"}],staticClass:"play-btn",on:{click:function(e){return t.randomPlay(t.mylikeSongs,"mylikeSongs")}}},[s("i",{staticClass:"iconfont icon-play_icon"}),s("span",[t._v("随机播放全部")])]),s("ul",{staticClass:"list"},t._l(t.mylikeSongs,function(e,i){return s("li",{key:i,staticClass:"item",on:{click:function(e){return t.selectItem(t.mylikeSongs,i,"mylikeSongs")}}},[s("h3",{class:t.active(e,"mylikeSongs"),domProps:{innerHTML:t._s(e.songname)}}),s("p",{class:t.active(e,"mylikeSongs"),domProps:{innerHTML:t._s(e.singername+"·"+e.albumname)}}),s("span",{on:{click:function(s){return s.stopPropagation(),t._removeItem("mylikeSongs",e,i)}}},[t._v("×")])])}),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mylikeSongs.length>=7,expression:"mylikeSongs.length>=7"}],staticClass:"clearlist",on:{click:function(e){return t.clear("mylikeSongs")}}},[s("i",{staticClass:"iconfont icon-lajitong1"}),t._v(" 清空列表\n\t\t\t")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"playHistory"===t.selected,expression:"selected==='playHistory'"}],staticClass:"container-item"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.playHistory.length,expression:"!playHistory.length"}],staticClass:"empty"},[s("i",{staticClass:"iconfont icon-yinyue"}),s("p",[t._v("没有播放记录")]),s("p",[t._v("这里会自动记录您最近听过的200首歌曲")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.playHistory.length,expression:"playHistory.length"}],staticClass:"play-btn",on:{click:function(e){return t.randomPlay(t.playHistory,"playHistory")}}},[s("i",{staticClass:"iconfont icon-play_icon"}),s("span",[t._v("随机播放全部")])]),s("ul",{staticClass:"list"},t._l(t.playHistory,function(e,i){return s("li",{key:i,staticClass:"item",on:{click:function(e){return t.selectItem(t.playHistory,i,"playHistory")}}},[s("h3",{class:t.active(e,"playHistory"),domProps:{innerHTML:t._s(e.songname)}}),s("p",{class:t.active(e,"playHistory"),domProps:{innerHTML:t._s(e.singername+"·"+e.albumname)}}),s("span",{on:{click:function(s){return s.stopPropagation(),t._removeItem("playHistory",e,i)}}},[t._v("×")])])}),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.playHistory.length>=7,expression:"playHistory.length>=7"}],staticClass:"clearlist",on:{click:function(e){return t.clear("playHistory")}}},[s("i",{staticClass:"iconfont icon-lajitong1"}),t._v(" 清空列表\n\t\t\t")])])])])},n=[],a=(s("20d6"),s("cebc")),o=(s("cadf"),s("551c"),s("f751"),s("097d"),s("2f62")),l=s("76a0"),c={data:function(){return{selected:"mylikeSongs"}},computed:Object(a["a"])({},Object(o["e"])(["mylikeSongs","playHistory","playlist","mode","other"]),Object(o["c"])(["currentSong"])),methods:Object(a["a"])({},Object(o["d"])(["clearList","removeItem","setModeState","setPlayingState","setCurrentIndex","setPlaylist","setOther"]),Object(o["b"])(["selectPlay"]),{back:function(){this.$router.go(-1)},switchItem:function(t){this.selected=t},clear:function(t){var e=this;l["MessageBox"].confirm("确定清空列表吗？").then(function(){e.clearList(t),t===e.other.user&&e.setPlayingState(!1)},function(){})},selectItem:function(t,e,s){this.setOther({user:s}),this.selectPlay({list:t,index:e})},randomPlay:function(t,e){this.setOther({user:e});var s=Math.floor(Math.random()*t.length);this.setModeState(2),this.selectPlay({list:t,index:s})},active:function(t,e){if(t.id===this.currentSong.id&&e===this.other.user)return"play-song"},_removeItem:function(t,e,s){if(this.setPlayingState(!0),t==this.other.user){var i=this.currentSong;this.removeItem({key:t,index:s}),this.setPlaylist(this[t]),e.id!=i.id&&this.resetCurrentIndex(this.playlist,i),this[t].length||this.setPlayingState(!1)}else this.removeItem({key:t,index:s})},resetCurrentIndex:function(t,e){var s=t.findIndex(function(t){return t.id===e.id});this.setCurrentIndex(s)}})},r=c,y=(s("c2d4"),s("2877")),m=Object(y["a"])(r,i,n,!1,null,"2d093c58",null);e["default"]=m.exports},9714:function(t,e,s){},c2d4:function(t,e,s){"use strict";var i=s("9714"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-2118b4ab.2eeabadc.js.map