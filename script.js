// Create a button to trigger the total price calculation
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all price elements
    const prices = document.querySelectorAll(".price");
    let total = 0;

    // Sum up the prices
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Create a new row for the total
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Span across both columns
    totalCell.textContent = `Total Price: Rs ${total}`;
    totalRow.appendChild(totalCell);

    // Append the total row to the table
    document.querySelector("table").appendChild(totalRow);

    // Disable the button after the total is calculated to prevent multiple rows being added
    getSumBtn.disabled = true;
};

// Attach the event listener to the button
getSumBtn.addEventListener("click", getSum);
