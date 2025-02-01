document.addEventListener("DOMContentLoaded", function() {
    const shareIcon = document.getElementById("share_icon");
    const shareBox = document.querySelector(".share");

    shareIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // prevent immediate closing when clicking the button
        shareBox.classList.toggle("active");
        shareIcon.classList.toggle("active"); 
    });

    // close the share box when clicking outside
    document.addEventListener("click", function(event) {
        if (!shareIcon.contains(event.target) && !shareBox.contains(event.target)) {
            shareBox.classList.remove("active");
            shareIcon.classList.remove("active"); 
        }
    });
});
