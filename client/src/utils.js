export const restructureItemsForCategories = (items) =>{
  let categoryIds = removeArrayDuplicates(items.map(item=> item.category._id));
  return categoryIds.map(id => {
    let thisCategoryItems = items.filter(item=> item.category._id===id);
    return {items: thisCategoryItems}
  })
}

export const mergeItemsInLists = (items, lists) =>
  lists.map((list) => {
    return {
      ...list,
      items: items.filter((item) => item.shoppingListId === list._id),
    };
  });

export const mergeListItemsWithCategories = (listItems, categories) => {
  //console.log(listItems);
  return categories.map((category) => {
    return {
      ...category,
      items: listItems?.filter(
        (listItem) => listItem.item.category_name === category.category_name
      ),
    };
  });
};

export const itemAlreadyInList = (id, listItems) => {
  return listItems.some((listItem) => listItem.item._id === id);
};

export const removeArrayDuplicates = (array) => {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

// var categories = [
//   { category_name: "fruit" },
//   { category_name: "vegi" },
//   { category_name: "gari" },
// ];
// var items = [
//   {
//     item_name: "apple",
//     category_name: "fruit",
//   },
//   {
//     item_name: "mango",
//     category_name: "fruit",
//   },
//   {
//     item_name: "banana",
//     category_name: "fruit",
//   },
// ];

// console.log(mergeItemsWithCategories(items,categories))
