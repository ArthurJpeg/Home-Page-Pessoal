function toggleContent(contentId) {
    const contents = document.querySelectorAll('.achievement-content');
    
    contents.forEach(content => {
        if (content.id !== contentId) {
            content.style.display = "none";
        }
    });

    const currentContent = document.getElementById(contentId);
    if (currentContent.style.display === "block") {
        currentContent.style.display = "none";
    } else {
        currentContent.style.display = "block";
    }
}
