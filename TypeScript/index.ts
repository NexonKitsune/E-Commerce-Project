document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const introElement = document.querySelector(".intro") as HTMLElement;
        if (introElement) {
            introElement.style.opacity = "0";
            introElement.style.transform = "scale(0.9)";
            setTimeout(() => {
                introElement.style.display = "none";
            }, 1000); // รอให้อนิเมชันจบก่อนซ่อน intro
        }
    }, 4000); // แสดง intro เป็นเวลา 4 วินาที
});

