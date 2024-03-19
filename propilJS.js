document.addEventListener('DOMContentLoaded', function() {
              const asu = localStorage.getItem('namaorang');
            const asufot = localStorage.getItem('fotoorang');
            
            if (asu && asufot) {
                document.documentElement.style.display = 'block';
            } else {
                document.documentElement.style.display = 'none';
            }
            
                        // Mengambil data dari localStorage
            const username = localStorage.getItem('namaorang');
            const imageData = localStorage.getItem('fotoorang');

            // Menampilkan nama pengguna
          document.getElementById('nama').innerText = username;

            // Menampilkan foto pengguna jika ada
            if (imageData) {
                document.getElementById('pot').src = imageData;
            }                    
                    
                    
                    
            

    const tulisBioButton = document.getElementById('bio');
    const tampilBioParagraph = document.getElementById('tampilbio');

    tulisBioButton.addEventListener('click', function() {
        Swal.fire({
            title: 'Tulis Bio Anda',
            input: 'textarea',
            inputPlaceholder: 'Masukkan bio Anda di sini...',
            inputAttributes: {
                'aria-label': 'Bio',
            },
            showCancelButton: true,
            confirmButtonText: 'Simpan',
            cancelButtonText: 'Batal',
            showLoaderOnConfirm: true,
            preConfirm: (bio) => {
                localStorage.setItem('userBio', bio);
                return bio;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const bio = result.value;
                tampilBioParagraph.textContent = bio;
                tampilBioParagraph.style.display = 'block';
                tulisBioButton.style.display = 'none'; // Sembunyikan tombol setelah bio disimpan
                Swal.fire('Bio Anda berhasil disimpan!', '', 'success');
            }
        });
    });

    const storedBio = localStorage.getItem('userBio');
    if (storedBio) {
        tampilBioParagraph.textContent = storedBio;
        tampilBioParagraph.style.display = 'block';
        tulisBioButton.style.display = 'none'; // Sembunyikan tombol jika bio sudah ada
    }
        });
        
        let totalLikes = 0;
            for (let i = 1; i <= 7; i++) {
              let likeCount = localStorage.getItem("likeCount" + i);
              if (likeCount) {
                totalLikes += parseInt(likeCount);
              }
            }
            
            if (totalLikes == 0) {
              totalLikes = '0'
            }
            
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: `Kamu Sudah Like Produk Kami Sebanyak: ${totalLikes} kali bro!!`
            });
            

        
        
document.getElementById('kembali').addEventListener('click',function () {
  window.location.href='./index.html'
})


const nama = localStorage.getItem('namaorang')
  
  document.getElementById('logout').addEventListener('click',function () {
          Swal.fire({
            title: `Yakin ?? ${nama}`,
            text: "yakin logout bro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Hapus!!!",
                text: "Terimakasih Datang Lagi Ya!!",
                icon: "success"
              });
          
              localStorage.clear();
          
              setTimeout(() => {
                window.location.href = "index.html";
              }, 1000);
          
              setTimeout(() => {
                location.reload();
              }, 2000);
            }
          });
  })
  
      