<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir Pendaftaran</title>
    <!-- Link ke CSS Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <script>
        // Fungsi untuk validasi formulir
        function validateForm() {
            // Mengambil nilai input
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var message = document.getElementById("message").value;

            // Validasi nama (tidak boleh kosong)
            if (name == "") {
                alert("Nama lengkap harus diisi.");
                return false;
            }

            // Validasi email (harus dalam format yang benar)
            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (email == "" || !emailPattern.test(email)) {
                alert("Masukkan email yang valid.");
                return false;
            }

            // Validasi nomor telepon (harus angka dan tidak kosong)
            if (phone == "" || isNaN(phone)) {
                alert("Masukkan nomor telepon yang valid.");
                return false;
            }

            // Validasi pesan (tidak boleh kosong)
            if (message == "") {
                alert("Pesan harus diisi.");
                return false;
            }

            // Jika semua validasi lolos, kirimkan formulir
            return true;
        }
    </script>
</head>
<body>

    <!-- Formulir Pendaftaran -->
    <div class="container mt-5">
        <h2 class="text-center mb-4">Formulir Pendaftaran</h2>
        <form onsubmit="return validateForm()">
            <!-- Nama -->
            <div class="mb-3">
                <label for="name" class="form-label">Nama Lengkap</label>
                <input type="text" class="form-control" id="name" placeholder="Masukkan nama lengkap" required>
            </div>

            <!-- Email -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Masukkan email" required>
            </div>

            <!-- Nomor Telepon -->
            <div class="mb-3">
                <label for="phone" class="form-label">Nomor Telepon</label>
                <input type="text" class="form-control" id="phone" placeholder="Masukkan nomor telepon" required>
            </div>

            <!-- Pesan -->
            <div class="mb-3">
                <label for="message" class="form-label">Pesan</label>
                <textarea class="form-control" id="message" rows="3" placeholder="Masukkan pesan" required></textarea>
            </div>

            <!-- Tombol Kirim -->
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Daftar</button>
            </div>
        </form>
    </div>

    <!-- Link ke JavaScript Bootstrap Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
