document.getElementById('meme-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get input values
    const imageUrl = document.getElementById('image-url').value.trim();
    const topText = document.getElementById('top-text').value.trim();
    const bottomText = document.getElementById('bottom-text').value.trim();
  
    if (!imageUrl || !topText) return alert('Please fill in all required fields.');
  
    // Create meme container
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');
  
    // Add image
    const memeImage = document.createElement('img');
    memeImage.src = imageUrl;
    memeImage.alt = "Meme image";
    memeDiv.appendChild(memeImage);
  
    // Add top text
    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('text-overlay', 'top-text');
    topTextDiv.textContent = topText;
    memeDiv.appendChild(topTextDiv);
  
    // Add bottom text
    if (bottomText) {
      const bottomTextDiv = document.createElement('div');
      bottomTextDiv.classList.add('text-overlay', 'bottom-text');
      bottomTextDiv.textContent = bottomText;
      memeDiv.appendChild(bottomTextDiv);
    }
  
    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
      memeDiv.remove();
    });
    memeDiv.appendChild(deleteBtn);
  
    // Append meme to container
    document.getElementById('meme-container').appendChild(memeDiv);
  
    // Clear form fields
    document.getElementById('image-url').value = '';
    document.getElementById('top-text').value = '';
    document.getElementById('bottom-text').value = '';
  });
  