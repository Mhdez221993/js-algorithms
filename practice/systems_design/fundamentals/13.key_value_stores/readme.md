# Key-Value Stores

One of the most commonly used NoSQL paradigms today, the key-value store bases its data model on the associative array data type.

The result? A fast, flexible storage machine that resembles a hash table. That's right folks, our favorite friendly neighborhood data structure strikes again!

  A Key-Value Store is a flexible NoSQL database that's often used for caching
  and dynamic configuration. Popular options include DynamoDB, Etcd, Redis, and
  ZooKeeper.

![](./key_values_store.PNG)

## Etcd

  Etcd is a strongly consistent and highly available key-value store that's
  often used to implement leader election in a system.

## Redis

  An in-memory key-value store. Does offer some persistent storage options but is
  typically used as a really fast, best-effort caching solution. Redis is also often
  used to implement <b>rate limiting</b>.

## sZooKeeper

  ZooKeeper is a strongly consistent, highly available key-value store. It's
  often used to store important configuration or to perform leader election.
