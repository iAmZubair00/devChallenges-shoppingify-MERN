export const mergeItemsWithCategories = (items, categories) =>
  categories.map((category) => {
    return {
      ...category,
      items: items.filter(
        (item) => item.category_name === category.category_name
      ),
    };
  });

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
  listItems.forEach((listItem) => {
    if (listItem.item._id === id) {
      return true;
    }
  });
  return false;
};

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
