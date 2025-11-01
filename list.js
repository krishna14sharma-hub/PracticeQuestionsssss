document.addEventListener('DOMContentLoaded' , () => {
    // Get all heart butttons
    const favoriteButtons = document.querySelectorAll('.favorite-icon');

    /**
     * Toggle the favorite state (symbol and class ) when a heart button is clicked .
     * @param {event} event the click event object .
     */

    const toggleFavorite = (event) => {
        const button = event.currentTarget ;

        // user story : toggle the filled class 
        button.classList.toggle('filled')

        // user story : toogle the heart symbol
        if(button.classList.contains('filled')){
            // if the filled class is present , use the filed heart symbol 
            button.innerHTML = '&#10084;';
        }else{
            // if the filled class is present , use the empty heart symbol
            button.innerHTML = '&#9825;';
        }
    };

    // attach teh click event listener to each heart button 
    favoriteButtons.forEach(button => {
        button.addEventListener('click', toggleFavorite);
    });
});