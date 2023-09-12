/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { error } from "console";
import inquirer from "inquirer";
// var qr = require('qr-image');
import qr from "qr-image";
import fs from "fs"

inquirer.prompt(
    [{
        message : "Type in your URL : ",
        name:"URL"

    }]).then((answer)=>{
        // console.log(answer);
        const url = answer.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    }).catch((error)=>{
        if(error.isTtyError){

        }
        else
        {

        }
    });
    