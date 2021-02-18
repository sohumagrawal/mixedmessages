const messageComponents1 = ['What did the ', 'Why did the ', 'How did the '];
const messageComponents2 = ['chicken cross the road? : ', 'turkey cross the road? : ', 'rooster cross the road? :'];
const messageComponents3 = ['Because he was bored', 'Because he was depressed', 'Because she was hungry']

const generateMessage = () => {
    finalMessage = messageComponents1[Math.floor(Math.random * 2)] + messageComponents2[Math.floor(Math.random * 2)] + messageComponents3[Math.floor(Math.random * 2)];
    return finalMessage
}

generateMessage()