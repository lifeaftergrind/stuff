function toggleRecipeImage() {
  const recipeImage = document.querySelector('.recipe-image');
  const recipeMeta = document.querySelector('.recipe-meta');
  const recipeActions = document.querySelector('.recipe-actions');
  recipeImage.classList.toggle('hidden'); // Toggles the "hidden" class
  recipeMeta.classList.toggle('hidden');
  recipeActions.classList.toggle('hidden');
}

const toggleButton = document.querySelector('.recipe-action-button.toggle-image');
toggleButton.addEventListener('click', toggleRecipeImage);
