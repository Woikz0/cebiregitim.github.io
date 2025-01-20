    // Kullanıcı adı ve şifre kontrol 
    
    document.getElementById('loginForm').addEventListener('submit', (e) => validateForm(e))

    function validateForm(event) {
        event.preventDefault(); // Formun sayfayı yenilemesini engelle
  
        // Kullanıcı adı ve şifreyi al
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
  
        // Hata mesajı kutusunu sıfırlama
        document.getElementById("error-message").textContent = "";
  
        // Örnek kullanıcı adı ve şifre
        var validUsername = "cebiradmin2025";
        var validPassword = "admin2025";
  
        // Kullanıcı adı ve şifreyi kontrol et
        if (username === validUsername && password === validPassword) {
          alert("Giriş başarılı!");
          // Başarılı girişte yapılacak işlemler (yeni sayfa, ana sayfa vs.)
          window.location.href = "adminpanel.html"; // Örnek olarak başka bir sayfaya yönlendirme
        } else {
          // Hata mesajını göster
          document.getElementById("error-message").textContent = "Geçersiz kullanıcı adı veya şifre!";
        }
      }