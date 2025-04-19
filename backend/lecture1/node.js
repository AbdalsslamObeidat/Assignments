import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Please enter URL:",
      name: "url"
    }
  ])
  .then((answers) => {
    console.log(answers.url);

    // Create QR image
    const qr_svg = qr.image(answers.url);
    qr_svg.pipe(fs.createWriteStream('qr-img.png'));

    // Save input to a text file
    fs.writeFile("qr-input.txt", answers.url, (err) => {
      if (err) throw err;
      console.log("URL saved to qr-input.txt");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
  });
