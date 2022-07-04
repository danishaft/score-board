// TARGET the display screens
let screen1 = document.getElementById('score-home');
let screen2 = document.getElementById('score-away');
let btns = document.querySelectorAll('.btn')


let home = 0;
let away = 0;


// create some functions

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.target.classList;

        if (btnClass.contains('home1')) {
            home += 1;
            screen1.textContent = home;
        }

        if (btnClass.contains('home2')) {
            home += 2;
            screen1.textContent = home;
        }

        if (btnClass.contains('home3')) {
            home += 3;
            screen1.textContent = home;
        }
        if (btnClass.contains('away1')) {
            away += 1;
            screen2.textContent = away;
        }
        if (btnClass.contains('away2')) {
            away += 2;
            screen2.textContent = away;
        }
        if (btnClass.contains('away3')) {
            away += 3;
            screen2.textContent = away;
        }
    });
})




mm