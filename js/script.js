if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('contact_button')) {
  document.getElementById('contact_button').addEventListener('click', () => {
    document.getElementById('footer').scrollIntoView({behavior: "smooth"})
  })
}