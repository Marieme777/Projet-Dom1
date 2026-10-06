document.addEventListener("DOMContentLoaded", function () {
    function updateTotal() {
        let total = 0;
        
        const cardBodies = document.querySelectorAll(".card-body");

        cardBodies.forEach(card => {
        
            const unitPriceText = card.querySelector(".unit-price").textContent;
            const unitPrice = parseFloat(unitPriceText.replace("$", "").trim());

            const quantityText = card.querySelector(".quantity").textContent;
            const quantity = parseInt(quantityText);


            total += unitPrice * quantity;
        });

        document.querySelector(".total").textContent = total + " $";
    }
    
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    plusButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const quantityElement = this.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });
    });

    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    minusButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const quantityElement = this.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });
    });

    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            
            const card = this.closest(".card-body");
            if (card) {
                card.remove();
                updateTotal();
            }
        });
    });

    const heartButtons = document.querySelectorAll(".fa-heart");
    heartButtons.forEach(heart => {
        heart.addEventListener("click", function () {
            
            this.classList.toggle("text-danger"); 
            
            if (!this.classList.contains("text-danger")) {
                if (this.style.color === "red") {
                    this.style.color = "black";
                } else {
                    this.style.color = "red";
                }
            }
        });
    });


    updateTotal();
});