function oblicz() {
    
    const liczba1 = parseFloat((document.getElementById('liczba1') as HTMLInputElement).value);
    const liczba2 = parseFloat((document.getElementById('liczba2') as HTMLInputElement).value);
    const znak = (document.getElementById('znak') as HTMLSelectElement).value;
    let wynik: number;

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
            } else {
                alert("Nie można dzielić przez zero!");
                return;
            }
            break;
        default:
            alert("Proszę wybrać operator");
            return;
    }

    (document.getElementById('wynik') as HTMLInputElement).value = wynik.toString();
}


document.getElementById('obliczanie')?.addEventListener('click', oblicz);

//npx parcel public/kalkulator.html