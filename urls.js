const fs = require('fs')
const axios = require('axios')
const process = require('process')

function getFileName(url){
    let regex = /^(?:https?:\/\/)?(?:www\.)?/i
    let url_name = url.replace(regex, "").split('/')[0];
    console.log(url_name);
    return url_name;
}


    commandLine('urls.txt')
    

    function commandLine(path){
        let links;
        fs.readFile(path,'utf-8', (err,data)=> {
            if(err){
                console.log(`Error Reading file: ${path} - ${err}`)
                process.exit(1);
            }

            const url_array = data.split('\n');
            links = url_array.map((url) => {
                return axios.get(url).catch(err  => err)
                })
                Promise.all(links)
                .then(response => {
                    response.forEach(p =>{
                     //   console.log(p);
                       let filename = getFileName(p.config.url);
                       //console.log(filename);
                        fs.writeFile(filename, p.data ,'utf-8', err => {
                            if(err){
                                console.error(`Unable to write in file: ${err}`);
                                process.exit(1);
                            }
                        })
                    })
                })
                .catch(err => console.log(err));

// end of readFile
        })
    }