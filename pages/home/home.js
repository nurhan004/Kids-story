document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currendUser"));
    if (!user) {
      window.location.href = "../../index.html";
    } else {
      document.getElementById("userName").textContent = user.name;
    }
  
    const logoutBtn = document.querySelector("#logoutBtn");
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currendUser");
      window.location.href = "../../index.html";
    });
  });

const openModalButtons = document.querySelectorAll('.open-modal');

const modals = document.querySelectorAll('.modal');

const closeButtons = document.querySelectorAll('.close');


openModalButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); 
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
  });
});


closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').style.display = 'none';
  });
});


window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});  



document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currendUser"));
    

    if (!user) {
        window.location.href = "../../index.html";
        return; 
    }

 
    const userNameElement = document.getElementById("userName");
    if (userNameElement) {
        userNameElement.textContent = user.name;
    }


    const logoutBtn = document.querySelector("#logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("currendUser"); 
            window.location.href = "../../index.html"; 
        });
    } else {
        console.error("Кнопка выхода не найдена.");
    }
});



var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}



  function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
  }

  function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
  }

  let profileDropdownList = document.querySelector(".profile-dropdown-list");
  let btn = document.querySelector(".profile-dropdown-btn");
  
  let classList = profileDropdownList.classList;
  
  const toggle = () => classList.toggle("active");
  
  window.addEventListener("click", function (e) {
    if (!btn.contains(e.target)) classList.remove("active");
  });

  

  