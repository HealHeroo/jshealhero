function hitungPolaTidur() {
    var sleepTime = document.getElementById('sleepTime').value;
    var wakeTime = document.getElementById('wakeTime').value;

    var sleepDate = new Date('2021-01-01 ' + sleepTime);
    var wakeDate = new Date('2021-01-01 ' + wakeTime);

    var sleepHours = (wakeDate - sleepDate) / (1000 * 60 * 60);

    var resultElement = document.getElementById('result');
    if (sleepHours >= 7 && sleepHours <= 9) {
        resultElement.innerHTML = '<p class="text-success">Selamat! Pola tidur Anda sangat sehat.</p>';
    } else if (sleepHours >= 6 && sleepHours < 7) {
        resultElement.innerHTML = '<p class="text-warning">Pola tidur Anda cukup baik, tetapi sebaiknya tidur lebih lama.</p>';
    } else if (sleepHours > 9) {
        resultElement.innerHTML = '<p class="text-danger">Anda mungkin tidur terlalu lama, pertimbangkan untuk mengatur waktu tidur Anda.</p>';
    } else {
        resultElement.innerHTML = '<p class="text-danger">Anda mungkin kurang tidur, pertimbangkan untuk tidur lebih lama.</p>';
    }
}