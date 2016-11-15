/*
jQWidgets v3.9.1 (2015-Oct)
Copyright (c) 2011-2015 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxRating","",{});a.extend(a.jqx._jqxRating.prototype,{defineInstance:function(){var b={count:5,disabled:false,value:0,height:"auto",width:"auto",precision:1,singleVote:false,itemHeight:"20",itemWidth:"20",_itemHeight:undefined,_itemWidth:undefined,_images:[],aria:{"aria-valuenow":{name:"value",type:"number"},"aria-disabled":{name:"disabled",type:"boolean"}},_events:["change"],_invalidArgumentExceptions:{invalidPrecision:"The value of the precision property is invalid!",invalidWidth:"Width you've entered is invalid!",invalidHeight:"Height you've entered is invalid!",invalidCount:"You've entered invalid value for the count property!",invalidValue:"You've entered invalid value property!"}};a.extend(true,this,b);return b},createInstance:function(b){a.jqx.aria(this);this._createRating()},destroy:function(){this.host.remove()},val:function(b){if(arguments.length==0||typeof(b)=="object"){return this.value}if(typeof b=="string"){this.value=parseInt(b)}else{this.value=b}this.setValue(this.value);return this.value},_createRating:function(){this.host.css("display","none");this.host.empty();this._addInput();this._validateProperties();this._render();this._performLayout();this._removeEventHandlers();this._addEventHandlers();this.host.css("display","block");this.host.addClass(this.toThemeProperty("jqx-widget"));if(this.disabled){this.disable()}},_addInput:function(){var b=this.host.attr("name");this.input=a("<input type='hidden'/>");this.host.append(this.input);if(b){this.input.attr("name",b)}this.input.val(this.value.toString())},_render:function(){for(var b=1;b<=this.count;b++){this._images[b-1]=a('<div style="float:left;width:auto;height:auto;"><div style="position:absolute;width:auto;height:auto;visibility:hidden;" class="jqx-rating-hoverWrapper"><div style="width:auto;height:auto;float:left;" class="'+this.toThemeProperty("jqx-rating-image-hover")+'"></div><div style="visibility:hidden;width:auto;height:auto;" class="'+this.toThemeProperty("jqx-rating-image-backward")+'"></div></div><div style="position:absolute;width:auto;height:auto;" class="jqx-rating-voteWrapper"><div style="width:auto;height:auto;float:left;" class="'+this.toThemeProperty("jqx-rating-image-default")+'"></div><div style="width:0;height:auto;float:left;" class="'+this.toThemeProperty("jqx-rating-image-backward")+'"></div></div></div>');this.host.append(this._images[b-1])}},_performLayout:function(){for(var d=1;d<=this.count;d++){var e=this._images[d-1].find(this.toThemeProperty(".jqx-rating-image-backward",true)),h=this._images[d-1].find(this.toThemeProperty(".jqx-rating-image-default",true)),c=this._images[d-1].find(this.toThemeProperty(".jqx-rating-image-hover",true)),b=this._getImageName(h),f=this._getImageName(c),g=this._getImageName(e);h.css("background-image","none");c.css("background-image","none");e.css("background-image","none");this._appendImage(c,f,d-1);this._appendImage(e,g,d-1);this._appendImage(h,b,d-1)}},resize:function(c,b){this.width=c;this.height=b;this._setControlSize(this.width,this.height)},_setControlSize:function(c,b){this.host.css("height",this.height);this.host.css("width",this.width);if(this.itemHeight&&this.itemHeight!=="auto"){this._itemHeight=parseInt(this.itemHeight)}else{this._itemHeight=b}if(this.itemWidth&&this.itemWidth!=="auto"){this._itemWidth=parseInt(this.itemWidth)}else{this._itemWidth=c}},_appendImage:function(b,d,e){var c=this;var f=a('<img style="-moz-user-select:-moz-none;-khtml-user-select: none;-webkit-user-select:none;user-select:none;" class="'+this.toThemeProperty("jqx-rating-image")+'" src="'+d+'" />');b.append(f);f.load(function(){if(!c._initialized){c._setControlSize(a(this).width(),a(this).height());c._setValue(c.value,".jqx-rating-voteWrapper",".jqx-rating-image-default",".jqx-rating-image-backward");c._initialized=true}c._images[e].height(c._itemHeight);a(this).height(c._itemHeight);c._images[e].width(c._itemWidth);a(this).width(c._itemWidth)});return f},_validateProperties:function(){try{if(this.precision<0.001||this.precision>1){throw this._invalidArgumentExceptions.invalidPrecision}if(this.height!=="auto"&&parseInt(this.height)<0){throw this._invalidArgumentExceptions.invalidHeight}if(this.width!=="auto"&&parseInt(this.width)<0){throw this._invalidArgumentExceptions.invalidWidth}if(this.count<=0){throw this._invalidArgumentExceptions.invalidCount}if(this.value>this.count||this.value<0){throw this._invalidArgumentExceptions.invalidValue}}catch(b){alert(b)}},_getImageIndex:function(c){var b=0;while(c!==this._images[b][0]){b++}return ++b},_getRating:function(h,d){var g=this._getImageIndex(h);if(this.precision<1){var f=parseInt(d)-parseInt(a(h).position().left),c=this._itemWidth*this.precision,e=0;while(e<f){e+=c}if(e>parseInt(this._itemWidth)-c){e=parseInt(this._itemWidth)}var b=e/a(h).width();g-=1-b}return g},_addEventHandlers:function(){var b=this;for(var c=0;c<this.count;c++){if(!a.jqx.mobile.isTouchDevice()){this.addHandler(this._images[c],"mousemove",function(d){var e=b._getRating(this,d.pageX);b._setValue(e,".jqx-rating-hoverWrapper",".jqx-rating-image-hover",".jqx-rating-image-backward")});this.addHandler(this._images[c],"mouseenter",function(e){var f=b._getImageIndex(this);for(var d=0;d<f;d++){b._images[d].children(".jqx-rating-hoverWrapper").css("z-index","10");b._images[d].children(".jqx-rating-voteWrapper").css("z-index","1");b._images[d].children(".jqx-rating-hoverWrapper").css("visibility","visible")}});this.addHandler(this._images[c],"mouseleave",function(e){var f=b._getImageIndex(this);for(var d=0;d<f;d++){b._images[d].children(".jqx-rating-voteWrapper").css("z-index","10");b._images[d].children(".jqx-rating-hoverWrapper").css("z-index","1");b._images[d].children(".jqx-rating-hoverWrapper").css("visibility","hidden")}})}this.addHandler(this._images[c],"click",function(d){var e=b._getRating(this,d.pageX);b._setValue(e,".jqx-rating-voteWrapper",".jqx-rating-image-default",".jqx-rating-image-backward");if(b.singleVote){b.disable()}d.stopPropagation();b._raiseEvent(0,e)});this.addHandler(this._images[c],"dragstart",function(d){return false})}},_removeEventHandlers:function(){for(var b=0;b<this.count;b++){this.removeHandler(this._images[b],"mousemove");this.removeHandler(this._images[b],"mouseenter");this.removeHandler(this._images[b],"mouseleave");this.removeHandler(this._images[b],"click");this.removeHandler(this._images[b],"dragstart")}},_getImageName:function(c){var b=c.css("background-image");b=b.replace('url("',"");b=b.replace('")',"");b=b.replace("url(","");b=b.replace(")","");return b},_setValue:function(d,k,h,f){for(var e=1;e<=this.count;e++){var j=1,g=this._images[e-1].children(k),c=g.children(h),b=g.children(f);if(e>d){if(Math.abs(e-d)<1){j=1-Math.abs(e-d)}else{j=0}}c.width(this._itemWidth*j);b.width(this._itemWidth-parseInt(c.width()));g.children(this.toThemeProperty(f)).children(0).css("margin-left",-this._itemWidth*j+"px")}a.jqx.aria(this,"aria-valuenow",d)},_raiseEvent:function(d,c){var b=new a.Event(this._events[d]);b.owner=this;b.value=c;b.oldvalue=this.value;this.value=c;if(this.input){this.input.val(this.value.toString())}return this.host.trigger(b)},setValue:function(b){this._setValue(b,".jqx-rating-voteWrapper",".jqx-rating-image-default",".jqx-rating-image-backward");this.value=b;this._raiseEvent(0,this.value)},getValue:function(){return this.value},disable:function(){this._removeEventHandlers();this.disabled=true;a.jqx.aria(this,"aria-disabled",true)},enable:function(){this._removeEventHandlers();this._addEventHandlers();this.disabled=false;a.jqx.aria(this,"aria-disabled",false)},propertyChangedHandler:function(b,c,e,d){if(c==="disabled"){if(d){this.disable()}else{this.enable()}return}else{if(c==="value"){b.setValue(d)}else{b._createRating()}}}})})(jqxBaseFramework);
