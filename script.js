function sendWhatsApp(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;
  const text = `Hi The Print House, my name is ${name}. Phone: ${phone}. I need: ${service}. Details: ${message}`;
  window.open(`https://wa.me/916301971213?text=${encodeURIComponent(text)}`, "_blank");
}
