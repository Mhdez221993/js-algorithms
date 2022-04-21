# Network Protocols

IP packets. TCP headers. HTTP requests.

As daunting as they may seem, these low-level networking concepts are essential to understanding how machines in a system communicate with one another. And as we all know, proper communication is key for thriving relationships!

## IP

Stands for Internet Protocol. This network protocol outlines how almost
all machine-to-machine communications should happen in the world. Other
protocols like TCP, UDP and HTTP are built on top of IP.

## TCP

Network protocol built on top of the Internet Protocol (IP). Allows for
ordered, reliable data delivery between machines over the public internet by
creating a connection.

TCP is usually implemented in the kernel, which exposes sockets to
applications that they can use to stream data through an open connection.

## HTTP

The HyperText Transfer Protocol is a very common network protocol implemented on top
of TCP. Clients make HTTP requests, and servers respond with a response.

Requests typically have the following schema: <br>
<pre>
host: string (example: algoexpert.io)
port: integer (example: 80 or 443)
method: string (example: GET, PUT, POST, DELETE, OPTIONS or PATCH)
headers:  pair list (example: "Content-Type" =&gt; "application/json")
body: opaque sequence of bytes
</pre>

Responses typically have the following schema: <br>
<pre>status code: integer (example: 200, 401)
headers: <key, value=""> pair list (example: "Content-Length" =&gt; 1238)
body: opaque sequence of bytes</key,></pre>

## IP Packet

Sometimes more broadly referred to as just a (network) packet, an IP
packet is effectively the smallest unit used to describe data being sent over
IP, aside from bytes. An IP packet consists of:

an IP header, which contains the source and destination
IP addresses as well as other information related to the network

a payload, which is just the data being sent over the network

# Notes

* Let's define what is Protocols
  * Is an understanding of common communications
  * Is how two maching interact one onother
  * The type of messages
  * The response
  * The rules

* IP
  * stand for Internet Protocol
  * the moder internet runs on IP
  * when data is sent is came in form on IP packages
  * IP packages is made of bytes
  * have 2 main sections, the `Header` and `Data`

* TCP
  * stand for Transmision Control Protocol
  * build on  top of IP
  * orginize the IP packages
  * more power wrapper for IP packages

* HTTP
  * stand for hyper text transfer protocol
  * introduces request-response paradigme
