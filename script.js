document.addEventListener('DOMContentLoaded', function() {
    const servoControlBtn = document.getElementById('servoControlBtn');
    const connectionStatus = document.getElementById('connectionStatus');

    // Bağlantı durumu kontrolü
    async function updateConnectionStatus() {
        try {
            const response = await fetch('https://chimerical-maamoul-383309.netlify.app/api/status', {
            const response = await fetch('https://ikfl-nodemcu.netlify.app/api/status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'online' })
            });

            if (response.ok) {
                connectionStatus.textContent = 'Bağlantı Kuruldu';
                connectionStatus.style.color = 'green';
            } else {
                connectionStatus.textContent = 'Bağlantı Hatası';
                connectionStatus.style.color = 'red';
            }
        } catch (error) {
            connectionStatus.textContent = 'Bağlantı Hatası';
            connectionStatus.style.color = 'red';
        }
    }

    // Servo motoru kontrol etme
    async function controlServo() {
        try {
            const response = await fetch('https://chimerical-maamoul-383309.netlify.app/api/servo', {
            const response = await fetch('https://ikfl-nodemcu.netlify.app/api/servo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value: 90 })  // Servo'yu 90 dereceye döndür
            });

            if (response.ok) {
                alert('Servo başarılı bir şekilde döndürüldü!');
            } else {
                alert('Servo kontrol isteği başarısız!');
            }
        } catch (error) {
            alert('Servo kontrol hatası: ' + error);
        }
    }

    // Butona tıklanınca servo kontrolünü başlat
    servoControlBtn.addEventListener('click', function() {
        controlServo();
    });

    // Bağlantı durumu güncelleme
    updateConnectionStatus();
    setInterval(updateConnectionStatus, 1000);  // Her saniye bağlantıyı kontrol et
});
