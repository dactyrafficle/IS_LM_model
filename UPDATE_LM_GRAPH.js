function UPDATE_LM_GRAPH(box, OUTPUT_VALUES) {

  box.clear();
  
  box.rangex(0, 7030000);
  box.rangey(-1, 10);
  
  // not too sure how to graph this.
  // right now, its graphed as L = L(Y,i), where Y = current level, and i is the thing that is changing, to map L against M/P
  // if I did it the other way, I would move along M/P, solve the system, and map M/P against i, but that would actually produce a horizontal line
  // so I'm not too sure what is the point
  
  let REAL_MONEY_DEMAND = {
    'a':[],
    'b':[]
  }
  
  for (let i = box.data.range.y.min; i <= box.data.range.y.max; i += 0.1) {
    
    REAL_MONEY_DEMAND.a.push({'x':OUTPUT_VALUES.a.exo.L_0*OUTPUT_VALUES.a.endo.Y**OUTPUT_VALUES.a.exo.delta*i**OUTPUT_VALUES.a.exo.theta,'y':i});
    REAL_MONEY_DEMAND.b.push({'x':OUTPUT_VALUES.b.exo.L_0*OUTPUT_VALUES.b.endo.Y**OUTPUT_VALUES.b.exo.delta*i**OUTPUT_VALUES.b.exo.theta,'y':i});

  }
 

  // GRAPH REAL MONEY DEMAND
  box.CONNECTVALUES2(REAL_MONEY_DEMAND.a, '#FC05', 2);
  box.CONNECTVALUES2(REAL_MONEY_DEMAND.b, '#adc2eb', 1);

  
  // THE i=0 LINE
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':OUTPUT_VALUES.a.endo.i},{'x':box.data.range.x.max,'y':OUTPUT_VALUES.a.endo.i}],'#ddd', 1);
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':OUTPUT_VALUES.b.endo.i},{'x':box.data.range.x.max,'y':OUTPUT_VALUES.b.endo.i}],'#ddd', 1);

  box.CONNECTVALUES2([{'x':OUTPUT_VALUES.a.exo.M_s/OUTPUT_VALUES.a.exo.P,'y':box.data.range.y.min},{'x':OUTPUT_VALUES.a.exo.M_s/OUTPUT_VALUES.a.exo.P,'y':box.data.range.y.max}],'#ddd', 1);
  box.CONNECTVALUES2([{'x':OUTPUT_VALUES.b.exo.M_s/OUTPUT_VALUES.b.exo.P,'y':box.data.range.y.min},{'x':OUTPUT_VALUES.b.exo.M_s/OUTPUT_VALUES.b.exo.P,'y':box.data.range.y.max}],'#ddd', 1);

  // SHOW SAVINGS POINTS
  box.SHOWVALUE({'x':OUTPUT_VALUES.a.exo.M_s/OUTPUT_VALUES.a.exo.P,'y':OUTPUT_VALUES.a.endo.i}, '#FC0', 3);
  box.SHOWVALUE({'x':OUTPUT_VALUES.b.exo.M_s/OUTPUT_VALUES.b.exo.P,'y':OUTPUT_VALUES.b.endo.i}, '#adc2eb', 2);
  
  //box.SHOWVALUE({'x':OUTPUT_VALUES.a.exo.r,'y':OUTPUT_VALUES.a.endo.I}, '#FC0', 3);
  //box.SHOWVALUE({'x':OUTPUT_VALUES.b.exo.r,'y':OUTPUT_VALUES.b.endo.I}, '#adc2eb', 2);

  box.SHOW_FLOATING_LOG_X_AXIS(9);
  box.SHOW_FLOATING_LOG_Y_AXIS(9);
}