import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message:"Enter your url",
        name:"URL",
    }
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('url.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });