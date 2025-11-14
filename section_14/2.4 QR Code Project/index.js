/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "What URL would you like to turn into a QR code?",
      name: "URL"
    },
  ])
  .then((answers) => {
    var qr_url = answers.URL
    var qr_png = qr.image(qr_url, { type: "png" });
    qr_png.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("URL.txt",qr_url,(err) => {
        console.log("Done!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error1");
    } else {
      console.log(error);
    }
  });
