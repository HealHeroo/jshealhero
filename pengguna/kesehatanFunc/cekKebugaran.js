function hitungKebugaran() {
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var exerciseTime = document.getElementById('exerciseTime').value;
    var exerciseDays = document.getElementById('exerciseDays').value;
    var smoking = document.getElementById('smoking').value;

    var resultElement = document.getElementById('result');
    var suggestion = '';
    var warning = '';
    var sportSuggestion = '';

    if (gender === 'male') {
        if (age >= 18 && age <= 35 && exerciseTime >= 150 && exerciseDays >= 3) {
            suggestion = 'Pola latihan Anda sangat baik. Pertahankan!';
            sportSuggestion = 'Anda mungkin akan menyukai olahraga seperti berlari, angkat beban, atau bersepeda.';
        } else {
            suggestion = 'Pola latihan Anda perlu ditingkatkan. Pertimbangkan untuk menambah durasi atau frekuensi latihan.';
            sportSuggestion = 'Coba tambahkan olahraga kardio seperti berlari atau bersepeda ke rutinitas Anda.';
        }
    } else if (gender === 'female') {
        if (age >= 18 && age <= 35 && exerciseTime >= 150 && exerciseDays >= 3) {
            suggestion = 'Pola latihan Anda sangat baik. Pertahankan!';
            sportSuggestion = 'Anda mungkin akan menyukai olahraga seperti berlari, angkat beban, atau bersepeda.';
        } else {
            suggestion = 'Pola latihan Anda perlu ditingkatkan. Pertimbangkan untuk menambah durasi atau frekuensi latihan.';
            sportSuggestion = 'Coba tambahkan olahraga kardio seperti berlari atau bersepeda ke rutinitas Anda.';
        }
    }

    if (smoking === 'yes') {
        warning = 'Perhatikan bahwa merokok dapat merugikan kesehatan Anda. Pertimbangkan untuk berhenti merokok.';
    }

    resultElement.innerHTML = '<p class="text-info">' + suggestion + '</p><p class="text-warning">' + warning + '</p><p class="text-success">' + sportSuggestion + '</p>';
}