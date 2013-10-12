/*
 * Ext JS Library 1.1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://www.extjs.com/license
 */


Ext.LayoutRegion=function(_1,_2,_3){Ext.LayoutRegion.superclass.constructor.call(this,_1,_2,_3,true);var dh=Ext.DomHelper;this.el=dh.append(_1.el.dom,{tag:"div",cls:"x-layout-panel x-layout-panel-"+this.position},true);this.titleEl=dh.append(this.el.dom,{tag:"div",unselectable:"on",cls:"x-unselectable x-layout-panel-hd x-layout-title-"+this.position,children:[{tag:"span",cls:"x-unselectable x-layout-panel-hd-text",unselectable:"on",html:"&#160;"},{tag:"div",cls:"x-unselectable x-layout-panel-hd-tools",unselectable:"on"}]},true);this.titleEl.enableDisplayMode();this.titleTextEl=this.titleEl.dom.firstChild;this.tools=Ext.get(this.titleEl.dom.childNodes[1],true);this.closeBtn=this.createTool(this.tools.dom,"x-layout-close");this.closeBtn.enableDisplayMode();this.closeBtn.on("click",this.closeClicked,this);this.closeBtn.hide();this.createBody(_2);this.visible=true;this.collapsed=false;if(_2.hideWhenEmpty){this.hide();this.on("paneladded",this.validateVisibility,this);this.on("panelremoved",this.validateVisibility,this);}this.applyConfig(_2);};Ext.extend(Ext.LayoutRegion,Ext.BasicLayoutRegion,{createBody:function(){this.bodyEl=this.el.createChild({tag:"div",cls:"x-layout-panel-body"});},applyConfig:function(c){if(c.collapsible&&this.position!="center"&&!this.collapsedEl){var dh=Ext.DomHelper;if(c.titlebar!==false){this.collapseBtn=this.createTool(this.tools.dom,"x-layout-collapse-"+this.position);this.collapseBtn.on("click",this.collapse,this);this.collapseBtn.enableDisplayMode();if(c.showPin===true||this.showPin){this.stickBtn=this.createTool(this.tools.dom,"x-layout-stick");this.stickBtn.enableDisplayMode();this.stickBtn.on("click",this.expand,this);this.stickBtn.hide();}}this.collapsedEl=dh.append(this.mgr.el.dom,{cls:"x-layout-collapsed x-layout-collapsed-"+this.position,children:[{cls:"x-layout-collapsed-tools",children:[{cls:"x-layout-ctools-inner"}]}]},true);if(c.floatable!==false){this.collapsedEl.addClassOnOver("x-layout-collapsed-over");this.collapsedEl.on("click",this.collapseClick,this);}if(c.collapsedTitle&&(this.position=="north"||this.position=="south")){this.collapsedTitleTextEl=dh.append(this.collapsedEl.dom,{tag:"div",cls:"x-unselectable x-layout-panel-hd-text",id:"message",unselectable:"on",style:{"float":"left"}});this.collapsedTitleTextEl.innerHTML=c.collapsedTitle;}this.expandBtn=this.createTool(this.collapsedEl.dom.firstChild.firstChild,"x-layout-expand-"+this.position);this.expandBtn.on("click",this.expand,this);}if(this.collapseBtn){this.collapseBtn.setVisible(c.collapsible==true);}this.cmargins=c.cmargins||this.cmargins||(this.position=="west"||this.position=="east"?{top:0,left:2,right:2,bottom:0}:{top:2,left:0,right:0,bottom:2});this.margins=c.margins||this.margins||{top:0,left:0,right:0,bottom:0};this.bottomTabs=c.tabPosition!="top";this.autoScroll=c.autoScroll||false;if(this.autoScroll){this.bodyEl.setStyle("overflow","auto");}else{this.bodyEl.setStyle("overflow","hidden");}if((!c.titlebar&&!c.title)||c.titlebar===false){this.titleEl.hide();}else{this.titleEl.show();if(c.title){this.titleTextEl.innerHTML=c.title;}}this.duration=c.duration||0.3;this.slideDuration=c.slideDuration||0.45;this.config=c;if(c.collapsed){this.collapse(true);}if(c.hidden){this.hide();}},isVisible:function(){return this.visible;},setCollapsedTitle:function(_7){_7=_7||"&#160;";if(this.collapsedTitleTextEl){this.collapsedTitleTextEl.innerHTML=_7;}},getBox:function(){var b;if(!this.collapsed){b=this.el.getBox(false,true);}else{b=this.collapsedEl.getBox(false,true);}return b;},getMargins:function(){return this.collapsed?this.cmargins:this.margins;},highlight:function(){this.el.addClass("x-layout-panel-dragover");},unhighlight:function(){this.el.removeClass("x-layout-panel-dragover");},updateBox:function(_9){this.box=_9;if(!this.collapsed){this.el.dom.style.left=_9.x+"px";this.el.dom.style.top=_9.y+"px";this.updateBody(_9.width,_9.height);}else{this.collapsedEl.dom.style.left=_9.x+"px";this.collapsedEl.dom.style.top=_9.y+"px";this.collapsedEl.setSize(_9.width,_9.height);}if(this.tabs){this.tabs.autoSizeTabs();}},updateBody:function(w,h){if(w!==null){this.el.setWidth(w);w-=this.el.getBorderWidth("rl");if(this.config.adjustments){w+=this.config.adjustments[0];}}if(h!==null){this.el.setHeight(h);h=this.titleEl&&this.titleEl.isDisplayed()?h-(this.titleEl.getHeight()||0):h;h-=this.el.getBorderWidth("tb");if(this.config.adjustments){h+=this.config.adjustments[1];}this.bodyEl.setHeight(h);if(this.tabs){h=this.tabs.syncHeight(h);}}if(this.panelSize){w=w!==null?w:this.panelSize.width;h=h!==null?h:this.panelSize.height;}if(this.activePanel){var el=this.activePanel.getEl();w=w!==null?w:el.getWidth();h=h!==null?h:el.getHeight();this.panelSize={width:w,height:h};this.activePanel.setSize(w,h);}if(Ext.isIE&&this.tabs){this.tabs.el.repaint();}},getEl:function(){return this.el;},hide:function(){if(!this.collapsed){this.el.dom.style.left="-2000px";this.el.hide();}else{this.collapsedEl.dom.style.left="-2000px";this.collapsedEl.hide();}this.visible=false;this.fireEvent("visibilitychange",this,false);},show:function(){if(!this.collapsed){this.el.show();}else{this.collapsedEl.show();}this.visible=true;this.fireEvent("visibilitychange",this,true);},closeClicked:function(){if(this.activePanel){this.remove(this.activePanel);}},collapseClick:function(e){if(this.isSlid){e.stopPropagation();this.slideIn();}else{e.stopPropagation();this.slideOut();}},collapse:function(_e){if(this.collapsed){return;}this.collapsed=true;if(this.split){this.split.el.hide();}if(this.config.animate&&_e!==true){this.fireEvent("invalidated",this);this.animateCollapse();}else{this.el.setLocation(-20000,-20000);this.el.hide();this.collapsedEl.show();this.fireEvent("collapsed",this);this.fireEvent("invalidated",this);}},animateCollapse:function(){},expand:function(e,_10){if(e){e.stopPropagation();}if(!this.collapsed||this.el.hasActiveFx()){return;}if(this.isSlid){this.afterSlideIn();_10=true;}this.collapsed=false;if(this.config.animate&&_10!==true){this.animateExpand();}else{this.el.show();if(this.split){this.split.el.show();}this.collapsedEl.setLocation(-2000,-2000);this.collapsedEl.hide();this.fireEvent("invalidated",this);this.fireEvent("expanded",this);}},animateExpand:function(){},initTabs:function(){this.bodyEl.setStyle("overflow","hidden");var ts=new Ext.TabPanel(this.bodyEl.dom,{tabPosition:this.bottomTabs?"bottom":"top",disableTooltips:this.config.disableTabTips});if(this.config.hideTabs){ts.stripWrap.setDisplayed(false);}this.tabs=ts;ts.resizeTabs=this.config.resizeTabs===true;ts.minTabWidth=this.config.minTabWidth||40;ts.maxTabWidth=this.config.maxTabWidth||250;ts.preferredTabWidth=this.config.preferredTabWidth||150;ts.monitorResize=false;ts.bodyEl.setStyle("overflow",this.config.autoScroll?"auto":"hidden");ts.bodyEl.addClass("x-layout-tabs-body");this.panels.each(this.initPanelAsTab,this);},initPanelAsTab:function(_12){var ti=this.tabs.addTab(_12.getEl().id,_12.getTitle(),null,this.config.closeOnTab&&_12.isClosable());if(_12.tabTip!==undefined){ti.setTooltip(_12.tabTip);}ti.on("activate",function(){this.setActivePanel(_12);},this);if(this.config.closeOnTab){ti.on("beforeclose",function(t,e){e.cancel=true;this.remove(_12);},this);}return ti;},updatePanelTitle:function(_16,_17){if(this.activePanel==_16){this.updateTitle(_17);}if(this.tabs){var ti=this.tabs.getTab(_16.getEl().id);ti.setText(_17);if(_16.tabTip!==undefined){ti.setTooltip(_16.tabTip);}}},updateTitle:function(_19){if(this.titleTextEl&&!this.config.title){this.titleTextEl.innerHTML=(typeof _19!="undefined"&&_19.length>0?_19:"&#160;");}},setActivePanel:function(_1a){_1a=this.getPanel(_1a);if(this.activePanel&&this.activePanel!=_1a){this.activePanel.setActiveState(false);}this.activePanel=_1a;_1a.setActiveState(true);if(this.panelSize){_1a.setSize(this.panelSize.width,this.panelSize.height);}if(this.closeBtn){this.closeBtn.setVisible(!this.config.closeOnTab&&!this.isSlid&&_1a.isClosable());}this.updateTitle(_1a.getTitle());if(this.tabs){this.fireEvent("invalidated",this);}this.fireEvent("panelactivated",this,_1a);},showPanel:function(_1b){if(_1b=this.getPanel(_1b)){if(this.tabs){var tab=this.tabs.getTab(_1b.getEl().id);if(tab.isHidden()){this.tabs.unhideTab(tab.id);}tab.activate();}else{this.setActivePanel(_1b);}}return _1b;},getActivePanel:function(){return this.activePanel;},validateVisibility:function(){if(this.panels.getCount()<1){this.updateTitle("&#160;");this.closeBtn.hide();this.hide();}else{if(!this.isVisible()){this.show();}}},add:function(_1d){if(arguments.length>1){for(var i=0,len=arguments.length;i<len;i++){this.add(arguments[i]);}return null;}if(this.hasPanel(_1d)){this.showPanel(_1d);return _1d;}_1d.setRegion(this);this.panels.add(_1d);if(this.panels.getCount()==1&&!this.config.alwaysShowTabs){this.bodyEl.dom.appendChild(_1d.getEl().dom);if(_1d.background!==true){this.setActivePanel(_1d);}this.fireEvent("paneladded",this,_1d);return _1d;}if(!this.tabs){this.initTabs();}else{this.initPanelAsTab(_1d);}if(_1d.background!==true){this.tabs.activate(_1d.getEl().id);}this.fireEvent("paneladded",this,_1d);return _1d;},hidePanel:function(_20){if(this.tabs&&(_20=this.getPanel(_20))){this.tabs.hideTab(_20.getEl().id);}},unhidePanel:function(_21){if(this.tabs&&(_21=this.getPanel(_21))){this.tabs.unhideTab(_21.getEl().id);}},clearPanels:function(){while(this.panels.getCount()>0){this.remove(this.panels.first());}},remove:function(_22,_23){_22=this.getPanel(_22);if(!_22){return null;}var e={};this.fireEvent("beforeremove",this,_22,e);if(e.cancel===true){return null;}_23=(typeof _23!="undefined"?_23:(this.config.preservePanels===true||_22.preserve===true));var _25=_22.getId();this.panels.removeKey(_25);if(_23){document.body.appendChild(_22.getEl().dom);}if(this.tabs){this.tabs.removeTab(_22.getEl().id);}else{if(!_23){this.bodyEl.dom.removeChild(_22.getEl().dom);}}if(this.panels.getCount()==1&&this.tabs&&!this.config.alwaysShowTabs){var p=this.panels.first();var _27=document.createElement("div");_27.appendChild(p.getEl().dom);this.bodyEl.update("");this.bodyEl.dom.appendChild(p.getEl().dom);_27=null;this.updateTitle(p.getTitle());this.tabs=null;this.bodyEl.setStyle("overflow",this.config.autoScroll?"auto":"hidden");this.setActivePanel(p);}_22.setRegion(null);if(this.activePanel==_22){this.activePanel=null;}if(this.config.autoDestroy!==false&&_23!==true){try{_22.destroy();}catch(e){}}this.fireEvent("panelremoved",this,_22);return _22;},getTabs:function(){return this.tabs;},createTool:function(_28,_29){var btn=Ext.DomHelper.append(_28,{tag:"div",cls:"x-layout-tools-button",children:[{tag:"div",cls:"x-layout-tools-button-inner "+_29,html:"&#160;"}]},true);btn.addClassOnOver("x-layout-tools-button-over");return btn;}});