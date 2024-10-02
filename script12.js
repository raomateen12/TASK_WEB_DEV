
window.onclick = function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (!event.target.matches('.menu-button') && !event.target.matches('.menu-icon')) {
        dropdownMenu.style.display = "none"; 
    }
};

function toggleMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    const isDisplayed = dropdown.style.display === 'block';
    
    dropdown.style.display = isDisplayed ? 'none' : 'block';

    if (!isDisplayed) {
        const menuButton = document.querySelector('.menu-button');
        const rect = menuButton.getBoundingClientRect(); 
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom}px`; 
    }
}
