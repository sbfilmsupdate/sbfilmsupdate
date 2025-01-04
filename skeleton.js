function imageLoaded(img) {
    const imageContainer = img.parentNode; // Skeleton প্যারেন্ট সিলেক্ট করা
    imageContainer.classList.remove('skeleton'); // Skeleton ক্লাস সরানো
    img.classList.add('loaded'); // লোডেড ক্লাস যোগ করা
    img.src = img.getAttribute('data-src'); // ইমেজ লোড করা
}

function loadImagesSequentially() {
    const images = document.querySelectorAll('.video-card img'); // সব ইমেজ সিলেক্ট করা
    let currentIndex = 0;

    function loadNextImage() {
        if (currentIndex >= images.length) return; // সব ইমেজ লোড হলে থামুন

        const currentImage = images[currentIndex];
        const imageContainer = currentImage.parentNode;

        currentImage.onload = () => {
            imageContainer.classList.remove('skeleton');
            currentImage.classList.add('loaded');
            currentIndex++;
            loadNextImage(); // পরবর্তী ইমেজ লোড শুরু
        };

        // Data-src থেকে ইমেজ লোড করা
        currentImage.src = currentImage.getAttribute('data-src');
    }

    loadNextImage(); // প্রথম ইমেজ লোড শুরু
}

// পেজ লোড হলে ইমেজ লোড শুরু করুন
window.onload = loadImagesSequentially;
