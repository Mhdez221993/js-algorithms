## Client—Server Model

A client is a thing that talks to servers.
A server is a thing that talks to clients.
The client—server model is a thing made up of a
bunch of clients and servers talking to one another.

* A client is a machine that request data to the server
  * The browser is the clien
  * The client don't know what the server represent
  * The clien uses the DNS to query to find the IP address
  * Send a HTTP request to the server

* The server is a machine that speak back to the clien, sending data
  * let's use Google cloud platform
  * A server listen for request in specific port
  * If a cliennt uses HTTP request the default port is 80
  * You can test talking to a computer opening 2 command line in one type: `nc -l 8081`, on the other `nc 127.0.0.1 8081`, try writting someting you will seet in the other cammand line.
