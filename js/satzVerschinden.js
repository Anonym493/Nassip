window.onload = function() {
    // Überprüfen, ob die Seite bereits geladen wurde
    if (localStorage.getItem('pageLoaded')) {
        // Wenn ja, verstecke den Text
        document.getElementById('message').style.display = 'none';
    } else {
        // Wenn nein, setze den Flag dass die Seite geladen wurde
        localStorage.setItem('pageLoaded', 'true');
    }

     // Füge einen Ereignislistener zum Reset-Button hinzu
     document.getElementById('resetButton').onclick = function() {
         // Entferne den LocalStorage-Eintrag
         localStorage.removeItem('pageLoaded');

         // Zeige den Text wieder an
         document.getElementById('message').style.display = 'block';
     };
};