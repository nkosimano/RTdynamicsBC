document.addEventListener('DOMContentLoaded', function() {
    const services = [
        {
            category: "Accounting Services",
            options: [
                "Annual Financial Statements",
                "Management Accounts",
                "Bank Reconciliations",
                "Monthly Bookkeeping",
                "Budgeting & Forecasting",
                "Financial Analysis & Reporting"
            ]
        },
        {
            category: "Taxation Services",
            options: [
                "Income Tax",
                "Provisional Income Tax",
                "Audit Facilitation with SARS"
            ]
        },
        {
            category: "Auditing & Assurance Services",
            options: [
                "Independent Reviews",
                "Internal Audit"
            ]
        },
        {
            category: "Payroll Services",
            options: [
                "Monthly EMP201 submissions",
                "Bi-Annual EMP501",
                "Annual IRP5s submissions",
                "Monthly Pay Slip compilation",
                "Regular UIF submissions"
            ]
        },
        {
            category: "Finance & Other Services",
            options: [
                "Business Development & Strategy",
                "Market Research & Business Plans",
                "Business Registrations",
                "CIPC Services",
                "CSD Services",
                "NCR Compliance Documents",
                "Financial analysis & Valuations",
                "Asset management"
            ]
        }
    ];

    const servicesFieldset = document.getElementById('services-fieldset');

    services.forEach(service => {
        const categoryFieldset = document.createElement('fieldset');
        categoryFieldset.innerHTML = `
            <legend>${service.category}</legend>
        `;

        service.options.forEach(option => {
            const optionId = `${service.category.toLowerCase().replace(/ /g, '-')}-${option.toLowerCase().replace(/ /g, '-')}`;
            categoryFieldset.innerHTML += `
                <input type="checkbox" id="${optionId}" name="services" value="${option}">
                <label for="${optionId}">${option}</label><br>
            `;
        });

        servicesFieldset.appendChild(categoryFieldset);
    });

    const form = document.getElementById('consultation-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Basic form validation
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        if (!nameInput.value.trim()) {
            isValid = false;
            nameInput.classList.add('error');
        } else {
            nameInput.classList.remove('error');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }

        if (isValid) {
            // If the form is valid, submit it
            // You can use AJAX or the default form submission here
            alert('Form submitted successfully!');
            // form.submit(); // Uncomment this to use default submission
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });
});