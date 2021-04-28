# github-users
Use Github REST API to find github users.<br>
<p>Click <a href=''>Here</a> to see my work</p>

<h2>How to Run locally?</h2> use lite-server!<br>
<p>
Create a Project
At your command prompt, run:

mkdir litecd lite
This creates a new directory called lite and makes it our working directory.

In our lite directory, add an index.html file that looks like this:

Install lite-server
At the command prompt in your lite directory, run:

npm init -y
We use npm to initialize an empty project. The -y tells it to just use the defaults for any parameters.

To add lite-server to our project we can run:

npm install --save-dev lite-server
This installs the lite-server package and adds it to the devDependencies in our project’s package.json file.

"devDependencies": {    "lite-server": "^2.3.0"  }
Also, you can take a look at the node_modules folder and see that lite-server and its dependencies are all installed there.

Run lite-server
In your package.json file, modify the scripts object. Replace the contents with an entry called start that runs lite-server, like this:

"scripts": { "start": "lite-server"},
So now your package.json file should look like this:

To run lite-server and serve your index.html web page, run:

npm start
</p>
