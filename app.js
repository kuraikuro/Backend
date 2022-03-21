const axios = require('axios');
const expressFunction = require('express');
var expressApp = expressFunction();
const url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces'

// expressApp.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
//     res.setHeader('Access-Control-Allow-Methods','POST,GET,PUT,PATCH,DELETE,OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
//     return next()
// });
expressApp.use(expressFunction.json());

expressApp.get('/:province', async function(req,res){
    const province = req.params.province;
    const covid = await axios.get(url);
    const data = Object(covid['data']);
    const finalData = data.filter(filter => filter.province == province);
    res.send(finalData);
})

expressApp.listen(3000, function(){
    console.log('Listening on port 3000');
});