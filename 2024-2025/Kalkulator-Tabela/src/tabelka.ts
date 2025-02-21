document.addEventListener('DOMContentLoaded', () => {
    
    const monitorInput = document.getElementById('Monitor') as HTMLInputElement;
    const ramInput = document.getElementById('RAM') as HTMLInputElement;
    const procesorInput = document.getElementById('Procesor') as HTMLInputElement;
    const plytaInput = document.getElementById('Plyta') as HTMLInputElement;
    const przycisk = document.getElementById('przycisk') as HTMLInputElement;
    const wynik = document.getElementById('wynik') as HTMLSpanElement;
   
    const ceny: { [key: string]: number } = {
     Monitor: 670,
     RAM: 120,
     Procesor: 875,
     Plyta: 358,
    };
   
    przycisk.addEventListener('click', () => {
     let suma: number = 0;
   
     suma += ceny['Monitor'] * parseInt(monitorInput.value) || 0;
     suma += ceny['RAM'] * parseInt(ramInput.value) || 0;
     suma += ceny['Procesor'] * parseInt(procesorInput.value) || 0;
     suma += ceny['Plyta'] * parseInt(plytaInput.value) || 0;
   
     wynik.textContent = suma.toFixed(2);
    });
   });

//npx parcel public/tabelka.html