/**

 Copyright 2023 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

module.exports = function(RED) {
    function MsgCounterNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var count = 0;

        node.on('input', function(msg) {
            if(msg.topic === 'resetCounter') {
                count = 0;
                node.status({fill:"green", shape:"dot", text:`Count: ${count}`});
            } else if(msg.topic === 'msgCount') {
                msg.payload = count;
                node.send(msg);
            } else {
                count++;
                node.status({fill:"green", shape:"dot", text:`Count: ${count}`});
                node.send({payload: msg.payload, topic: msg.topic, count: count});
            }
        });
    }
    RED.nodes.registerType("msg-counter", MsgCounterNode);
}

