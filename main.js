document.addEventListener('DOMContentLoaded', function() {
     const popup = document.getElementById('popup');
     const close = document.getElementById('close');
     const submit = document.getElementById('kirim-nama');
   
     // Periksa apakah pengguna sudah memberikan nama dan foto sebelumnya
     const namaOrang = localStorage.getItem('namaorang');
     const fotoOrang = localStorage.getItem('fotoorang');
   
     // Jika nama dan foto telah disimpan sebelumnya, sembunyikan popup
     if (namaOrang && fotoOrang) {
       popup.style.display = 'none';
     } else {
       popup.style.display = 'block';
     }
   
     submit.addEventListener('click', function() {
       const username = document.getElementById('username').value;
       const fileInput = document.querySelector('input[type="file"]');
   
       if (username.trim() === '') {
         alert('Silakan masukkan nama Anda!');
       } else if (!fileInput.files || !fileInput.files[0]) {
         alert('Silakan pilih file gambar!');
       } else {
         const file = fileInput.files[0];
         const reader = new FileReader();
   
         reader.onload = function(event) {
           const imageData = event.target.result;
   
           // Simpan nama dan foto ke dalam localStorage
           localStorage.setItem('namaorang', username);
           localStorage.setItem('fotoorang', imageData);
   
          // alert('Halo, ' + username + '! Selamat datang!');
           popup.style.display = 'none';
            const nama = localStorage.getItem('namaorang')
           const Toast = Swal.mixin({
             toast: true,
             position: "top-end",
             showConfirmButton: false,
             timer: 2000,
             timerProgressBar: true,
             didOpen: (toast) => {
               toast.onmouseenter = Swal.stopTimer;
               toast.onmouseleave = Swal.resumeTimer;
             }
           });
           Toast.fire({
             icon: "success",
             title: `Selamat datang ${nama}`
           });
         cuyy(3000)
           
         };
   
         // Baca data gambar sebagai URL data
         reader.readAsDataURL(file);
       }
     });
     
     const propal = localStorage.getItem('fotoorang');
     if (propal) {
       document.getElementById('poto').src = propal;
       document.getElementById('phuoto').src= propal
     }
     
   });
   
   
     
    document.getElementById('poto').addEventListener('click', function() {
       window.location.href = './propil.html';
     });
     document.getElementById('phuoto').addEventListener('click', function() {
       window.location.href = './propil.html';
     });
   
   
function cuyy(delay) {
    setTimeout(function() {
        window.location.reload();
    }, delay);
}


//ketik
async function ketik(id, textnya, delaynya) {
    const elem = document.getElementById(id);
    const delay = delaynya || 100;
    for (let i = 0; i < textnya.length; i++) {
        elem.textContent += textnya[i];
        await sleep(delay);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


window.addEventListener('scroll', function() {
  const navbar = document.getElementById('nab');
  const toko = document.querySelector('.toko')
  const napbar = document.querySelector('.cari-nav')
  if (window.scrollY > toko.offsetTop) {
    napbar.style.display='flex'
  }else{
    napbar.style.display='none'
  }
});


function tampilkanSemuaCard() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      card.style.display = 'block';
    });
  }

  function tampilkanCard(namaCard) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      if (card.querySelector('h3').innerText === namaCard) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  document.getElementById('basreng').addEventListener('click', function() {
    tampilkanCard('Basreng');
  });

  document.getElementById('lumpia').addEventListener('click', function() {
    tampilkanCard('Lumpia');
  });

  document.getElementById('bijiketapang').addEventListener('click', function() {
    tampilkanCard('Biji Ketapang');
  });

  document.getElementById('all').addEventListener('click', function() {
    tampilkanSemuaCard();
  });
  
  
  
  document.getElementById('cari').addEventListener('input', function() {
    const input = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(input)) {
            card.style.display = 'block';
            document.querySelector('.tambahan').style.display='none'
        } else {
            card.style.display = 'none';
            document.querySelector('.tambahan').style.display='block'
        }
    });
});



document.getElementById('carii').addEventListener('input', function() {
    const input = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});




function openPopup(popupId, level) {
    const popup = document.getElementById(popupId);
    const namane = document.getElementById('namane')
    popup.classList.add('active');
    const explanation = document.getElementById("popup-explanation-basreng");
    namane.textContent= level
    explanation.innerText = "Jajanan dari Yetim snack ini bernama Basreng dan ini cukup terkenal karena pedas karena ada memilih "  + level + ", ini rasanya sama saja dengan yang lainnya hanya yang membedakan itu pedas nya saja.";
}

function openPopupp(popupId, nama) {
    const popups = document.querySelectorAll('.popup-overlay');
    popups.forEach(popup => popup.classList.remove('active'));
    document.getElementById('namak').textContent=nama
    document.getElementById('namai').textContent=nama
    const popup = document.getElementById(popupId);
    popup.classList.add('active');
}


function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('active');
}
