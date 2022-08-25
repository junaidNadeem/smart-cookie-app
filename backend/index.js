import express from 'express';
import { doc, getDoc } from 'firebase/firestore/lite';
import { PORT } from './config/index.js';
import { drip } from './drip-client/index.js';
import db from './firebase/index.js';
import { seedUser, USER } from './seed/index.js'; 

const app = express()

async function initializeData () {
    try {
        // Comment the line below if dont want to seed user.
        await seedUser()


        //Uncomment below lines and add a valid path if plan to use your own firestore db without the seeder. 

        // const userSnap = await getDoc(doc(db,'Users',USER.id))
        // const USER = userSnap.data()

        await drip.createUpdateSubscriber({email: USER.email})
        console.log ('Created a subscriber')
    } catch (error) {
        console.log(error)
    }
}

// http://localhost:3000/subscribers
app.get('/subscribers', async (req,res,next) => {
    
    try{
        const result = await drip.listSubscribers()
        res.status(200).json({
            data: result?.body
        })
    }catch(error){
        console.log('Failed to get subscribers list')
        res.status(500).json({
            error
        })
    }
})


initializeData()
.then(()=>{
    app.listen(PORT,()=> {
        console.log('app started on port ', PORT)
    })
})
