

fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        const accountIcon = document.getElementById("accountIcon");
        const accountDialog = document.getElementById("accountDialog");
        const closeDialog = document.getElementById("closeDialog");

        if (accountIcon && accountDialog && closeDialog) {
            accountIcon.addEventListener("click", (event) => {
                event.preventDefault();
                accountDialog.showModal();
            });

            closeDialog.addEventListener("click", () => {
                accountDialog.close();
            });

            accountDialog.addEventListener("click", (event) => {
                if (event.target === accountDialog) {
                    accountDialog.close();
                }
            });
        } else {
            console.error("Dialog elements not found. Check if dialog.html is loaded correctly.");
        }
    })
    .catch(error => console.error("Error loading dialog:", error));