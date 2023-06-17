# node-red-contrib-msg-counter

This is a  Node-RED node that counts messages passing through it. 

## Description

The `msg-counter` node is an easy way to monitor and count the flow of messages in your Node-RED applications. Each time a message passes through this node, it increments a counter and sends the message as a JSON payload which includes the message's payload, topic, and the current count. If the node receives a message with the topic 'resetCounter', it resets the counter to 0. If it receives a message with the topic 'msgCount', it sends a message with the count value in the payload. 

The current count value is also displayed in the node status in the Node-RED editor.

## Potential Uses

The `msg-counter` node can be particularly useful in the following scenarios:

1. **Debugging and Development**: Keeping track of how many messages have passed through a particular point in your flows can help identify issues and understand the behavior of your flows.


## Installation

To install this node, you can either install it from the Node-RED palette manager or run the following command in your Node-RED user directory (typically `~/.node-red`):

```bash
npm install node-red-contrib-msg-counter
```

## Usage

Once the node is installed, it will appear in the Node-RED palette. You can then drag and drop it onto your flow canvas. Any messages that pass through the node will increment the counter and be enriched with a `count` property.

## Author

- Harshad Joshi - Initial work - [GitHub](https://github.com/hj91)

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Potential ToDo

1. **Rate Limiting**: You could use this node to implement basic rate limiting by keeping track of how many messages are being processed and taking action if the count exceeds a certain threshold.

2. **Message Sampling**: In cases where you're dealing with a high volume of messages and only need to process a sample, this node could be used to only process every Nth message.

