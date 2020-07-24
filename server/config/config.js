const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default:{
        //secret string used in generating token//
        SECRET: 'GRACEFAMILYPANTHERA',
        //apiKey and ApiSecret for sending messages
        APIKEY: 'UZOdGxj2iAYUV-2UqkZp7qveu4GsjzA69ePddPuS',
        //database URL to connect to//
        DATABASE: 'mongodb://localhost:27017/graceFamily'
    }
}

exports.get = function get(env){
    return config[env] || config.default
} 
