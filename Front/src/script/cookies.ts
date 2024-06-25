

export function getUserFromCookie() {
  const cookieString = decodeURIComponent(document.cookie);
  const cookieArray = cookieString.split(";");

  let userData = null;

  // Procurar pelo cookie 'User'
  for (const cookie of cookieArray) {
    const trimmedCookie = cookie.trim();
    if (trimmedCookie.startsWith("User=")) {
      const userJson = trimmedCookie.substring(5); // Extrair o valor JSON do cookie
      userData = JSON.parse(userJson); // Converter o valor JSON em objeto JavaScript
      break;
    }
  }

  return userData;
}

export function acceptPermissions() {
 
   
    const User = {
      nome: 'null',
      total_xp: 0,
      level: 0, 
      imagem: 'null',
      sign: false,
    };

      document.cookie = "cookiePermission=granted;max-age=31536000; path=/";
      document.cookie = "User=" + JSON.stringify(User) + "; max-age=1000; path=/";
    
      localStorage.setItem(
        "infoGame",
        JSON.stringify({
          difficult: "normal",
          qtd_life: "20",
          time: "20",
        })
      );

      document.getElementById("permission-message")!.style.display = "none";


}

export function rejectPermissions() {
  document.getElementById("permission-message")!.style.display = "none";
}

export function applyContent() {
  const body = document.getElementsByTagName("body")[0];

  if (!document.cookie.includes("cookiePermission=granted")) {
    setTimeout(function () {
      document.getElementById("permission-message")!.style.display = "block";

      const acceptButton = document.getElementById("acceptButton");
      const rejectButton = document.getElementById("rejectButton");

      acceptButton!.addEventListener("click", acceptPermissions);
      rejectButton!.addEventListener("click", rejectPermissions);
    }, 3000);
  }

  const permissionMessageDiv = document.createElement("div");
  permissionMessageDiv.id = "permission-message";
  permissionMessageDiv.innerHTML = `
          <p>Este site utiliza armazenamento local e cookies para melhorar sua experiência. Deseja permitir o uso do
              armazenamento
              local e cookies?</p>
          <div id='bloco_btn_cookies'>
          <button id="acceptButton">Permitir</button>
          <button id="rejectButton">Negar</button>
          </div>
      `;

  body.appendChild(permissionMessageDiv);
}

export function updateUserCookie(userCookies: any) {
  const permissionCookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)cookiePermission\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  if (permissionCookie !== "granted") {
    document.cookie = "User=; 01 Jan 1970 00:00:00 UTC; path=/;";
    return;
  }

  
  document.cookie = `User=${JSON.stringify(userCookies)};max-age=31536000; path=/`;
}

export function getTokenFromCookie() {

  const userCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('User='))
    ?.split('=')[1];
  
  if (!userCookie) {
    const User = {
      nick: 'null',
      nome: 'null',
      level: 0,
      imagem: 'null',
      sign: false,
      cod: '',
      SameSite: 'none'
    };
    const newUserCookie = `User=${encodeURIComponent(JSON.stringify(User))}; max-age=1000;  Path=/; SameSite=None; Secure`;
    document.cookie = newUserCookie;

    return User.cod;
  }
  
  const user = JSON.parse(decodeURIComponent(userCookie));
  const token = user.cod;

  return token;
}