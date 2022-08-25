import { doc, setDoc } from "firebase/firestore/lite";
import { uuid } from "uuidv4";
import db from "../firebase/index.js";

 export const USER = {
     id: uuid(),
     email: 'test.email@test.com'
 }


 export async function seedUser(){
    return setDoc(doc(db,'Users', USER.id), USER)
}