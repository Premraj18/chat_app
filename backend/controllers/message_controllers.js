const Conversation = require('../models/conversationModel');
const Message = require('../models/messageModel')
const User = require('../models/userModel')

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId] },
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id)
        }

        //SOCKET IO FUTIONALITY WILL GO HERE

        // await conversation.save();
        // await newMessage.save();

        //this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage)

    }
    catch (error) {
        console.log('Error in sendMessage controller', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const getMessages = async (req,res) => {
    try {
        
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const converstation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate("messages")

        if(!converstation) return res.status(200).json([])

        const messages = converstation.messages;

        res.status(200).json(messages);
    } 
    catch (error) {
        console.log('Error in getmessage controller', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
module.exports = { sendMessage,getMessages }