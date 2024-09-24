const dropdown = document.querySelectorAll(".dropdown-btn");

dropdown.forEach((i) => {
    i.addEventListener("click", function (e) {
        this.classList.toggle("active");
        const dropdownContent = this.nextElementSibling;
        let text  = e.target.id;
        if(dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            e.target.innerHTML = `${text} <i class="fa-solid fa-chevron-down"></i>`
        } else{
            dropdownContent.style.display = "block";
            e.target.innerHTML = `${text} <i class="fa-solid fa-chevron-up"></i>`
        }
    });
})