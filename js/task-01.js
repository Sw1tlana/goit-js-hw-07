const categoryList = document.getElementById("categories");

const categoryListItem = categoryList.querySelectorAll("li.item");
console.log(`Numbers of categories:  ${categoryListItem.length}`);

categoryListItem.forEach(item => {
    const categoryTitle = item.querySelector("h2").textContent;

    const categoryElements = item.querySelectorAll("ul li");
    const numberCategory = categoryElements.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberCategory}`);

    categoryElements.forEach(element => {
      const elementText = element.textContent;
        element.classList.add('special');
      
    });
});