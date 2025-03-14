function enterUID(price) {
    document.getElementById("uidPopup").style.display = "flex";
    document.getElementById("uidInput").dataset.price = price;
}

function closePopup() {
    document.getElementById("uidPopup").style.display = "none";
}

function proceedPayment() {
    let uid = document.getElementById("uidInput").value;
    let price = document.getElementById("uidInput").dataset.price;
    let errorMessage = document.getElementById("error-message");

    if (uid.length < 8) {
        errorMessage.textContent = "UID कम से कम 8 अंकों का होना चाहिए!";
        return;
    } else if (uid.length > 20) {
        errorMessage.textContent = "UID 20 अंकों से ज्यादा नहीं हो सकता!";
        return;
    }

    errorMessage.textContent = "";
    
    let upiLink = `upi://pay?pa=subodhkumar0101041@axl&pn=DeveloperAgentSonar&mc=&tid=&tr=&tn=DiamondPurchase&am=${price}&cu=INR`;
    window.location.href = upiLink;
}
