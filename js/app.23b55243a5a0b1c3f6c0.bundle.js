(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,s)=>{const a=s(475),{lightningChart:l,PieChartTypes:i,UIElementBuilders:n,LegendBoxBuilders:o,UIDraggingModes:r,SliceLabelFormatters:d,UIOrigins:u,emptyFill:g,emptyLine:p,Themes:m}=a,h=l().Pie({type:i.LabelsInsideSlices}).setTitle("Inter Hotels - hotel visitors in June 2016").setPadding({top:40}).setMultipleSliceExplosion(!1).setInnerRadius(60),c={country:["US","Canada","Greece","UK","Finland","Denmark"],values:[15e3,20030,8237,16790,9842,4300]},x=[];let y=0;for(let e=0;e<c.values.length;e++)y+=c.values[e],x.push({name:`${c.country[e]}`,value:c.values[e]});x.map((e=>h.addSlice(e.name,e.value))),h.setLabelFormatter(d.NamePlusValue),h.addLegendBox(o.HorizontalLegendBox).setAutoDispose({type:"max-width",maxWidth:.8}).add(h),h.addUIElement(n.TextBox).setPosition({x:50,y:50}).setOrigin(u.CenterTop).setDraggingMode(r.notDraggable).setMargin(5).setTextFont((e=>e.setSize(25))).setText(`Total: ${y} visitors`).setBackground((e=>e.setFillStyle(g).setStrokeStyle(p)))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);