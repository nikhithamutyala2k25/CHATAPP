import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const USERNAME =process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;   

const Connection = async (      
    // username, password
) => {  
    const URL = 'mongodb://localhost:27017/chat_app'
           try {
        await mongoose.connect(URL, { useUnifiedTopology: true, 
            // useNewUrlParser: true, 
            // useFindAndModify: false
         }
            );
        console.log('Database Connected Succesfully');         
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;