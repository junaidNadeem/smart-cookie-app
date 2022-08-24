

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore/lite';
import { DRIP_ACCOUNT_ID, DRIP_API_KEY, FIREBASE_CONFIG } from './config';
import express from 'express';

const client = require('drip-nodejs')({ token: DRIP_API_KEY, accountId: DRIP_ACCOUNT_ID });
const port = 3000
const app = express()
const firebaseApp = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(firebaseApp);

const user = {
    id:'1',
    email: 'asd@312.com'
}


async function seedUser(user){
    return setDoc(doc(db,'Users', user.id), user)
}

async function initializeData () {
    try {
        await seedUser(user)
        const res = client.createUpdateSubscriber(payload)
        console.log ('CREATED A SUBSCRIBER',res)
    } catch (error) {
        console.log(error)
    }
}



app.use('/subscribers', async (req,res,next) => {
    try{
        const result = await client.listSubscribers()
        res.status(200).json({
            data :result,
            error: null
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            data: null,
            error
        })
    }
})

initializeData()
.then(()=>{
    app.listen(port,()=> {
        console.log('app started on port ', port)
    })
})
