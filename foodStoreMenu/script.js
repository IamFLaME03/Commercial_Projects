const dropdown = document.querySelectorAll(".dropdown-btn");

dropdown.forEach((i) => {
    i.addEventListener("click", function (e) {
        this.classList.toggle("active");
        const dropdownContent = this.nextElementSibling;
        let box;
        if(e.target.classList[0] === 'fa-solid'){
            box = e.target.parentElement;
        }else{
            box  = e.target;
        }
        
        if(dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            box.innerHTML = `${box.id} <i class="fa-solid fa-chevron-down"></i>`
        } else{
            dropdownContent.style.display = "block";
            box.innerHTML = `${box.id} <i class="fa-solid fa-chevron-up"></i>`
        }
    });
})