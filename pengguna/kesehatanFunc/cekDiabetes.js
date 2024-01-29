function cekDiabetes() {
    // Mengambil nilai dari input
    var glucoseLevel = parseFloat(document.getElementById('glucoseLevel').value);
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;

    // Mengecek risiko diabetes
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Hasil Cek Diabetes</h2>';

    if (gender === 'male') {
        if (glucoseLevel >= 126) {
            resultDiv.innerHTML += '<p>Risiko diabetes tinggi. Segera konsultasikan dengan dokter.</p>';
        } else if (glucoseLevel >= 100 && glucoseLevel < 126) {
            resultDiv.innerHTML += '<p>Risiko diabetes sedang. Perhatikan pola makan dan gaya hidup.</p>';
        } else {
            resultDiv.innerHTML += '<p>Risiko diabetes rendah. Tetap jaga pola makan dan gaya hidup sehat.</p>';
        }
    } else if (gender === 'female') {
        if (glucoseLevel >= 126) {
            resultDiv.innerHTML += '<p>Risiko diabetes tinggi. Segera konsultasikan dengan dokter.</p>';
        } else if (glucoseLevel >= 100 && glucoseLevel < 126) {
            resultDiv.innerHTML += '<p>Risiko diabetes sedang. Perhatikan pola makan dan gaya hidup.</p>';
        } else {
            resultDiv.innerHTML += '<p>Risiko diabetes rendah. Tetap jaga pola makan dan gaya hidup sehat.</p>';
        }
    }
}
