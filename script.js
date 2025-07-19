// Load and inject HTML files
function loadSection(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

loadSection("header", "sections/header.html");
loadSection("welcome", "sections/welcome.html");
loadSection("visiting", "sections/visiting.html");
loadSection("explore", "sections/explore.html");
loadSection("video", "sections/video.html");
loadSection("tickets", "sections/tickets.html");
loadSection("gallery", "sections/gallery.html");
loadSection("contacts", "sections/contacts.html");
loadSection("visiting", "sections/visiting.html");
loadSection("footer", "sections/footer.html");