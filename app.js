// Получаем все элементы, открывающие модальные окна
const openModalButtons = document.querySelectorAll('.open-modal');
// Получаем все модальные окна
const modals = document.querySelectorAll('.modal');
// Получаем все кнопки закрытия
const closeButtons = document.querySelectorAll('.close');

// Функция для открытия модального окна
openModalButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
  });
});

// Функция для закрытия модального окна
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').style.display = 'none';
  });
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currendUser"));
  if (user) {
    window.location.href = "./pages/home/home.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.querySelector("#signinForm");

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#signinEmail").value.trim();
    const password = document.querySelector("#signinPassword").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      alert("Неверный email или пароль");
      return;
    }

    localStorage.setItem("currendUser", JSON.stringify(user));
    window.location.href = "./index.html";
  });
});



// function showPage(pageId) {
//   document.querySelectorAll(".page").forEach((page) => {
//       page.classList.remove("active");
//   });


//   const page = document.getElementById(pageId);
//   if (page) {
//       page.classList.add("active");
//   } else {
//      console.error(`Страница с id ${pageId} не найдена`);
     
      
//   }
// }

// function navigateTo(path) {
//   const pageId = path.slice(1);
//   history.pushState({pageId}, "", path);
//   showPage(pageId);
// }

// window.addEventListener("popstate", (event) => {
//   const pageId = event.state?.pageId || "home";
//   showPage(pageId);
// });


// (function init() {
//       const path = location.pathname;
//       const pageId = path.slice(1) || "home";
//       showPage(pageId);
//   })();

