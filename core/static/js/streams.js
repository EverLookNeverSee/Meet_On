const APP_ID = "d333eda554ba48b89a30f6c9eb12fab7"
const CHANNEL = "main"
const TOKEN = "007eJxTYOh+yOC4lbHVbPeZ1LOCbRduRz43Lk3YdXFL1+L520XcPA8oMJilpJkbGiWZW6SlJZokm6UkWlgaJxsmpaSYJxmnmJqYsb5PTm4IZGQ4dHIVEyMDBIL4LAy5iZl5DAwAuHUhZA=="
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
