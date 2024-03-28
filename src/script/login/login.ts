const campo_email = document.getElementById("campo_email") as HTMLElement;
const campo_password = document.getElementById(
  "campo_password"
) as HTMLHtmlElement;
const text_error_email = document.getElementById("text_error_email");
HTMLElement;
const text_error_password = document.getElementById("text_error_password");
HTMLElement;
const btn_submite = document.getElementById("bnt_submite") as HTMLButtonElement;

// EVENTS
campo_email.addEventListener("change", handleEmail);
campo_password.addEventListener("input", handlePassword);
btn_submite.addEventListener("submit", submitForm);

function handleInput(
  elementId: string,
  errorElement: HTMLElement,
  errorMessage: string,
  isValid: boolean
): void {
  const element = document.getElementById(elementId) as HTMLElement;
  const outlineColor = isValid ? "blue" : "red";
  const borderColor = isValid ? "#3057db" : "#f331315e";
  const errorIcon = isValid ? "" : " \u2938";

  element.style.borderColor = borderColor;
  element.style.outlineColor = outlineColor;
  errorElement.textContent = isValid ? "" : errorMessage + errorIcon;
}

function handleEmail(e: Event): void {
  const value = (e.target as HTMLInputElement).value.trim();
  const isValid =
    value !== "" &&
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) !== null;
  handleInput("campo_email", text_error_email!, "Email inválido", isValid);
}

function handlePassword(e: Event): void {
  const value = (e.target as HTMLInputElement).value.trim();
  const isValid = value !== "";
  handleInput(
    "campo_password",
    text_error_password!,
    "Senha inválida",
    isValid
  );
}

function submitForm(e: Event) {
    window.location.href = "/";
  e.preventDefault();
}
