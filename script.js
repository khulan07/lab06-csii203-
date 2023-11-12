document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Формыг шалгацгаая

    // Формын утгуудыг авах
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var organization = document.getElementById("organization").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;

    // Таны мэдээллийг харуулах элементийг сонгох
    var profileInfo = document.getElementById("profileInfo");

    // Харуулах HTML үгүй бол устгах
    while (profileInfo.firstChild) {
        profileInfo.removeChild(profileInfo.firstChild);
    }

    // Хэрэглэгчийн мэдээлэл харуулах HTML үүсгэх
    var profileList = document.createElement("ul");
    var nameItem = document.createElement("li");
    var organizationItem = document.createElement("li");
    var addressItem = document.createElement("li");
    var phoneItem = document.createElement("li");

    nameItem.textContent = "Нэр: " + firstName + " " + lastName;
    organizationItem.textContent = "Байгууллага: " + organization;
    addressItem.textContent = "Хаяг: " + address;
    phoneItem.textContent = "Утас: " + phone;

    profileList.appendChild(nameItem);
    profileList.appendChild(organizationItem);
    profileList.appendChild(addressItem);
    profileList.appendChild(phoneItem);

    profileInfo.appendChild(profileList);
});
