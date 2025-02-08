
document.getElementById('switchButton').addEventListener('click', function() {
    // Setze eine Kennzeichnung im localStorage
    localStorage.setItem('lastPage', 'antwortIstJa');
    // Wechsel zur Seite B
    window.location.href = 'antwortIstJa.html';
});

// Überprüfen, ob Seite B zuletzt besucht wurde
if (localStorage.getItem('lastPage') === 'antwortIstJa') {
    window.location.href = 'antwortIstJa.html';
}