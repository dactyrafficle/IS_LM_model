function GET_SOLUTION(obj) {
 // Y VIA THE LM CURVE
 let A = (obj.M/(obj.gamma*obj.P))**(1/obj.epsilon);
 let Y = A*obj.r**(obj.theta/obj.epsilon);
 return GETEIS(obj, Y);
}