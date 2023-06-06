# ZTRIPLE Server Proof of Concept

This repository is a part of a proof of concept developed as part of a graduation research project at the Amsterdam University of Applied Science. 
The project aims to establish synergy between a mobile streaming application and a smart TV streaming application. 
The key component of this proof of concept is a server script that acts as a communication bridge between the two clients: the mobile application and the smart TV application. 
The server script is built using Node.js and Express, with Socket.IO being leveraged for the bidirectional communication.

## Mobile client repository
The following link redirects to the mobile (Android) client repository: https://github.com/ZepaMK/ZTRIPLE-Android.<br>
The server allows communication between the mobile client and the smart TV client.
It's important to note that the smart TV application repository is not publicly accessible due to confidentiality rules.

# Features
* Node.js and Express server script
* Socket.IO integration for real-time biderectional communication

# Setup and Installation
To set up and run the proof of concept, follow the instructions below:

1. Clone this repository to your local machine.
2. Ensure that Node.js is installed on your system.
3. Open a terminal and navigate to the repository's directory.
4. Install the project dependencies by running the following command:
```
npm install
```
5. Start the server script by running the following command:
```
node server.js
```
6. If the console outputs "SERVER IS RUNNING" the server is running and ready to handle incoming connections.


