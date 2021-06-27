function UPDATE_OUTPUT_BOX(ECONOMIC_OUTPUT, output_box) {

 // PIXELS
 let output_box_w = 600;
 let output_box_h = 600;

 output_box.clear();
 output_box.dimension(output_box_w, output_box_h);
 output_box.rangex(0, 100);
 output_box.rangey(0, 100);
 
 let a = ECONOMIC_OUTPUT.a;
 let b = ECONOMIC_OUTPUT.b;

 // Z = Y + IM = C + I + G + X
 let ZMAX; 
 if ((a.Y + a.IM) > (b.Y + b.IM)) {
  ZMAX = (a.Y + a.IM);
 } else {
  ZMAX = (b.Y + b.IM);
 }
 
 let dx = 0.5;
 let rect_w = output_box.data.range.x.span/4-dx*2;
 let x1 = dx;
 let x2 = x1 + rect_w + 2*dx;
 let x3 = x2 + rect_w + 2*dx;
 let x4 = x3 + rect_w + 2*dx;

 let py = dx;
 py = DRAW_BOX('C', a.C, 1, a.Y, x1, py, '#adc2eb');
 py = DRAW_BOX('I', a.I, 1, a.Y, x1, py, '#ffccff');
 py = DRAW_BOX('G', a.G, 1, a.Y, x1, py, '#ffcc66');
 py = DRAW_BOX('X', a.X, 1, a.Y, x1, py, '#d1e0e0');

 py = dx;
 py = DRAW_BOX('Y', a.Y, 1, a.Y, x2, py, '#ffecb3');
 py = DRAW_BOX('IM', a.IM, 1, a.Y, x2, py, '#ffb3d1');
 
 py = dx;
 py = DRAW_BOX('C', b.C, 2, b.Y, x3, py, '#adc2eb', a.C);
 py = DRAW_BOX('I', b.I, 2, b.Y, x3, py, '#ffccff', a.I);
 py = DRAW_BOX('G', b.G, 2, b.Y, x3, py, '#ffcc66', a.G);
 py = DRAW_BOX('X', b.X, 2, b.Y, x3, py, '#d1e0e0', a.X);
 
 py = dx;
 py = DRAW_BOX('Y', b.Y, 2, b.Y, x4, py, '#ffecb3', a.Y);
 py = DRAW_BOX('IM', b.IM, 2, b.Y, x4, py, '#ffb3d1', a.IM);
 
 function DRAW_BOX(sector_name, sector_value, state, state_gdp, px, py, color_string, initial_sector_value) {
   //console.log(px);
   let rect_h = sector_value/ZMAX*output_box.data.range.y.span-dx*2;
   output_box.RECT_OUTLINE({'x':px,'y':py}, rect_w, -rect_h, color_string, dx*4); // BLUE
   output_box.TEXT(sector_name + state + ' : ' + (sector_value).toFixed(0), {'x':px+dx*2, 'y':py + rect_h-3}, '#333', 12, 'Monospace');
   
   if (sector_name !== 'Y') {
    output_box.TEXT('/Y' + state + ' : ' + ((sector_value/state_gdp)*100).toFixed(2) + '%', {'x':px+dx*2, 'y': py + rect_h-6}, '#333', 12, 'Monospace');
   }
   
   if (initial_sector_value) {
    let shift = 9;
    if (sector_name === 'Y') {
      shift = 6;
    }
    output_box.TEXT('/' + sector_name + '1 : ' + ((sector_value/initial_sector_value)*100).toFixed(2) + '%', {'x':px+dx*2, 'y': py + rect_h-shift}, '#333', 12, 'Monospace');
   }
   py += rect_h + dx*2;
   return py;
 } 
};
