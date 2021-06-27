function GET_SOLUTION(obj) {
 // Y VIA THE LM CURVE - DEPENDS ON i NOT r
 let A = (obj.M/(obj.gamma*obj.P))**(1/obj.epsilon);
 let Y = A*obj.i**(obj.theta/obj.epsilon);
 console.log(Y);
 return GETEIS(obj, Y);
}