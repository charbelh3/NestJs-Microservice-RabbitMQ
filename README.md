We build a Producer and a Consumer that communicate through RabbitMQ in NestJs. We learn how to implement both event driven and RPC (Remote Procedure Call) solutions.

The "producer" project exposes 2 APIs, which will send messages to rabbitMQ (either emit an event, or send a message and wait for a reply).

The "consumer" project is a microservice application that is connected to the same rabbitMQ server. It consumes messages from the "orders-queue" queue, and handles them based on their pattern.
