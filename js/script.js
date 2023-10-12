function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let resultText = '';
    let explanation = ''; // Inisialisasi penjelasan

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        resultText = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
        explanation = `${temperature}°C * 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`; // Penjelasan rumus
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        resultText = `${temperature}°F is equal to ${celsius.toFixed(2)}°C.`;
        explanation = `(${temperature}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`; // Penjelasan rumus
    }

    // Tampilkan hasil dan penjelasan
    document.getElementById('result').textContent = resultText;
    document.getElementById('explanation').textContent = explanation;
}
