const APP_ID = "6df712b78ffa4c6da893c1bdd7b3d546"
const CHANNEL = "main"
const TOKEN = "007eJxTYOCa3956tNWzTHq/muWmoq6co0z+J7VPOmn/k86e4yOs+kmBwSwlzdzQKMncIi0t0STZLCXRwtI42TApJcU8yTjF1MTscEF8ckMgI4Pp/TpmRgYIBPFZGHITM/MYGADh6x5e"
let UID;

const client = AgoraRTC.createClient({mode: "rtc", codec: "vp8"})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()
    let player = `<div class="video-container" id="user-container-${UID}">
                            <div class="username-wrapper"><span class="user-name">My name</span></div>
                            <div class="video-player" id="user-${UID}"></div>
                        </div>`
    document.getElementById("video-streams").insertAdjacentHTML("beforeend", player)
    localTracks[1].play(`user-${UID}`)
    await client.publish(localTracks[0], localTracks[1])
}

joinAndDisplayLocalStream()
