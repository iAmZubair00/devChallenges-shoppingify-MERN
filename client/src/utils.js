export const mergeItemsWithCategories = (items, categories) =>
  categories.map((category) => {
    return {
      ...category,
      items: items.filter(
        (item) => item.category_name === category.category_name
      ),
    };
  });

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
