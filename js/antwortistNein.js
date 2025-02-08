
document.getElementById('switchButton2').addEventListener('click', function() {
    // Setze eine Kennzeichnung im localStorage
    localStorage.setItem('lastPage', 'antwortIstNein');
    // Wechsel zur Seite B
    window.location.href = 'antwortIstNein.html';
});

// Überprüfen, ob Seite B zuletzt besucht wurde
if (localStorage.getItem('lastPage') === 'antwortIstNein') {
    window.location.href = 'antwortIstNein.html';
}