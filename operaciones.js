export const suma=(a,b)=>(a+b);


export const resta=(a,b)=>(a-b);

export const division=(a,b)=>(a/b);

export const multiplicacion=(a,b)=>(a*b);

export const residuo=(a,b)=>(a%b);

export const mayor=(a,b)=>(Math.max(a,b));

export const menor=(a,b)=>(Math.min(a,b));

export const par=(a, b) =>{
  if (a%2==0) {
    return "El numero "+a+"Es par";
  }else if(!a%2==0){
        return "El numero "+b+"Es impar";
  }

};
  
  export const impar=(a, b) =>{
    if (b%2==0) {
        return "El numero "+b+" Es par";
      }else if(!b%2==0){
        return "El numero "+a+" Es impar";
      }
  };

  export const del=(a,b,res)=>{
    a.value="";
    b.value="";
    res.innerHTML="";
  }
   

