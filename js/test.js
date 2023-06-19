let i = 0;
function myFunction() {
    setInterval(() => {
        i = ++i;
        const djoka = 'rotate('+i+'deg)';
        console.log(djoka);
        document.getElementById("lala").style.transform = djoka;
    }, 1000)
}