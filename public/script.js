// Fetch and display books in a list and dropdown
async function fetchBooks() {
    try {
        const response = await fetch('http://localhost:3001/books');
        const books = await response.json();
        const bookSelect = document.getElementById('bookSelect');
        const booksList = document.getElementById('booksList');

        booksList.innerHTML = ''; // Clear list
        bookSelect.innerHTML = '<option value="">Select a book</option>'; // Clear list

        books.forEach(book => {
        const option = document.createElement('option');
        option.value = book.bid; // Set value to book ID
        option.textContent = book.title;
        bookSelect.appendChild(option);

        // Add book to list
        const bookItem = document.createElement('div');
        bookItem.innerHTML = `<strong>${book.title}</strong> by ${book.author}<br>
                                <em>${book.genre}</em><br>
                                Published on ${new Date(book.published_date).toLocaleDateString()}<br>
                                <hr>`;
        booksList.appendChild(bookItem);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}
  
  
  
// Fetch and display reviews for the selected book
async function fetchReviews() {
    const bookId = document.getElementById('bookSelect').value;
    const reviewsContainer = document.getElementById('reviews');

    reviewsContainer.innerHTML = ''; // Clear previous reviews

    if (!bookId) {
        return; // Do nothing if no book is selected
    }

    try {
        const response = await fetch(`http://localhost:3001/reviews?book_id=${bookId}`);
        const reviews = await response.json();

        if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>No reviews available for this book.</p>';
        } else {
        reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.innerHTML =  `<strong>Rating:</strong> ${review.rating}<br>
                                    <strong>Comment:</strong> ${review.comment}<br>
                                    <hr>`;
            reviewsContainer.appendChild(reviewDiv);
        });
        }
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}
  
// Submit a new review for the selected book
// Submit a new review for the selected book
async function submitReview() {
    const bookId = document.getElementById('bookSelect').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    if (!bookId) {
        alert('Please select a book.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/reviews', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ book_id: parseInt(bookId, 10), rating, comment }) // Convert bookId to integer
        });
        const result = await response.json();
        if (response.ok) {
            alert('Review submitted successfully!');
            fetchReviews(); // Refresh reviews
        } else {
            alert('Failed to submit review.');
        }
    } catch (error) {
        console.error('Error submitting review:', error);
        alert('An error occurred while submitting the review.');
    }
}
  
  
// Submit a new book to the list
async function submitBook() {
const title = document.getElementById('bookTitle').value;
const author = document.getElementById('bookAuthor').value;
const publishedDate = document.getElementById('bookPublishedDate').value;
const genre = document.getElementById('bookGenre').value;
const description = document.getElementById('bookDescription').value;

try {
    const response = await fetch('http://localhost:3001/books', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
},
    body: JSON.stringify({ title, author, published_date: publishedDate, genre, description })
});

const result = await response.json();
if (response.ok) {
    alert('Book added successfully!');
    fetchBooks(); // Refresh book list and dropdown
    document.getElementById('addBookForm').reset(); // Clear the form
} else {
    console.error('Failed to add book:', result);
    alert('Failed to add book. Please check the console for details.');
}
} catch (error) {
    console.error('Error adding book:', error);
    alert('An error occurred while adding the book.');
}
}
  
// Initialize by fetching books
fetchBooks();