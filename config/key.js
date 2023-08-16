const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Touseef:Touseef2252@id.znkdy20.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("MongoDb connected")).catch(()=>console.log("There is ann error "));
console.log(mongoose);