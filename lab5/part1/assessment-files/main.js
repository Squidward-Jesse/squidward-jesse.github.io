// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-comments');
  const commentWrapper = document.getElementById('comment-wrapper');

  if (!toggleButton || !commentWrapper) return;

  commentWrapper.hidden = true;
  toggleButton.setAttribute('aria-expanded', 'false');
  toggleButton.textContent = 'Show comments';

  function toggleComments() {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    const next = !expanded;

    toggleButton.setAttribute('aria-expanded', String(next));
    commentWrapper.hidden = !next;
    toggleButton.textContent = next ? 'Hide comments' : 'Show comments';
  }

  toggleButton.addEventListener('click', toggleComments, { passive: true});
})

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
