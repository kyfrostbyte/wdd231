// templates.mjs

// Template for media card containing image, title and description for child pages
export function mediaCardTemplate(data) {
  return `
    <div class="media-card">
        <a href="${data.link}">
            <img class="media-card-image" src="${data.image}" alt="${data.name}" >
            <h3 class="media-card-title">${data.name}</h3>
        </a>
        <p>${data.description}</p>
     </div>`;
}

// Template for footer containing mailing address and phone number
export function footerTemplate(info) {
  const mailing = info.addresses.find((address) => address.type === "Mailing");
  const voice = info.contacts.phoneNumbers.find((n) => n.type === "Voice")?.phoneNumber;

  return `<section>
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}</p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
    </section>`;
}
