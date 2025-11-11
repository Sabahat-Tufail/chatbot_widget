(function () {
    // Create the iframe element
    const iframe = document.createElement('iframe');

    // Set the source to your hosted widget HTML
    iframe.src = "https://sabahat-tufail.github.io/chatbot_widget/widget.html"; // <- Replace with actual URL

    // Style the iframe to float as a chat widget
    iframe.style.position = "fixed";
    iframe.style.bottom = "20px";
    iframe.style.right = "20px";
    iframe.style.width = "300px";
    iframe.style.height = "400px";
    iframe.style.border = "none";
    iframe.style.zIndex = "9999";
    iframe.style.borderRadius = "10px";
    iframe.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";

    // Append the iframe to the page
    document.body.appendChild(iframe);
})();

