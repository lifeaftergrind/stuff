<script type='text/javascript'>
const printButton1 = document.querySelector('.recipe-action-button.print-recipe-1');
printButton1.addEventListener('click', printRecipeCard);


function printRecipeCard() {

  // Create a new window for the print content
  const printWindow = window.open('', '', 'width=600,height=800');

  // Get the HTML content of the recipe card
  const recipeCardContent = document.querySelector('.recipe-card').outerHTML;

  printWindow.document.write(recipeCardContent);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

const printButton2 = document.querySelector('.recipe-action-button.print-recipe-2');
printButton2.addEventListener('click', printRecipeCard);


function printRecipeCard() {

  // Create a new window for the print content
  const printWindow = window.open('', '', 'width=600,height=800');

  // Get the HTML content of the recipe card
  const recipeCardContent = document.querySelector('.recipe-card').outerHTML;

  printWindow.document.write(recipeCardContent);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}
</script>
