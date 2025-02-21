var _a;
function oblicz() {
    var liczba1 = parseFloat(document.getElementById('liczba1').value);
    var liczba2 = parseFloat(document.getElementById('liczba2').value);
    var znak = document.getElementById('znak').value;
    var wynik;
    switch (znak) {
        case '+':
            wynik = liczba1 + liczba2;
            break;
        case '-':
            wynik = liczba1 - liczba2;
            break;
        case '*':
            wynik = liczba1 * liczba2;
            break;
        case '/':
            if (liczba2 !== 0) {
                wynik = liczba1 / liczba2;
            }
            else {
                alert("Nie można dzielić przez zero!");
                return;
            }
            break;
        default:
            alert("Proszę wybrać operator");
            return;
    }
    document.getElementById('wynik').value = wynik.toString();
}
(_a = document.getElementById('obliczanie')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', oblicz);
//npx parcel public/kalkulator.html
