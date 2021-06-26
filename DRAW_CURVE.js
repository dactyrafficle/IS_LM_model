function DRAW_CURVE(b, arr, color, line_width, shift, dashed) {

 let i_ = 0;
 if (shift) {
  i_ = 1;
 }
 
 let di_ = 1;
 if (dashed) {
  di_ = 2;
 }

 for (let i = i_; i < arr.length; i += di_) {
   b.CONNECTVALUES({'x':arr[i][0][0],'y':arr[i][0][1]}, {'x':arr[i][1][0],'y':arr[i][1][1]}, color, line_width);
 }

}