var fs = require('fs');
fs.readFile('./sample.txt', 'utf-8',function(err, data_sample){
    console.log(data_sample);
});