// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS



    ]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});
client.on('guildMemberAdd', async (member) => {

    // when the account has been created in days 
    var today = new Date();
    let date1 = new Date(member.user.createdAt.toLocaleDateString());
    let date2 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let currentDate = new Date(date2)

    function getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }
    const createdAT = getDifferenceInDays(date1, currentDate)
    // end of the account date 



    // starting of doing the sjn code 
    if (createdAT < 15) { //if the user date is less than 15d he'll get سجن role 
        // he got sjn role 
        // he should get a message to text one of the sup
        let role = member.guild.roles.cache.get('920789547682521099') //the سجن role that the user will get 
        member.roles.add(role)
        const channel = client.channels.cache.get('822529785938182237') //The الدعم الفني role that will be sent to the User
        member.send(` تم سجنك الرجاء التوجه الى ${channel}`)
    } else {
        //if the user account age is more than 15d 
        //here it should send a greating message 
        //he got member role 
        // console.log('wellcome to conti')
        // let role = member.guild.roles.cache.get('921118984017944619')
        // member.roles.add(role)
    }
});


// Login to Discord with your client's token
client.login(token);

