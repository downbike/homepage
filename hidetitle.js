function hide()
    {
        let b = document.querySelector(".hide_button");

        b.addEventListener("click",function (){
            let h = document.querySelector(".jumbotron");
            if (h.style.display === "none")
            {
                h.style.display = "block";
                b.innerHTML = "Hide Title Section";
            }
            else
            {
                h.style.display = "none";
                b.innerHTML = "Show Title Section";
            }
        });
    }
document.addEventListener('DOMContentLoaded', hide);
