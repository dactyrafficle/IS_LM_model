function UPDATE_MONEY_MARKET_GRAPH(box, OUTPUT_VALUES) {

  box.clear();
  
  let a = {};
  let b = {};
  
  a.val = {'x':Math.log(OUTPUT_VALUES.a.exo.M_s/OUTPUT_VALUES.a.exo.P),'y':Math.log(OUTPUT_VALUES.a.endo.i)};
  b.val = {'x':Math.log(OUTPUT_VALUES.b.exo.M_s/OUTPUT_VALUES.b.exo.P),'y':Math.log(OUTPUT_VALUES.b.endo.i)};
  
  a.slope = 1/OUTPUT_VALUES.a.exo.theta;
  b.slope = 1/OUTPUT_VALUES.b.exo.theta;
  
  let pct_range = 0.1;
  box.rangex(a.val.x*(1-pct_range), a.val.x*(1+pct_range));
  box.rangey(a.val.y*(1-pct_range), a.val.y*(1+pct_range));
    
  // THE INTEREST RATES
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':a.val.y},{'x':box.data.range.x.max,'y':a.val.y}],'#ddd', 2);
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':b.val.y},{'x':box.data.range.x.max,'y':b.val.y}],'#ddd', 2);
  
  // THE MONEY SUPPLIES
  box.CONNECTVALUES2([{'x':a.val.x,'y':box.data.range.y.min},{'x':a.val.x,'y':box.data.range.y.max}],'#fc05', 2);
  box.CONNECTVALUES2([{'x':b.val.x,'y':box.data.range.y.min},{'x':b.val.x,'y':box.data.range.y.max}],'#adc2eb', 1);
  
  // MONEY DEMAND
  
  a.dx = 2;
  b.dx = 2;
  
  box.CONNECTVALUES2([{'x':a.val.x-a.dx,'y':a.val.y-a.dx*a.slope},{'x':a.val.x+a.dx,'y':a.val.y+a.dx*a.slope}],'#fc05', 2);
  box.CONNECTVALUES2([{'x':b.val.x-b.dx,'y':b.val.y-b.dx*b.slope},{'x':b.val.x+b.dx,'y':b.val.y+b.dx*b.slope}],'#adc2eb', 1);

  // SHOW POINTS
  box.SHOWVALUE(a.val, '#FC0', 3);
  box.SHOWVALUE(b.val, '#adc2eb', 3);

  box.SHOW_FLOATING_LOG_X_AXIS(9);
  box.SHOW_FLOATING_LOG_Y_AXIS(9);
}