/*
jQWidgets v3.9.1 (2015-Oct)
Copyright (c) 2011-2015 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxTextArea","",{});a.extend(a.jqx._jqxTextArea.prototype,{defineInstance:function(){var b=this;var c={disabled:false,filter:b._filter,sort:b._sort,highlight:b._highlight,dropDownWidth:null,renderer:b._renderer,opened:false,$popup:a("<ul></ul>"),source:[],roundedCorners:true,searchMode:"default",placeHolder:"",width:null,height:null,rtl:false,displayMember:"",valueMember:"",popupZIndex:20000,items:8,item:'<li><a href="#"></a></li>',minLength:1,maxLength:null,scrollBarSize:a.jqx.utilities.scrollBarSize,query:"",events:["change","select","open","close"]};a.extend(true,b,c)},createInstance:function(){var b=this;b.render();b.isInitialized=true},render:function(){var c=this,f=c.element.id;if(c.isInitialized===true){c.refresh();return}if(a.jqx.utilities.scrollBarSize!==15){c.scrollBarSize=a.jqx.utilities.scrollBarSize}var b=a('<div id="panelWrapper'+f+'" style="overflow: hidden; width: 100%; height: 100%; background-color: transparent; -webkit-appearance: none; outline: none; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;"></div>');var e=a('<div id="verticalScrollBar'+f+'" style="align: left; valign: top; left: 0px; top: 0px; position: absolute;"></div>');c._id=c.element.id;if(c.element.tagName.toLowerCase()==="div"){c._baseHost=c.host;c.host.append(b);b.append('<textarea id="area'+f+'" class="'+c.toThemeProperty("jqx-text-area-element")+'"></textarea>');b.append(e)}else{if(c.element.tagName.toLowerCase()==="textarea"){c._baseHost=a(c.element);c._baseHost.wrap("<div></div>");c._baseHost.wrap(b);c._baseHost.after(e);c.host=c._baseHost.parent().parent();c.host[0].style.cssText=c.element.style.cssText;c.element.style.cssText="";c._baseHost.addClass(c.toThemeProperty("jqx-text-area-element"))}}var d=c.host;c.wrapper=b;c.textarea=d.find("textarea");c._addClasses();if(!d.jqxButton){throw new Error("jqxTextArea: Missing reference to jqxbuttons.js.")}if(!d.jqxScrollBar){throw new Error("jqxTextArea: Missing reference to jqxscrollbar.js.")}if(null===c.width&&d[0].style&&null!==d[0].style.width){c.width=d[0].style.width}if(null===c.height&&d[0].style&&null!==d[0].style.height){c.height=d[0].style.height}c._setSize();c.vScrollBar=e;e.jqxScrollBar({vertical:true,width:15,height:"100%",max:c.height,theme:c.theme});if(a.trim(c.textarea.val())===""){c.textarea.val("")}c.textarea.attr("placeholder",c.placeHolder);if(c.maxLength!==null){c.textarea.attr("maxlength",c.maxLength)}if(a.jqx.browser.msie&&a.jqx.browser.version<10&&c.textarea.val()===""){c.textarea.val(c.placeHolder)}if((c.source instanceof Array&&c.source.length)||c.source._source||a.isFunction(c.source)){c._oldsource=c.source;c._updateSource();c._addPopupClasses();a.jqx.aria(c,"aria-haspopup",true)}c._arrange();c._addHandlers()},refresh:function(c){if(c!==true){var b=this;b._setSize();b._arrange();b._removeHandlers();b._addHandlers();if(b.opened===true){b.open()}}},_arrange:function(){var d=this;var e=d.textarea;var c=e[0].scrollHeight-e.height();var b=e[0].scrollHeight-e.height();if(b<0){b=0}d.vScrollBar.jqxScrollBar({max:b,value:e[0].scrollTop});if(c<5){e.width(d.host.width());d.vScrollBar.css("visibility","hidden")}else{e.width(d.host.width()-d.scrollBarSize);d.vScrollBar.css("visibility","visible");d._arrangeScrollbars(d.scrollBarSize)}},val:function(e){var d=this,c=d.textarea,f=c[0].value,b;if(a.jqx.browser.msie&&a.jqx.browser.version<10&&f===d.placeHolder){f=""}if(arguments.length===0||(typeof e==="object"&&a.isEmptyObject(e)===true)){if(d.displayMember!==""&&d.valueMember!==""&&d.selectedItem){if(f===""){return""}return d.selectedItem}return f}if(e&&e.label){if(d.selectedItem&&e.label===d.selectedItem.label&&e.value===d.selectedItem.value){return e.label}d.selectedItem={label:e.label,value:e.value};d.host.attr("data-value",e.value);d.host.attr("data-label",e.label);c[0].value=e.label;b=e.label}else{if(f===e){return e}c[0].value=e;d.host.attr("data-value",e);d.host.attr("data-label",e);b=e}d._arrange();d._raiseEvent("0");return b},focus:function(){this.textarea.focus()},selectAll:function(){var b=this.textarea;setTimeout(function(){if("selectionStart" in b[0]){b[0].focus();b[0].setSelectionRange(0,b[0].value.length)}else{var c=b[0].createTextRange();c.collapse(true);c.moveEnd("character",b[0].value.length);c.moveStart("character",0);c.select()}},10)},_arrangeScrollbars:function(b){var k=this;var d=k.host.width();var j=k.host.height();var i=k.vScrollBar;var h=i[0].style.visibility!=="hidden";var g=2;var f=2;i.width(b);i.height(parseInt(j,10)-g+"px");i.css({left:parseInt(d,10)-parseInt(b,10)-g-f+"px",top:"0px"});if(k.rtl){i.css({left:"0px"});var c=h?parseInt(b,10)+"px":0;if(k.textarea.children().css("direction")!=="rtl"){var e=false;if(a.jqx.browser.msie&&a.jqx.browser.version<8){e=true}if(!e){k.textarea.css("padding-left",c)}}}else{if(i.css("visibility")!=="hidden"){k.textarea.css("width",k.host.width()-k.vScrollBar.outerWidth())}}i.jqxScrollBar("refresh")},destroy:function(){var b=this;if(b.opened){b._removeItemHandlers()}b.$popup.remove();b.vScrollBar.jqxScrollBar("destroy");b._removeHandlers();b.host.remove()},propertyChangedHandler:function(b,c,e,d){if(b.isInitialized===undefined||b.isInitialized===false){return}if(d!==e){switch(c){case"theme":b.vScrollBar.jqxScrollBar({theme:b.theme});break;case"width":b.host.css("width",d);b._arrange();break;case"height":b.host.css("height",d);b._arrange();break;case"source":b._oldsource=d;b._updateSource();break;case"displayMember":case"valueMember":b.source=b._oldsource;b._updateSource();break;case"opened":if(d===true){b.open()}else{b.close()}break;case"maxLength":b.textarea.attr("maxlength",d);break;case"placeHolder":b.textarea.attr("placeholder",d);if(a.jqx.browser.msie&&a.jqx.browser.version<10&&b.textarea.val()===e){b.textarea.val(d)}break;case"scrollBarSize":b._arrange();break;case"dropDownWidth":b.$popup.width(d);break;case"roundedCorners":if(d===true){b.host.add(b.$popup).addClass(b.toThemeProperty("jqx-rc-all"))}else{b.host.add(b.$popup).removeClass(b.toThemeProperty("jqx-rc-all"))}break;case"disabled":b.vScrollBar.jqxScrollBar({disabled:d});if(d===true){b.host.addClass(b.toThemeProperty("jqx-fill-state-disabled"));b.textarea.attr("disabled","")}else{b.host.removeClass(b.toThemeProperty("jqx-fill-state-disabled"));b.textarea.removeAttr("disabled")}a.jqx.aria(b,"aria-disabled",d);break;case"rtl":if(d===true){b.textarea.addClass(b.toThemeProperty("jqx-text-area-element-rtl"))}else{b.textarea.removeClass(b.toThemeProperty("jqx-text-area-element-rtl"))}b._arrange();break}}},_raiseEvent:function(h,c){var e=this;if(c===undefined){c={owner:null}}var d=e.events[h];c.owner=e;var g=new a.Event(d);g.owner=e;g.args=c;if(g.preventDefault){g.preventDefault()}var f;if(d==="change"||e._baseHost[0].tagName.toLowerCase()==="div"){f=e.host}else{f=e._baseHost}var b=f.trigger(g);return b},_addHandlers:function(){var c=this,f=c.element.id,e=c.host,d=c.textarea;a.jqx.utilities.resize(c._baseHost,function(){c._ttimer=setTimeout(function(){c._arrange()},100)},false,true);var b=a.jqx.browser.mozilla?"wheel":"mousewheel";c.addHandler(e,b+".jqxTextArea"+f,function(g){c.wheel(g,c)});c.addHandler(e,"mouseenter.jqxTextArea"+f,function(){c.focused=true});c.addHandler(e,"mouseleave.jqxTextArea"+f,function(){c.focused=false});c.addHandler(e,"focus.jqxTextArea"+f,function(){c.focused=true});c.addHandler(e,"blur.jqxTextArea"+f,function(){c.focused=false});c.addHandler(c.wrapper,"scroll.jqxTextArea"+f,function(){if(c.wrapper[0].scrollTop!==0){c.wrapper[0].scrollTop=0}if(c.wrapper[0].scrollLeft!==0){c.wrapper[0].scrollLeft=0}});c.addHandler(d,"change.jqxTextArea"+f,function(g){g.stopPropagation();g.preventDefault();c._arrange();c._raiseEvent("0")});c.addHandler(d,"select.jqxTextArea"+f,function(g){g.stopPropagation();g.preventDefault()});c.addHandler(d,"scroll.jqxTextArea"+f,function(){c._arrange()});c.addHandler(d,"focus.jqxTextArea"+f,function(){c.host.addClass(c.toThemeProperty("jqx-fill-state-focus"));if(a.jqx.browser.msie&&a.jqx.browser.version<10&&c.textarea.val()===c.placeHolder){c.textarea.val("")}});c.addHandler(d,"blur.jqxTextArea"+f,function(){c.host.removeClass(c.toThemeProperty("jqx-fill-state-focus"));if(a.jqx.browser.msie&&a.jqx.browser.version<10){var g=c.textarea.val();if(g===""){c.textarea.val(c.placeHolder)}else{if(c.maxLength!==null&&g.length>c.maxLength){c.textarea.val(g.substr(0,c.maxLength))}}}});c.addHandler(d,"keydown.jqxTextArea"+f,function(g){c._suppressKeyPressRepeat=~a.inArray(g.keyCode,[40,38,9,13,27]);c._move(g)});c.addHandler(d,"keypress.jqxTextArea"+f,function(g){if(c.maxLength!==null&&a.jqx.browser.msie&&a.jqx.browser.version<10&&d.val().length>c.maxLength){return false}if(c._suppressKeyPressRepeat){return}c._move(g)});c.addHandler(d,"keyup.jqxTextArea"+f,function(g){switch(g.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!c.opened){return}c._select();break;case 27:if(!c.opened){return}c.close();break;default:if(c.timer){clearTimeout(c.timer)}c.timer=setTimeout(function(){c._suggest()},300)}g.stopPropagation();g.preventDefault();c._arrange()});c.addHandler(c.vScrollBar,"valueChanged.jqxTextArea"+f,function(g){d.scrollTop(g.currentValue)});c.addHandler(c.$popup,"mousedown.jqxTextArea"+f,function(g){g.stopPropagation();g.preventDefault();c._select()})},_removeHandlers:function(){var b=this,e=b.element.id,d=b.host,c=b.textarea;a.jqx.utilities.resize(b._baseHost,null,true);b.removeHandler(d,"mousewheel.jqxTextArea"+e);b.removeHandler(d,"mouseenter.jqxTextArea"+e);b.removeHandler(d,"mouseleave.jqxTextArea"+e);b.removeHandler(d,"focus.jqxTextArea"+e);b.removeHandler(d,"blur.jqxTextArea"+e);b.removeHandler(b.wrapper,"scroll.jqxTextArea"+e);b.removeHandler(c,"change.jqxTextArea"+e);b.removeHandler(c,"select.jqxTextArea"+e);b.removeHandler(c,"scroll.jqxTextArea"+e);b.removeHandler(c,"focus.jqxTextArea"+e);b.removeHandler(c,"blur.jqxTextArea"+e);b.removeHandler(c,"keydown.jqxTextArea"+e);b.removeHandler(c,"keypress.jqxTextArea"+e);b.removeHandler(c,"keyup.jqxTextArea"+e);b.removeHandler(b.vScrollBar,"valueChanged.jqxTextArea"+e);b.removeHandler(b.$popup,"mousedown.jqxTextArea"+e)},_addItemHandlers:function(){var b=this;b.addHandler(b.$popup.find("li"),"mouseenter.jqxTextArea"+b.element.id,function(c){b.$popup.find(".jqx-fill-state-pressed").removeClass(b.toThemeProperty("jqx-fill-state-pressed"));a(c.currentTarget).addClass(b.toThemeProperty("jqx-fill-state-pressed"))})},_removeItemHandlers:function(){var b=this;b.removeHandler(b.$popup.find("li"),"mouseenter.jqxTextArea"+b.element.id)},wheel:function(d,c){var e=0;if(d.originalEvent&&a.jqx.browser.msie&&d.originalEvent.wheelDelta){e=d.originalEvent.wheelDelta/120}if(!d){d=window.event}if(d.wheelDelta){e=d.wheelDelta/120}else{if(d.detail){e=-d.detail/3}else{if(d.originalEvent.wheelDelta){e=d.originalEvent.wheelDelta/120}else{if(d.originalEvent.detail){e=-d.originalEvent.detail/3}else{if(d.originalEvent.deltaY){e=-d.originalEvent.deltaY/3}}}}}if(e){var b=c._handleDelta(e);if(!b){if(d.preventDefault){d.preventDefault()}}if(!b){return b}else{return false}}if(d.preventDefault){d.preventDefault()}d.returnValue=false},_handleDelta:function(f){var c=this,d=c.vScrollBar.jqxScrollBar("getInstance");if(c.focused){var e=d.value;if(f<0){c.scrollDown()}else{c.scrollUp()}var b=d.value;if(e!==b){return false}}return true},scrollDown:function(){var b=this;if(b.vScrollBar.css("visibility")==="hidden"){return false}var d=b.vScrollBar.jqxScrollBar("getInstance");var c=Math.min(d.value+d.largestep,d.max);d.setPosition(c);b._arrange();return true},scrollUp:function(){var b=this;if(b.vScrollBar.css("visibility")==="hidden"){return false}var d=b.vScrollBar.jqxScrollBar("getInstance");var c=Math.max(d.value-d.largestep,d.min);d.setPosition(c);b._arrange();return true},_setSize:function(){var b=this;b.host.css("width",b.width);b.host.css("height",b.height)},_addClasses:function(){var b=this;b.host.addClass(b.toThemeProperty("jqx-panel"));b.host.addClass(b.toThemeProperty("jqx-widget"));b.host.addClass(b.toThemeProperty("jqx-widget-content"));b.host.addClass(b.toThemeProperty("jqx-text-area"));b.textarea.addClass(b.toThemeProperty("jqx-widget"));b.textarea.addClass(b.toThemeProperty("jqx-widget-content"));if(b.roundedCorners===true){b.host.addClass(b.toThemeProperty("jqx-rc-all"))}if(b.disabled===true){b.host.addClass(b.toThemeProperty("jqx-fill-state-disabled"));b.textarea.attr("disabled","");a.jqx.aria(b,"aria-disabled",true)}else{a.jqx.aria(b,"aria-disabled",false)}if(b.rtl===true){b.textarea.addClass(b.toThemeProperty("jqx-text-area-element-rtl"))}},_addPopupClasses:function(){var c=this,b=c.$popup;b.addClass(c.toThemeProperty("jqx-popup"));if(a.jqx.browser.msie){b.addClass(c.toThemeProperty("jqx-noshadow"))}b.addClass(c.toThemeProperty("jqx-input-popup"));b.addClass(c.toThemeProperty("jqx-menu"));b.addClass(c.toThemeProperty("jqx-menu-vertical"));b.addClass(c.toThemeProperty("jqx-menu-dropdown"));b.addClass(c.toThemeProperty("jqx-widget"));b.addClass(c.toThemeProperty("jqx-widget-content"));if(c.roundedCorners){b.addClass(c.toThemeProperty("jqx-rc-all"))}},_updateSource:function(){var d=this;var b=function(f){var e=[];e=a.map(f,function(h){if(h===undefined){return null}if(typeof h==="string"||h instanceof String){return{label:h,value:h}}if(typeof h!=="string"&&h instanceof String===false){var g="";var i="";if(d.displayMember!==""&&d.displayMember!==undefined){if(h[d.displayMember]){g=h[d.displayMember]}}if(d.valueMember!==""&&d.valueMember!==undefined){i=h[d.valueMember]}if(g===""){g=h.label}if(i===""){i=h.value}return{label:g,value:i}}return h});return e};if(d.source&&d.source._source){d.adapter=d.source;if(d.adapter._source.localdata){d.adapter.unbindBindingUpdate(d.element.id);d.adapter.bindBindingUpdate(d.element.id,function(){d.source=b(d.adapter.records)})}else{var c={};if(d.adapter._options.data){a.extend(d.adapter._options.data,c)}else{if(d.source._source.data){a.extend(c,d.source._source.data)}d.adapter._options.data=c}d.adapter.unbindDownloadComplete(d.element.id);d.adapter.bindDownloadComplete(d.element.id,function(){d.source=b(d.adapter.records)})}d.source.dataBind();return}if(!a.isFunction(d.source)){d.source=b(d.source)}},open:function(){var d=this;if(a.jqx.isHidden(d.host)){return}var c=a.extend({},d.host.coord(true),{height:d.host[0].offsetHeight});if(d.$popup.parent().length===0){var f=d._id+"_popup";d.$popup[0].id=f;a.jqx.aria(d,"aria-owns",f)}d.$popup.appendTo(a(document.body)).css({position:"absolute",zIndex:d.popupZIndex,top:c.top+c.height,left:c.left}).show();var b=0;var e=d.$popup.children();a.each(e,function(){b+=a(this).outerHeight(true)-1});d.$popup.height(b);d.opened=true;d._raiseEvent("2",{popup:d.$popup});a.jqx.aria(d,"aria-expanded",true);d._addItemHandlers();return d},close:function(){var b=this;b._removeItemHandlers();b.$popup.hide();b.opened=false;b._raiseEvent("3",{popup:b.$popup});a.jqx.aria(b,"aria-expanded",false);return b},_suggest:function(){var c=this,b;c.query=c.textarea[0].value;if(!c.query||c.query.length<c.minLength){return c.opened?c.close():c}if(a.isFunction(c.source)){b=c.source(c.query,a.proxy(c._load,this))}else{b=c.source}if(b){return c._load(b)}return c},_load:function(b){var c=this;b=a.grep(b,function(d){return c.filter(d)});b=c.sort(b);if(!b.length){if(c.opened){return c.close()}else{return c}}return c._render(b.slice(0,c.items)).open()},_filter:function(c){var b=this;var d=b.query;var e=c;if(c.label!==undefined){e=c.label}else{if(b.displayMember){e=c[b.displayMember]}}switch(b.searchMode){case"none":break;case"contains":return a.jqx.string.contains(e,d);case"equals":return a.jqx.string.equals(e,d);case"equalsignorecase":return a.jqx.string.equalsIgnoreCase(e,d);case"startswith":return a.jqx.string.startsWith(e,d);case"startswithignorecase":return a.jqx.string.startsWithIgnoreCase(e,d);case"endswith":return a.jqx.string.endsWith(e,d);case"endswithignorecase":return a.jqx.string.endsWithIgnoreCase(e,d);default:return a.jqx.string.containsIgnoreCase(e,d)}},_sort:function(c){var b=this,j=[],e=[],g=[];for(var d=0;d<c.length;d++){var f=c[d];var h=f;if(f.label){h=f.label}else{if(b.displayMember){h=f[b.displayMember]}}if(h.toString().toLowerCase().indexOf(b.query.toString().toLowerCase())===0){j.push(f)}else{if(h.toString().indexOf(b.query)>=0){e.push(f)}else{if(h.toString().toLowerCase().indexOf(b.query.toString().toLowerCase())>=0){g.push(f)}}}}return j.concat(e,g)},_render:function(b){var c=this;b=a(b).map(function(e,f){var h=f;if(f.value!==undefined){if(f.label!==undefined){e=a(c.item).attr({"data-name":f.label,"data-value":f.value})}else{e=a(c.item).attr({"data-name":f.value,"data-value":f.value})}}else{if(f.label!==undefined){e=a(c.item).attr({"data-value":f.label,"data-name":f.label})}else{if(c.displayMember!==undefined&&c.displayMember!==""){e=a(c.item).attr({"data-name":f[c.displayMember],"data-value":f[c.valueMember]})}else{e=a(c.item).attr({"data-value":f,"data-name":f})}}}if(f.label){h=f.label}else{if(c.displayMember){h=f[c.displayMember]}}e.find("a").html(c.highlight(h));var g="",d="";if(c.roundedCorners===true){g=" "+c.toThemeProperty("jqx-rc-all")}if(c.rtl){d=" "+c.toThemeProperty("jqx-rtl")}e[0].className=c.toThemeProperty("jqx-item")+" "+c.toThemeProperty("jqx-menu-item")+g+d;return e[0]});b.first().addClass(c.toThemeProperty("jqx-fill-state-pressed"));c.$popup.html(b);if(!c.dropDownWidth){c.$popup.width(c.host.outerWidth()-6)}else{c.$popup.width(c.dropDownWidth)}return c},_highlight:function(c){var d=this.query;d=d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var b=new RegExp("("+d+")","ig");return c.replace(b,function(e,f){return"<b>"+f+"</b>"})},_select:function(){var b=this;var d=b.$popup.find(".jqx-fill-state-pressed").attr("data-value");var c=b.$popup.find(".jqx-fill-state-pressed").attr("data-name");b.textarea[0].value=b.renderer(c,b.textarea[0].value);b.selectedItem={label:c,value:d};b.host.attr("data-value",d);b.host.attr("data-label",c);b._raiseEvent("1",{item:{label:c,value:d}});b._arrange();b.textarea[0].scrollTop=b.textarea[0].scrollHeight;b._raiseEvent("0");return b.close()},_renderer:function(b){return b},_move:function(c){var b=this;if(!b.opened){return}switch(c.keyCode){case 9:case 13:case 27:c.preventDefault();break;case 38:if(!c.shiftKey){c.preventDefault();b._prev()}break;case 40:if(!c.shiftKey){c.preventDefault();b._next()}break}c.stopPropagation()},_next:function(){var b=this,d=b.$popup.find(".jqx-fill-state-pressed").removeClass(b.toThemeProperty("jqx-fill-state-pressed")),c=d.next();if(!c.length){c=a(b.$popup.find("li")[0])}c.addClass(b.toThemeProperty("jqx-fill-state-pressed"))},_prev:function(){var b=this,d=b.$popup.find(".jqx-fill-state-pressed").removeClass(b.toThemeProperty("jqx-fill-state-pressed")),c=d.prev();if(!c.length){c=b.$popup.find("li").last()}c.addClass(b.toThemeProperty("jqx-fill-state-pressed"))}})})(jqxBaseFramework);
