export function getPrevNumDiv10(num)
  {
    let num2 = Number(num);

    while (num2 % 10 !=0 )
      {
        num2--;
      }
    
    return num2;
  }


  export function getNextNumDiv10(num)
  {
    let num2 = Number(num);

    while (num2 % 10 !=0 )
      {
        num2++;
      }
    
    return num2;
  }