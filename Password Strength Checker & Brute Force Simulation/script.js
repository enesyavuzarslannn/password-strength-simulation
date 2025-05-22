const commonPasswords = [
    "123", "password", "123456", "admin", "qwerty", "abc123", "enes55", "0000", "1234"
  ];
  
  function simulateGuess() {
    const input = document.getElementById("passwordInput").value.trim();
    const resultArea = document.getElementById("resultArea");
  
    if (!input) {
      resultArea.innerHTML = "⚠️ Lütfen bir parola girin.";
      return;
    }
  
    let strength = "";
  
    if (commonPasswords.includes(input) || input.length <= 4) {
      strength = "Kolay";
    } else if (input.length < 8 || !/[A-Z]/.test(input) || !/\d/.test(input)) {
      strength = "Orta";
    } else {
      strength = "Zor";
    }
  
    resultArea.innerHTML = `🔍 Parola Güvenlik Seviyesi: <strong>${strength}</strong>`;
  }
  
  function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById("generatedPassword").innerText = `✅ Oluşturulan Parola: ${password}`;
  }