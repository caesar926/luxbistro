/*document.addEventListener("DOMContentLoaded", function () {


    const dateInput = document.getElementById("date");

    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    const form = document.getElementById("reservationForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const guests = document.getElementById("guests").value;

            if (!name || !date || !time || !guests) {
                alert("Please fill in all fields");
                return;
            }

            const selectedHour = parseInt(time);

            if (selectedHour < 8 || selectedHour > 22) {
                alert("Reservations are only available between 8AM and 10PM.");
                return;
            }

            const button = form.querySelector("button");
            button.innerText = "Processing...";
            button.disabled = true;

            setTimeout(() => {
                window.location.href =
                    `confirmation.html?name=${encodeURIComponent(name)}&date=${date}&time=${time}&guests=${encodeURIComponent(guests)}`;
            }, 1000);
        });
    }

    

    const details = document.getElementById("details");

if (details) {

    console.log("Confirmation page loaded");

    const params = new URLSearchParams(window.location.search);

    const name = params.get("name");
    const date = params.get("date");
    const time = params.get("time");
    const guests = params.get("guests");

    console.log("PARAMS:", name, date, time, guests);

    if (!name || !date || !time || !guests) {
        details.innerHTML = "No reservation details found.";
        return;
    }

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    details.innerHTML = `
        Thank you <strong>${name}</strong>! <br><br>
        Your table is booked for <strong>${formattedDate}</strong> at
        <strong>${time}:00</strong><br>
        for <strong>${guests}</strong>.
    `;
}


});*/

/* =========================
   RESERVATION PAGE
========================= */

const form = document.getElementById("reservationForm");

if (form) {

    const dateInput = document.getElementById("date");

    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        if (!name || !date || !time || !guests) {
            alert("Please fill in all fields");
            return;
        }

        window.location.href =
            `confirmation.html?name=${encodeURIComponent(name)}&date=${date}&time=${time}&guests=${encodeURIComponent(guests)}`;
    });
}

/* =========================
   CONFIRMATION PAGE
========================= */

const details = document.getElementById("details");

if (details) {

    const params = new URLSearchParams(window.location.search);

    const name = params.get("name");
    const date = params.get("date");
    const time = params.get("time");
    const guests = params.get("guests");

    if (!name || !date || !time || !guests) {
        details.innerHTML = "No reservation details found.";
    } else {

        const formattedDate = new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        details.innerHTML = `
            Thank you <strong>${name}</strong>! <br><br>
            Your table is booked for <strong>${formattedDate}</strong> at
            <strong>${time}:00</strong><br>
            for <strong>${guests}</strong>.
        `;
    }
}

