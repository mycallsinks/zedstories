let lastScrollTop = 0;
let scrolledPastPoint = false;
const scrollThreshold = 60; // Adjust this value to determine when the header behavior starts

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        if (scrolledPastPoint) {
            document.querySelector('.headers').style.transform = 'translateY(-100%)';
        }
    } else {
        // Scroll up
        if (scrolledPastPoint) {
            document.querySelector('.headers').style.transform = 'translateY(0)';
        }
    }

    if (currentScroll > scrollThreshold) {
        scrolledPastPoint = true;
    } else {
        scrolledPastPoint = false;
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);



// grab the elements 

function handleReadMoreClick(event) {
    event.preventDefault();

    var blogPost = event.target.closest('.blog-post');
    var blogId = blogPost.getAttribute('data-blog-id');

    var blogCategory = blogPost.querySelector('.card-title').innerHTML;
    var blogTitle = blogPost.querySelector('.body_titles').innerHTML;
    var halfStory = blogPost.querySelector('.blog_story_half').innerHTML;
    var blogAuthor = blogPost.querySelector('.fa-user').innerHTML;
    var blogDate = blogPost.querySelector('.blog_date').innerHTML;
    var blogImage = blogPost.querySelector('img').getAttribute('src');

    // Set values in sessionStorage with the blog ID
    sessionStorage.setItem('blogId', blogId);
    sessionStorage.setItem('blogTitle', blogTitle);
    sessionStorage.setItem('blogCategory', blogCategory);
    sessionStorage.setItem('halfStory', halfStory);
    sessionStorage.setItem('blogAuthor', blogAuthor);
    sessionStorage.setItem('blogDate', blogDate);
    sessionStorage.setItem('blogImage', blogImage);
    var constructedURL = 'blogdisplay.html';
    window.location.replace(constructedURL);
}


// console.log('Working' + handleReadMoreClick());

// console.log('Hello World')




function search(event) {
    event.preventDefault(); // Prevent form submission

    var query = document.getElementById('searchInput').value;
    if (query.trim() !== '') {
        // Perform client-side search
        var results = performSearch(query);
        displaySearchResults(results);
    }
}



function performSearch(query) {
    // Sample search logic (replace with your actual search implementation)
    var sampleData = [
        { title: 'Sample Result 1' },
        { title: 'Sample Result 2' },
        { title: 'Sample Result 3' }
    ];

    return sampleData.filter(function(item) {
        return item.title.toLowerCase().includes(query.toLowerCase());
    });
}

function displaySearchResults(results) {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResultsContainer.textContent = 'No results found.';
        return;
    }

    var resultList = document.createElement('ul');
    results.forEach(result => {
        var listItem = document.createElement('li');
        listItem.textContent = result.title;
        resultList.appendChild(listItem);
    });
    searchResultsContainer.appendChild(resultList);
}




// lifestyle form




function changeSub() {
    var subBtn = document.querySelector('.subscribe button');
    event.preventDefault();

    // alert if email not filled 
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    // check if email is not empty and contains '@'
    if (email !== "" && email.includes('@')) {
        subBtn.innerHTML = 'Subscribing...';

        // simulate a delay of 5 seconds (5000 milliseconds) and then change the text
        setTimeout(function() {
            subBtn.innerHTML = 'Subscribed Successfully!';
            // revert back to "Subscribe" after 5 seconds
            setTimeout(function() {
                subBtn.innerHTML = 'Subscribe';
            }, 3000);
        }, 2000);
    } else {
        alert('Please enter a valid email address.');
    }
}

