function studentcheck(){
    let email = document.getElementById("exampleFormControlInput1").value;
    let password = document.getElementById("exampleFormControlInput2").value;
    if (email === "aliyanstd" && password==="123456") {
        window.location.href="OnlineAssessments.html";
    }
    else{
        window.location.href="Login.html";
        confirm("Wrong Username or Password")

    }
}
function admincheck(){
    let email = document.getElementById("exampleFormControlInput1").value;
    let password = document.getElementById("exampleFormControlInput2").value;
    if (email === "aliyanadm" && password=="123456") {
        window.location.href="AdminDashboard.html";
    }
    else{
        window.location.href="AdminLogin.html";
        alert("Wrong Username or Password")

    }
}

function uploadPDF() {
    alert("Assignment Sent to Students");
    const pdfFileInput = document.getElementById('pdfFileInput');
    const downloadLink = document.getElementById('downloadLink');

    if (pdfFileInput.files.length === 0) {
        alert('Please select a PDF file to upload.');
        return;
    }

    const uploadedFile = pdfFileInput.files[0];

    const fileName = `uploaded_pdf_${Date.now()}.pdf`;

    const formData = new FormData();
    formData.append('pdfFile', uploadedFile, fileName);

    downloadLink.href = `download.html?fileName=${fileName}`;
    downloadLink.style.display = 'block';
}


function uploadPDF1() {
    alert("Assignment Solution Sent to Admin");
    const pdfFileInput = document.getElementById('pdfFileInput');
    const downloadLink = document.getElementById('downloadLink');

    if (pdfFileInput.files.length === 0) {
        alert('Please select a PDF file to upload.');
        return;
    }

    const uploadedFile = pdfFileInput.files[0];

    const fileName = `uploaded_pdf_${Date.now()}.pdf`;

    const formData = new FormData();
    formData.append('pdfFile', uploadedFile, fileName);

    downloadLink.href = `download.html?fileName=${fileName}`;
    downloadLink.style.display = 'block';
}