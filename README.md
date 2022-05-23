# Team Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This repository contains a command line application for generating a Team Profile webpage. It was written using JavaScript to run with Node.js. When run, the user is prompted to fill out information pertaining to each member in their team, starting with the manager, and with options for engineers and interns. Once the user is done adding team members, the generated file is output into the dist folder that is within the same directory as the application.

A sample team profile page created by the application has been added into the folder titled "sample".

## Links

[Code repository](https://github.com/wgrout87/Team-Profile-Generator)
[Application Demo]()

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

After downloading the code from the GitHub repository, "nmp i" should be run in the command line while in the base directory of the application. This will download all of the necessary dependencies for the application to be used.

## Usage

The application can be run from the command line while in the base directory where index.js is located by typing the command "node index". The user will be prompted to provide information for the team manager, and will then be prompted to choose whether to add more team members (either engineers or interns). All team members should be given a name, ID, and email address. Each position also requires a unique piece of information: Office Number for managers, GitHub username for engineers, and School for interns.

## License

Copyright 2022 William Grout

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

## Contributing

Any contributions to this open source project on GitHub are welcome. The standard fork and pull workflow that Git enables is the best way to contribute.

## Tests

Tests have been included to ensure the functionality of the unique class constructors this project uses. The lib folder contains the files with class constructors for an Employee class, and its extensions Manager, Engineer, and Intern. The __tests__ folder contains tests for each insuring that each functions to create their respective classes with the appropriate properties and methods. To run the tests, simply run the command "npm run test" from the base directory of the application.

## Questions

My GitHub Profile: [https://github.com/wgrout87](https://github.com/wgrout87)

wgrout87@gmail.com

Please feel free to email me with questions. Mention the Team Profile Generator in the subject line.