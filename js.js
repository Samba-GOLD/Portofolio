let menubtn = document.getElementById('menubtn')
menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})
let typed = new Typed('.auto-input' ,{
      strings: ['Auteur-Réalisateur!', 'Infographe!', 'Community Manager!', 'UI Designer!'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      loop: true,
})
