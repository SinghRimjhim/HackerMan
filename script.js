let a = [
    "Initialising Hacking tool",
    "Connecting to Instagram",
    "Connecting to server 1",
    "Connection failed",
    "Retrying...",
    "Connecting to server 2",
    "Connected successsfully!",
    "Username therimjhimsingh",
    "Trying Brute Force...",
    "200k passwords tried",
    "Match not found",
    "Another 200k passwords tried",
    "Match found",
    "Accessing account...",
    "Hacked successfully!"
]

const sleep = async (seconds)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve(true)}, seconds * 1000)
    })
}

const showHack = async (message) => {
    text.innerHTML = ""
    for (let i = 0; i < message.length; i++) {
        text.innerHTML = message.slice(0, i+1) + "_"; 
        await sleep(0.1); // Short delay for typing effect
    }
    text.innerHTML = message; 
    await sleep(0.8);
};


(async ()=>{
    for(let i=0; i<a.length; i++){
        await showHack(a[i])
    }
})()

