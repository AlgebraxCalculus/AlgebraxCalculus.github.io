document.addEventListener("DOMContentLoaded", function() {
    let messageBox = document.getElementById("messageBox");
    let contactBtn = document.getElementById("contactMeButton");

    function toggleMessageBox() {
        if (messageBox.style.display === "none" || messageBox.style.display === "") {
            messageBox.style.display = "block";
            setTimeout(() => {
                messageBox.classList.add("open");
            }, 10);
        } else {
            messageBox.classList.remove("open");
            setTimeout(() => {
                messageBox.style.display = "none";
            }, 300);
        }
    }

    contactBtn.addEventListener("click", toggleMessageBox);
    
    function sendMessage() {
        let recipient = document.getElementById("recipient").value.trim();
        let message = document.getElementById("message").value.trim();

        if (recipient === "" || message === "") {
            alert("Vui lòng nhập đầy đủ thông tin.");
            return;
        }
        // Kiểm tra định dạng email hợp lệ
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(recipient)) {
            alert("Email không hợp lệ.");
            return;
        }

        // Hiển thị modal xác nhận gửi tin nhắn
        document.getElementById("messageModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("messageModal").style.display = "none";
    }

    // Gán sự kiện cho nút gửi tin nhắn
    document.getElementById("sendBtn").addEventListener("click", sendMessage);

    // Gán sự kiện đóng modal
    document.getElementById("closeModal").addEventListener("click", closeModal);
});
