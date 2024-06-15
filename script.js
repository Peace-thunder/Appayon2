function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    const formData = {
        name: name,
        email: email,
        comment: comment
    };

    // Get comments from localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Add new comment to comments array
    comments.push(formData);

    // Save comments back to localStorage
    localStorage.setItem('comments', JSON.stringify(comments));

    // Show success message
    document.getElementById('commentMessage').style.display = 'block';

    // Reset the form
    document.getElementById('commentForm').reset();

    // Display comments
    displayComments();
});

function displayComments() {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    // Get comments from localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Loop through comments and display them
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        
        const commentName = document.createElement('div');
        commentName.classList.add('comment-name');
        commentName.textContent = comment.name;
        
        const commentText = document.createElement('div');
        commentText.classList.add('comment-text');
        commentText.textContent = comment.comment;
        
        commentDiv.appendChild(commentName);
        commentDiv.appendChild(commentText);
        commentList.appendChild(commentDiv);
    });
}

// Display comments when page loads
window.onload = displayComments;

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('animatedText');
    const texts = ["Appayon", "আপ্যায়ন"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        let displayedText = currentText.substring(0, charIndex);
        
        textElement.textContent = displayedText;

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                charIndex++;
                setTimeout(type, 100);
            } else {
                isDeleting = true;
                setTimeout(type, 1000);
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                setTimeout(type, 100);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }
    }

    type();
});