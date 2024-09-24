// Form submission for Order, Billing, Inventory, and Dealer Onboarding

document.getElementById('orderForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Order placed successfully!');
    this.reset();
});

document.getElementById('billingForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Invoice generated!');
    this.reset();
});

document.getElementById('inventoryForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Inventory updated!');
    this.reset();
});

document.getElementById('dealerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dealer onboarded successfully!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    const leadTableBody = document.getElementById('leadTableBody');
    let leads = [];

    // Handle lead form submission
    leadForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const leadName = document.getElementById('leadName').value;
        const status = document.getElementById('status').value;
        const salesRep = document.getElementById('salesRep').value;
        const notes = document.getElementById('notes').value;

        const lead = { leadName, status, salesRep, notes };
        leads.push(lead);
        updateLeadTable();
        leadForm.reset();  // Clear the form after submission
    });

    // Function to update the table with current leads
    function updateLeadTable() {
        leadTableBody.innerHTML = ''; // Clear the table body
        leads.forEach((lead, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${lead.leadName}</td>
                <td>${lead.status}</td>
                <td>${lead.salesRep}</td>
                <td>${lead.notes}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editLead(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteLead(${index})">Delete</button>
                </td>
            `;

            leadTableBody.appendChild(row);
        });
    }

    // Function to edit a lead (simplified)
    window.editLead = function (index) {
        const lead = leads[index];
        document.getElementById('leadName').value = lead.leadName;
        document.getElementById('status').value = lead.status;
        document.getElementById('salesRep').value = lead.salesRep;
        document.getElementById('notes').value = lead.notes;

        // Remove the lead being edited
        leads.splice(index, 1);
        updateLeadTable();
    }

    // Function to delete a lead
    window.deleteLead = function (index) {
        leads.splice(index, 1);
        updateLeadTable();
    }
});
