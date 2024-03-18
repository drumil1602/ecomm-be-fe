const express = require('express');
const path = require('path');

const app = express();

// Serve the build folder of the React application
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/abc",(req,res)=>{
    res.json({success:true,msg:"we are here"});
})

// Start the server
app.listen(10000, () => {
  console.log('Server is listening on port 3000');
});