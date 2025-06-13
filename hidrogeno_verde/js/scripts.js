document.addEventListener("DOMContentLoaded", function(){
    const calcularBtn = document.getElementById("calcular-btn");
    const consumoInput = document.getElementById("consumo");
    const tipoEnergiaSelect = document.getElementById("tipo-energia");
    const resultadosSection = document.getElementById("resultados");
    const ahorroKwhspan = document.getElementById("ahorro-Kwh");
    const ahorroCo2span = document.getElementById("ahorro-Co2");
    const ahorroUsdspan = document.getElementById("ahorro-Usd");

    calcularBtn.addEventListener("click", function(){
        const consumo = parseFloat(consumoInput.value);
        const tipoEnergia = tipoEnergiaSelect.value;

        if(isNaN(consumo) || consumo <= 50){
            alert("Por favor, ingrese un consumo valido mayor a 50kwh");
            return;
        }

        let factorAhorro;
        switch(tipoEnergia){
            case "hidrogeno":
                factorAhorro = 0.3;
                break;
            default:
            factorAhorro = 0;
        }

        const ahorroEnergetico = consumo * factorAhorro;
        const reduccionCo2 = ahorroEnergetico * 0.5;
        const ahorroEconomico = ahorroEnergetico * 630;

        ahorroKwhspan.textContent = ahorroEnergetico.toFixed(2);
        ahorroCo2span.textContent = reduccionCo2.toFixed(2);
        ahorroUsdspan.textContent = ahorroEconomico.toFixed(0);

        resultadosSection.classList.remove("hidden");
    });
});
