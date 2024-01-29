function cekNutrisi() {
    // Mengambil nilai dari input
    var foodName = document.getElementById('foodName').value;
    var calories = parseFloat(document.getElementById('calories').value);
    var protein = parseFloat(document.getElementById('protein').value);
    var carbs = parseFloat(document.getElementById('carbs').value);
    var fat = parseFloat(document.getElementById('fat').value);

    // Menghitung total kalori
    var totalCalories = calories + (protein * 4) + (carbs * 4) + (fat * 9);

    // Menampilkan hasil
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Hasil Cek Nutrisi untuk ' + foodName + '</h2>';
    resultDiv.innerHTML += '<p>Kalori: ' + totalCalories + ' kkal</p>';
    resultDiv.innerHTML += '<p>Protein: ' + protein + ' g</p>';
    resultDiv.innerHTML += '<p>Karbohidrat: ' + carbs + ' g</p>';
    resultDiv.innerHTML += '<p>Lemak: ' + fat + ' g</p>';
}
