function likePost(button) {
    const likeCountSpan = button.querySelector('.like-count');
    let likeCount = parseInt(likeCountSpan.textContent, 10);
    likeCount++;
    likeCountSpan.textContent = likeCount;
}

function toggleComments(button) {
    const commentsDiv = button.nextElementSibling;
    if (commentsDiv.style.display === 'none') {
        commentsDiv.style.display = 'block';
    } else {
        commentsDiv.style.display = 'none';
    }
}

function addComment(input) {
    const commentText = input.value;
    if (commentText.trim() !== '') {
        const commentList = input.nextElementSibling;
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        input.value = '';
    }
}
