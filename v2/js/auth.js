import {db} from './config.js';
export async function currentUser(){
 const {data:{session},error:authError}=await db.auth.getSession();
 if(authError)throw authError;
 if(!session)return null;
 const {data:profile,error}=await db.from('users').select('id,first_name,last_name,role,active').eq('auth_user_id',session.user.id).single();
 if(error)throw error;
 if(!profile?.active)throw Error('This account is inactive.');
 return profile;
}
export async function signOut(){const {error}=await db.auth.signOut();if(error)throw error;}
