function UPDATE_NCO_GRAPH(box, OUTPUT_VALUES) {

  box.clear();
  
  box.rangex(0, 5);
  box.rangey(-20000, 20000);
  
  // get r : changing R means we have to recalc the whole thing
  // calculate y
  // calculate e

  // NCO = (S-I) - (G-T)

  let SAVINGS = {
    'a':[],
    'b':[]
  }
  
  let GOV_SPENDING = {
    'a':[],
    'b':[]
  }
  
  let TAXES = {
    'a':[],
    'b':[]
  }
  
  let INVESTMENTS = {
    'a':[],
    'b':[]
  }
  
  let LINE1 = {
    'a':[],
    'b':[]
  }
  
  let LINE2 = {
    'a':[],
    'b':[]
  }
  
  for (let r = box.data.range.x.min; r <= box.data.range.x.max; r += 0.2) {
    
    let INPUT_SETS = {
      'a':{
        'exo':Object.assign({},OUTPUT_VALUES.a.exo)
      },
      'b':{
        'exo':Object.assign({},OUTPUT_VALUES.b.exo)
      }
    }

    INPUT_SETS.a.exo.r = r;
    INPUT_SETS.b.exo.r = r;
    
    let OUTPUT_SETS = {
      'a':GET_OUTPUT_SET(INPUT_SETS.a),
      'b':GET_OUTPUT_SET(INPUT_SETS.b)
    }
    
    SAVINGS.a.push({'x':r, 'y':OUTPUT_SETS.a.endo.S});
    SAVINGS.b.push({'x':r, 'y':OUTPUT_SETS.b.endo.S});
    
    TAXES.a.push({'x':r, 'y':OUTPUT_SETS.a.endo.T});
    TAXES.b.push({'x':r, 'y':OUTPUT_SETS.b.endo.T});
    
    INVESTMENTS.a.push({'x':r, 'y':OUTPUT_SETS.a.endo.I});
    INVESTMENTS.b.push({'x':r, 'y':OUTPUT_SETS.b.endo.I});

    GOV_SPENDING.a.push({'x':r, 'y':OUTPUT_SETS.a.endo.G});
    GOV_SPENDING.b.push({'x':r, 'y':OUTPUT_SETS.b.endo.G});
    
    LINE1.a.push({'x':r, 'y':OUTPUT_SETS.a.endo.S-OUTPUT_SETS.a.endo.I-OUTPUT_SETS.a.exo.G+OUTPUT_SETS.a.endo.T});
    LINE1.b.push({'x':r, 'y':OUTPUT_SETS.b.endo.S-OUTPUT_SETS.b.endo.I-OUTPUT_SETS.a.exo.G+OUTPUT_SETS.a.endo.T});
    
    LINE2.a.push({'x':r, 'y':OUTPUT_SETS.a.exo.G-OUTPUT_SETS.a.endo.T});
    LINE2.b.push({'x':r, 'y':OUTPUT_SETS.b.exo.G-OUTPUT_SETS.b.endo.T});
  }
  
  // NX = 0
  box.CONNECTVALUES2([{'x':box.data.range.x.min,'y':0},{'x':box.data.range.x.max,'y':0}],'#ddd', 2);
  
  // S-I-G+T = NCO
  box.CONNECTVALUES2(LINE1.a, '#FC05', 2);
  box.CONNECTVALUES2(LINE1.b, '#adc2eb', 1);
  
  //box.CONNECTVALUES2(LINE2.a, '#FC05', 2);
  //box.CONNECTVALUES2(LINE2.b, '#adc2eb', 1);
  
  // GRAPH INVESTMENTS
  //box.CONNECTVALUES2(INVESTMENTS.a, '#FC05', 2);
  //box.CONNECTVALUES2(INVESTMENTS.b, '#adc2eb', 1);
  
  // THE INTEREST RATE
  box.CONNECTVALUES2([{'x':OUTPUT_VALUES.a.exo.r,'y':box.data.range.y.min},{'x':OUTPUT_VALUES.a.exo.r,'y':box.data.range.y.max}],'#ddd', 1);
  box.CONNECTVALUES2([{'x':OUTPUT_VALUES.b.exo.r,'y':box.data.range.y.min},{'x':OUTPUT_VALUES.b.exo.r,'y':box.data.range.y.max}],'#ddd', 1);


  // SHOW SAVINGS POINTS
  //box.SHOWVALUE({'x':OUTPUT_VALUES.a.exo.r,'y':OUTPUT_VALUES.a.endo.S}, '#FC0', 3);
  //box.SHOWVALUE({'x':OUTPUT_VALUES.b.exo.r,'y':OUTPUT_VALUES.b.endo.S}, '#adc2eb', 2);
  
  //box.SHOWVALUE({'x':OUTPUT_VALUES.a.exo.r,'y':OUTPUT_VALUES.a.endo.I}, '#FC0', 3);
  //box.SHOWVALUE({'x':OUTPUT_VALUES.b.exo.r,'y':OUTPUT_VALUES.b.endo.I}, '#adc2eb', 2);


  box.SHOW_FLOATING_LOG_X_AXIS(9);
  box.SHOW_FLOATING_LOG_Y_AXIS(9);
}


