async function searchTracks(query) {
    try {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
            headers: {
                'x-rapidapi-key': '8058407e03msha3ee0d8d08fe6c1p1167a5jsnd783b2c1a9ee',
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        });
        const data = await response.json();
        displaySong(data.data);
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

function displaySong(songs) {
    const songsList = document.getElementById('songsList');
    songsList.innerHTML = '';
    songs.forEach(song => {
        const songEle = document.createElement('div');
        songEle.classList.add('song');
        songEle.innerHTML = `<img class="songimage" src=${song.album.cover_big}> <p class="name">${song.title} - ${song.artist.name}</p>`;
        songEle.addEventListener('click', function () {
            playSong(song.preview, song);
        });
        songsList.appendChild(songEle);
    });
}

async function playSong(previewUrl, song) {
    try {
        document.querySelector('.songname').innerHTML = song.title;
        document.querySelector('.songartist').innerHTML = song.artist.name;
        const list = document.querySelectorAll('.songimage');
        list[list.length - 1].src = song.album.cover_big;
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = previewUrl;
        await audioPlayer.play();
    } catch (error) {
        console.error('Error playing song:', error);
    }
}

document.getElementById('searchBut').addEventListener('click', async function () {
    const searchInput = document.getElementById('searchIn').value.trim();
    if (searchInput !== '') {
        await searchTracks(searchInput);
    }
});
document.getElementById('searchIn').addEventListener('keypress', function (e) {
    document.getElementById('searchBut').click();
});