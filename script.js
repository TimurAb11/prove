document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


function handle() {
    alert('Форма Отправлена')
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
    input_values.push(inputs[i].value);
    }

    alert("Ваш Логин: " + input_values[0] + "\n" + "Ваш Пароль: " + input_values[1]);
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

var swipeArea = document.getElementById('swipeArea');
var hammer = new Hammer(swipeArea);

hammer.on('swipeleft', function() {
    alert('Свайп влево!');
});

hammer.on('swiperight', function() {
    alert('Свайп вправо!');
});

