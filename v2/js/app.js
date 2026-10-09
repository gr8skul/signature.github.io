import {currentUser,signOut} from './auth.js';
import {roleView} from './views.js';
const app=document.getElementById('app');
const signout=document.getElementById('signout');
async function start(){
 try{
  const user=await currentUser();
  if(!user){window.location.replace('../login.html');return;}
  app.innerHTML=roleView(user);
  signout.hidden=false;
 }catch(error){console.error(error);app.innerHTML='<section class="panel"><h1>Unable to open V2</h1><p class="error"></p></section>';app.querySelector('.error').textContent=error.message||'Unexpected error';}
}
signout.addEventListener('click',async()=>{try{await signOut();window.location.replace('../login.html')}catch(error){alert(error.message)}});
start();
