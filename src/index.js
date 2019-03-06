module.exports = function check(str, bracketsConfig) {

let stack = [];
let breckets_stack = [];
let brackets = bracketsConfig.join(',').replace(/,/g, '');
brackets = brackets.split('');

function peek(){
    return stack[stack.length-1];
}
function peek_b(){
    return breckets_stack[breckets_stack.length-1];
}
    
for(let i=0; i<str.length; i++){
  if(str.length<=2 && str.charAt(i) === str.charAt(i+1)) return true;
  let temp = str.charAt(i);
  stack.push(temp);
  for(let j=0; j<brackets.length-1; j++){
      if(temp === brackets[j]){
      breckets_stack.push(brackets[j+1]) 
      break;
      }
    let l_breckets_stack = peek_b();
    if(temp === l_breckets_stack){
      stack.pop();
      stack.pop();
      breckets_stack.pop();
      break;
    } 
  }
}

  if (stack.length === 0) {
      return true
  } else return false;
}