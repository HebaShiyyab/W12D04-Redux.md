


const initialState = {
    token:" ",
  };




const loginReducers =(state = initialState,{type,payload})=>{
switch (type){
    case 'SET_TOKEN':
        return {token: payload };
   
    default : return state
}
  };

  export default loginReducers;
  export const setTokens = (token)=>{
      return { type: 'SET_TOKEN' , payload : token }
  };
  
