# Star Wars Codex

## Project for Infinum job assignment made with React

### How to use:
#### `npm install` or `yarn install`
#### `npm start` or `yarn start`
#### Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Things I would have changed if I could
This project used url parameters for sorting and filtering, I used React-Router and my paramers were `/:page/:search` which turned out to cause a lot of problems and I just wasted a lot of time on bug fixing this. What I should have done instead is use parameters the standard way, ie. `/?page=2&search="luke"` and then just parsed the parameters with regex or something.

I should have also just used an existing pagination solution instead of creating one from scratch, because I didn't have a lot of time for this project and I could have used that time for other things.
