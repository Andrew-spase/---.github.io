// Лічильник часу до весілля
function updateCountdown() {
    const weddingDate = new Date("2025-05-18T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = `Залишилось днів: ${days}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Обробка RSVP-форми
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("rsvp-message").innerText = "Дякуємо за підтвердження!";
});

// Додавання пісень до списку
function addSong() {
    const songName = document.getElementById("song").value;
    if (songName) {
        const li = document.createElement("li");
        li.textContent = songName;
        document.getElementById("song-list").appendChild(li);
        document.getElementById("song").value = "";
    }
}

// Відтворення музики після натискання кнопки
document.getElementById("play-music").addEventListener("click", function () {
    const audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play().catch(error => console.log("Помилка відтворення аудіо: ", error));
        this.textContent = "🔇 Зупинити музику";
    } else {
        audio.pause();
        this.textContent = "🔊 Включити музику";
    }
});
