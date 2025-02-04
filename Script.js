// 1. Navbar berubah warna saat di-scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#5a3e2b'; // Warna lebih gelap saat scroll
        navbar.style.transition = '0.5s';
    } else {
        navbar.style.backgroundColor = 'rgba(101, 67, 33, 0.9)'; // Warna awal
    }
});

// 2. Menampilkan deskripsi saat hover gambar menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const description = item.getAttribute('data-description');
        const descElement = document.createElement('div');
        descElement.classList.add('menu-description');
        descElement.textContent = description;
        item.appendChild(descElement);
    });

    item.addEventListener('mouseleave', () => {
        const descElement = item.querySelector('.menu-description');
        if (descElement) {
            descElement.remove();
        }
    });
});

// 3. Form kontak sederhana saat klik email
function showContactForm() {
    const name = prompt("Masukkan nama Anda:");
    const message = prompt("Apa pesan Anda?");
    if (name && message) {
        alert(`Terima kasih, ${name}! Pesan Anda: "${message}" telah diterima.`);
    } else {
        alert("Silakan lengkapi data sebelum mengirim pesan.");
    }
}

// 4. Form Pemesanan Menu saat klik email
const menuList = [
    "Kopi hitam", "Teh hangat", "Es Jeruk", "Es Teler",
    "Sosis bakar", "Mie goreng", "Bawang krispy", "Roti Bakar"
]; // Daftar menu yang tersedia

function showOrderForm() {
    const name = prompt("Masukkan nama Anda:");
    const order = prompt("Apa pesanan Anda?");
    
    if (name && order) {
        // Cek apakah pesanan ada di daftar menu
        const isAvailable = menuList.some(item => item.toLowerCase() === order.toLowerCase());
        if (isAvailable) {
            alert(`Terima kasih, ${name}! Pesanan Anda "${order}" sedang diproses.`);
        } else {
            alert(`Maaf, pesanan Anda "${order}" tidak tersedia di menu.`);
        }
    } else {
        alert("Silakan lengkapi nama dan pesanan Anda.");
    }
}