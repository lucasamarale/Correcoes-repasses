/**
 * Class for managing the navigation toggle functionality.
 */
export class NavManager {
    /**
     * Creates an instance of NavManager.
     * @param {string} navListId - The ID of the navigation list element.
     * @throws Will throw an error if the navigation element is not found.
     */
    constructor(navListId) {
        this.navList = document.getElementById(navListId);
        if (!this.navList) {
            throw new Error('Elemento de navegação não encontrado.');
        }
        // Define o estado inicial como oculto
        this.navList.style.display = 'none';
    }

    /**
     * Toggles the display state of the navigation list between hidden and visible.
     */
    toggleNav() {
        this.navList.style.display = (this.navList.style.display === 'none' || this.navList.style.display === '') ? 'block' : 'none';
    }
}
