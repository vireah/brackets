module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = bracketsConfig.join(',').replace(/,/g, '');
  brackets = brackets.split('');

  function peek(){
      return stack[stack.length-1];
  }
  
  for(let i=0; i<str.length; i++){
    let temp = str.charAt(i);
    for(let j=1; j<brackets.length; j++){
      let a =  peek();
      let b = brackets[j-1];
      if(temp === brackets[j] && a === brackets[j-1]){
        stack.pop(temp);
      } else stack.push(temp);
    }
  }
  if (stack.length === 0) {
      return true
  } else return false;
}