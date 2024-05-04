// Ambil elemen yang akan diubah
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');

// Fungsi untuk mengambil tanggal dan waktu terkini dan memperbarui tampilan
function updateDateTime() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Format tanggal: DD/MM/YYYY
    const formattedDate = `${day}/${month}/${year}`;

    // Format waktu: HH:MM:SS
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Memperbarui tampilan dengan tanggal dan waktu terkini
    currentDateElement.textContent = formattedDate;
    currentTimeElement.textContent = formattedTime;
}

// Memanggil fungsi updateDateTime setiap detik
setInterval(updateDateTime, 1000);

// Memanggil fungsi updateDateTime untuk menginisialisasi nilai awal
updateDateTime();
