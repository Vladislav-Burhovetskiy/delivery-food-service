// eslint-disable-next-line no-undef
const { faker } = require("@faker-js/faker");
// eslint-disable-next-line no-undef
const MongoClient = require("mongodb").MongoClient;
// eslint-disable-next-line no-undef
const _ = require("lodash");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productsCollection = client
      .db("food-ordering")
      .collection("products");
    const categoriesCollection = client
      .db("food-ordering")
      .collection("categories");
      
    productsCollection.drop();
    categoriesCollection.drop();

    let categories = ["pizza", "drinks", "burgers"].map((category) => {
      return { name: category };
    });
    await categoriesCollection.insertMany(categories);

    // let imageUrls = [
    //   "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png",
    //   "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png",
    //   "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png",
    // ];

    let imageUrls = {
      pizza: [
        "/public/pizza.jpg",
      ],
      drinks: [
        "/public/cocktails.jpg",
      ],
      burgers: [
        "/public/burgers.jpg",
      ],
    };

    let products = [];
    for (let i = 0; i < 12; i += 1) {
      let categoryName = _.sample(categories).name;
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: categoryName,
        imageUrl: _.sample(imageUrls[categoryName]),
      };
      products.push(newProduct);
    }
    await productsCollection.insertMany(products);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();
