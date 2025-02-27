import arcjet,{protectSignup} from "@arcjet/next";


const aj = arcjet({
    key:process.env.ARCJET_KEY,
    rules : [
        
        //protect sign up form
    protectSignup({
        email: {
          mode: "LIVE",
          block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
        },
        bots: {
          mode: "LIVE",
          allow: [],
        },
        rateLimit: {
          mode: "LIVE",
          interval: "1m",
          max: 50,
        },
      }),
    ],
    
        
    })
    


export default aj;