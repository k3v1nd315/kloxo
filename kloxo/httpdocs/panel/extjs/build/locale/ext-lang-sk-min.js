/*
 * Ext JS Library 1.1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://www.extjs.com/license
 */


Ext.UpdateManager.defaults.indicatorText="<div class=\"loading-indicator\">Nahr\xc3\xa1vam...</div>";if(Ext.View){Ext.View.prototype.emptyText="";}if(Ext.grid.Grid){Ext.grid.Grid.prototype.ddText="{0} ozna\xc3\xa8en\xc3\xbdch riadkov";}if(Ext.TabPanelItem){Ext.TabPanelItem.prototype.closeText="Zavrie\xc2\ufffd t\xc3\xbato z\xc3\xa1lo\xc2\u017eku";}if(Ext.form.Field){Ext.form.Field.prototype.invalidText="Hodnota v tomto poli je nespr\xc3\xa1vna";}Date.monthNames=["Janu\xc3\xa1r","Febru\xc3\xa1r","Marec","Apr\xc3l","M\xc3\xa1j","J\xc3\xban","J\xc3\xbal","August","September","Okt\xc3\xb3ber","November","December"];Date.dayNames=["Nede\xc5\xb8a","Pondelok","Utorok","Streda","\xc2\u0160tvrtok","Piatok","Sobota"];if(Ext.MessageBox){Ext.MessageBox.buttonText={ok:"OK",cancel:"Zru\xc2\u0161i\xc2\ufffd",yes:"\xc3\ufffdno",no:"Nie"};}if(Ext.util.Format){Ext.util.Format.date=function(v,_2){if(!v){return"";}if(!(v instanceof Date)){v=new Date(Date.parse(v));}return v.dateFormat(_2||"m/d/R");};}if(Ext.DatePicker){Ext.apply(Ext.DatePicker.prototype,{todayText:"Dnes",minText:"Tento d\xc3\xa1tum je men\xc2\u0161\xc3 ako minim\xc3\xa1lny mo\xc2\u017en\xc3\xbd d\xc3\xa1tum",maxText:"Tento d\xc3\xa1tum je v\xc3\xa4\xc3\xa8\xc2\u0161\xc3 ako maxim\xc3\xa1lny mo\xc2\u017en\xc3\xbd d\xc3\xa1tum",disabledDaysText:"",disabledDatesText:"",monthNames:Date.monthNames,dayNames:Date.dayNames,nextText:"\xc3\ufffdal\xc2\u0161\xc3 Mesiac (Control+Doprava)",prevText:"Predch. Mesiac (Control+Do\xc5\xb8ava)",monthYearText:"Vyberte Mesiac (Control+Hore/Dole pre posun rokov)",todayTip:"{0} (Medzern\xc3k)",format:"m/d/r"});}if(Ext.PagingToolbar){Ext.apply(Ext.PagingToolbar.prototype,{beforePageText:"Strana",afterPageText:"z {0}",firstText:"Prv\xc3\xa1 Strana",prevText:"Predch. Strana",nextText:"\xc3\ufffdal\xc2\u0161ia Strana",lastText:"Posledn\xc3\xa1 strana",refreshText:"Obnovi\xc2\ufffd",displayMsg:"Zobrazujem {0} - {1} z {2}",emptyMsg:"\xc2\u017diadne d\xc3\xa1ta"});}if(Ext.form.TextField){Ext.apply(Ext.form.TextField.prototype,{minLengthText:"Minim\xc3\xa1lna d\xc3\xa5\xc2\u017eka pre toto pole je {0}",maxLengthText:"Maxim\xc3\xa1lna d\xc3\xa5\xc2\u017eka pre toto pole je {0}",blankText:"Toto pole je povinn\xc3\xa9",regexText:"",emptyText:null});}if(Ext.form.NumberField){Ext.apply(Ext.form.NumberField.prototype,{minText:"Minim\xc3\xa1lna hodnota pre toto pole je {0}",maxText:"Maxim\xc3\xa1lna hodnota pre toto pole je {0}",nanText:"{0} je nespr\xc3\xa1vne \xc3\xa8\xc3slo"});}if(Ext.form.DateField){Ext.apply(Ext.form.DateField.prototype,{disabledDaysText:"Zablokovan\xc3\xa9",disabledDatesText:"Zablokovan\xc3\xa9",minText:"D\xc3\xa1tum v tomto poli mus\xc3 by\xc2\ufffd a\xc2\u017e po {0}",maxText:"D\xc3\xa1tum v tomto poli mus\xc3 by\xc2\ufffd pred {0}",invalidText:"{0} nie je spr\xc3\xa1vny d\xc3\xa1tum - mus\xc3 by\xc2\ufffd vo form\xc3\xa1te {1}",format:"m/d/r"});}if(Ext.form.ComboBox){Ext.apply(Ext.form.ComboBox.prototype,{loadingText:"Nahr\xc3\xa1vam...",valueNotFoundText:undefined});}if(Ext.form.VTypes){Ext.apply(Ext.form.VTypes,{emailText:"Toto pole mus\xc3 by\xc2\ufffd e-mailov\xc3\xa1 adresa vo form\xc3\xa1te \"user@domain.com\"",urlText:"Toto pole mus\xc3 by\xc2\ufffd URL vo form\xc3\xa1te \"http:/"+"/www.domain.com\"",alphaText:"Toto po\xc5\xb8e mo\xc2\u017ee obsahova\xc2\ufffd iba p\xc3smen\xc3\xa1 a znak _",alphanumText:"Toto po\xc5\xb8e mo\xc2\u017ee obsahova\xc2\ufffd iba p\xc3smen\xc3\xa1,\xc3\xa8\xc3sla a znak _"});}if(Ext.grid.GridView){Ext.apply(Ext.grid.GridView.prototype,{sortAscText:"Zoradi\xc2\ufffd vzostupne",sortDescText:"Zoradi\xc2\ufffd zostupne",lockText:"Zamkn\xc3\xba\xc2\ufffd st\xc3\xa5pec",unlockText:"Odomkn\xc3\xba\xc2\ufffd st\xc5\xb8pec",columnsText:"St\xc3\xa5pce"});}if(Ext.grid.PropertyColumnModel){Ext.apply(Ext.grid.PropertyColumnModel.prototype,{nameText:"N\xc3\xa1zov",valueText:"Hodnota",dateFormat:"m/j/Y"});}if(Ext.SplitLayoutRegion){Ext.apply(Ext.SplitLayoutRegion.prototype,{splitTip:"Potiahnite pre zmenu rozmeru",collapsibleSplitTip:"Potiahnite pre zmenu rozmeru. Dvojklikom schov\xc3\xa1te."});}