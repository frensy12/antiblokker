function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    // SÅNN SERR JEG TRODDE AT INGEN PÅ HOLMEN SKOLE SKJØNTE KODING AHHHH
    var correctPassword = "leksersuger123";
    // JEG ER FOR LAT TIL OG ADDE PYTHON ELLER PHP TIL DEG MOHAAHAHAAHAHA
    // DU ER GOD ASSSSSSSS DMOHAHAAHAHAAHAHA

    if (enteredPassword === correctPassword) {
        document.getElementById("result").innerText = "Riktig passord, :D";
        window.open('https://shorturl.at/jwzB1');
    } else {
        document.getElementById("result").innerText = "Feil passord pookie bear :D";
    }
}