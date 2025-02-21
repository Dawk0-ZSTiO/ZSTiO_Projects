document.addEventListener('DOMContentLoaded', function () {
    var monitorInput = document.getElementById('Monitor');
    var ramInput = document.getElementById('RAM');
    var procesorInput = document.getElementById('Procesor');
    var plytaInput = document.getElementById('Plyta');
    var przycisk = document.getElementById('przycisk');
    var wynik = document.getElementById('wynik');
    var ceny = {
        Monitor: 670,
        RAM: 120,
        Procesor: 875,
        Plyta: 358,
    };
    przycisk.addEventListener('click', function () {
        var suma = 0;
        suma += ceny['Monitor'] * parseInt(monitorInput.value) || 0;
        suma += ceny['RAM'] * parseInt(ramInput.value) || 0;
        suma += ceny['Procesor'] * parseInt(procesorInput.value) || 0;
        suma += ceny['Plyta'] * parseInt(plytaInput.value) || 0;
        wynik.textContent = suma.toFixed(2);
    });
});
