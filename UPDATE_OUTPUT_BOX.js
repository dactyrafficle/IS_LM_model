function UPDATE_OUTPUT_BOX(output_box, ECONOMIC_OUTPUT) {

 let Y = ECONOMIC_OUTPUT.Y;
 let C = ECONOMIC_OUTPUT.C;
 let I = ECONOMIC_OUTPUT.I;
 let G = ECONOMIC_OUTPUT.G;
 let X = ECONOMIC_OUTPUT.X;
 let IM = ECONOMIC_OUTPUT.IM;
 
 output_box.clear();
 
 // RESIZE BASED ON NEW SPENDING
 let h = (Y+IM)*450/Y;
 console.log(h);
 output_box.dimension(300, h);
 output_box.rangex(0, 100);
 output_box.rangey(0, 100);
 
 // BORDER THICKNESS
 let line_width = 2;
 let section_width = output_box.data.range.x.span*0.5 - line_width;
 
 let s0 = 0;
 let s1 = C/(Y+IM)*output_box.data.range.y.span;
 let val = {
   'x':0,
   'y':0,
   'h':0
 }
 output_box.RECT_OUTLINE({'x':line_width*0.5,'y':s0+line_width*0.5}, section_width, -s1+line_width, '#adc2eb', line_width); // BLUE

 s0 += s1;
 s1 = I/(Y+IM)*output_box.data.range.y.span;
 output_box.RECT_OUTLINE({'x':line_width*0.5,'y':s0+line_width*0.5}, section_width, -s1+line_width, '#ffccff', line_width); // PINK
 
 s0 += s1;
 s1 = G/(Y+IM)*output_box.data.range.y.span;
 //output_box.RECT_SOLID({'x':0,'y':s0}, 50, -s1, '#ffd9b3', line_width); // ORANGE
 output_box.RECT_OUTLINE({'x':line_width*0.5,'y':s0+line_width*0.5}, section_width, -s1+line_width, '#ffd9b3', line_width); // PINK
 
 s0 += s1;
 s1 = X/(Y+IM)*output_box.data.range.y.span;
 //output_box.RECT_SOLID({'x':0,'y':s0}, 50, -s1, '#d1e0e0', line_width); // GREEN
 output_box.RECT_OUTLINE({'x':line_width*0.5,'y':s0+line_width*0.5}, section_width, -s1+line_width, '#d1e0e0', line_width);
 
 s0 = 0;
 s1 = Y/(Y+IM)*output_box.data.range.y.span;
 //output_box.RECT_SOLID({'x':50,'y':s0}, 50, -s1, '#ffecb3', line_width); // YELLOW
 val.x = output_box.data.range.x.span*0.5 + line_width*0.5;
 val.y = s0+line_width*0.5;
 val.h = s1-line_width;
 output_box.RECT_OUTLINE(val, section_width, -val.h, '#ffecb3', line_width);
 output_box.TEXT('GDP : ' + (Y).toFixed(0), {'x': val.x+5, 'y':(val.y+val.h*0.5)}, '#333');
 
 
 s0 += s1;
 s1 = IM/(Y+IM)*output_box.data.range.y.span;
 val.x = output_box.data.range.x.span*0.5 + line_width*0.5;
 val.y = s0+line_width*0.5;
 val.h = s1-line_width;
 //output_box.RECT_SOLID({'x':50,'y':s0}, 50, -s1, '#ffb3d1', line_width); // RED
 output_box.RECT_OUTLINE({'x':output_box.data.range.x.span*0.5 + line_width*0.5,'y':s0+line_width*0.5}, section_width, -s1+line_width, '#ffb3d1', line_width); // RED
 output_box.TEXT('IM : ' + (IM).toFixed(0), {'x': val.x+5, 'y':(val.y+val.h*0.5)}, '#333');
}