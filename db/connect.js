const mongoose = require("mongoose");
const URL = "mongodb+srv://bhanu:X6DBUp6G8FgbLRKG@hospital.2t5ekly.mongodb.net/?retryWrites=true&w=majority";
//"mongodb://127.0.0.1:27017/hospital"
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>console.log("connect"))
.catch((error)=>console.log(error));
