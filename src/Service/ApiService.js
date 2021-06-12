
const axios = require("axios");

 export const getAngluarIssue = async () =>{
    try{
        let data = await axios.request(
            { method: 'GET',
                url: `https://api.github.com/repos/angular/angular-cli/issues`,
                headers: {'Content-Type': 'application/json'},
                         Authorization:`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` ,
                },{
                    sort:'comments'
                });
            return data.data;
    }catch(error) {
        console.error(error);
    }
}

