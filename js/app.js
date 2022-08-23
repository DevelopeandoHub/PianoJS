window.onload = () => {
    
    var keys = document.querySelectorAll('.key');

    keys.forEach(function(key) {
        key.addEventListener('click', function() {
            var note = this.getAttribute('data-note');
            playNote(note);
        });
    });

    function playNote(note) {
        var audio = new Audio('notes/' + note + '.mp3');
        audio.play();
    }
}