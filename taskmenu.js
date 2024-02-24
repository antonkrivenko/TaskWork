const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            select.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                options.classList.remove('active');           
            })
            option.classList.add('active');
        });
    });
});
document.querySelector('.smash').onclick = createtask


function createtask(){
    let a = document.querySelector('.createtask').value

    let input = document.createElement('input');

    input.className = 'input'

    let main = document.querySelector('main')

    input.value = a

    main.appendChild(input);
}
function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

let counter = 0;
function my_func(){
    document.getElementById('timer').innerHTML = ("Timer: " + counter  + "s");
    counter++
}
function startInterval(){
    inter = setInterval(my_func, 1000)
}
function stopInterval(){
    clearInterval(inter)
}
