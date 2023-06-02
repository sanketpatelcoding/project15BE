const mongoose=require('mongoose');

const dbString="mongodb+srv://sanket:chintu@cluster0.niaxish.mongodb.net/mernStack";


//mongodb+srv://sanketraj:@cluster0.7lwoz.mongodb.net/ems?retryWrites=true&w=majority


mongoose.connect(dbString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connected to  mongo !")).catch((error)=> console.log(error.message));