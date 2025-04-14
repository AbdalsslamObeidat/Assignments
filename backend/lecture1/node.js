import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs";
inquirer
  .prompt([
    {
        massage:"please enter url:",
        name:"url"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.url);
    
 
var qr_svg = qr.image(answers.url);
qr_svg.pipe(fs.createWriteStream('qr-img.svg'));
fs,writeFile("qr-inputs",answers.url,(err)=>{if(err) throw err;})
 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
  
  
