const express = require('express');
const app = express();
const path = require('path');
console.log('Console listening', path, __dirname + '/dist/');
app.use(express.static(__dirname + '/dist/'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: __dirname+'/dist/PoolCarz/' });
    // res.sendFile(path.join('dist/PoolCarz/index.html'));
});
// app.get('*', (req, res) => {
//     res.sendFile('./front-end/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });
// app.get('/',function(req,res){
//     res.sendFile('index.html', { root: __dirname });
// });

// console.log('Console listening', path, __dirname + '/dist/');