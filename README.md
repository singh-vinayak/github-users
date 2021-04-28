# github-users
Use Github REST API to find github users.<br>
<p>Click <a href='https://vinayak-singh5302.github.io/github-users/'>Here</a> to see my work</p>

<h2>How to Run locally?</h2> use lite-server!<br>
<p>
Create a Project
At your command prompt, run:

mkdir litecd lite <br>
This creates a new directory called lite and makes it our working directory.<br>

In our lite directory, add an index.html file that looks like this:

Install lite-server <br>
At the command prompt in your lite directory, run:

npm init -y <br>
We use npm to initialize an empty project. The -y tells it to just use the defaults for any parameters.<br>

To add lite-server to our project we can run:

npm install --save-dev lite-server<br>
This installs the lite-server package and adds it to the devDependencies in our project’s package.json file.<br>

"devDependencies": {    "lite-server": "^2.3.0"  }<br>
Also, you can take a look at the node_modules folder and see that lite-server and its dependencies are all installed there.<br>

Run lite-server
In your package.json file, modify the scripts object.<br> Replace the contents with an entry called start that runs lite-server, like this:<br>

"scripts": { "start": "lite-server"},<br>
So now your package.json file should look like this:

To run lite-server and serve your index.html web page, run:

npm start
</p>
