// Add your existing JavaScript code for sliders and cost calculation here

// Function to show the billing dialog
function showBillingDialog() {
    var billingDialog = document.getElementById('billingDialog');
    billingDialog.style.display = 'block';
}

// Function to copy the billing image to the clipboard
function copyToClipboard() {
    var billingImage = document.getElementById('billingImage');
    var range = document.createRange();
    range.selectNode(billingImage);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Billing details copied to clipboard!');
}

// Function to close the billing dialog
function closeBillingDialog() {
    var billingDialog = document.getElementById('billingDialog');
    billingDialog.style.display = 'none';
}

// Attach event listener to the "Show Billing" button
document.getElementById('showBillingButton').addEventListener('click', showBillingDialog);

// Attach event listener to the "Copy" button
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

// Attach event listener to the "Download" button
document.getElementById('downloadButton').addEventListener('click', function () {
    // Logic to download the billing image
    var billingImage = document.getElementById('billingImage');
    var link = document.createElement('a');
    link.href = billingImage.src;
    link.download = 'billing_image.png';
    link.click();
});

// Attach event listener to the "Close" button
document.getElementById('closeButton').addEventListener('click', closeBillingDialog);
