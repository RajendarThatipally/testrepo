const imageURL = "data:image/png;base64,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";
const productsList = [
    {
    name: "Product1",
    price: 200,
    imageURL: imageURL    
    },
    {
    name: "Product2",
    price: 300,
    imageURL: imageURL    
    },
    {
    name: "Product3",
    price: 400,
    imageURL: imageURL    
    }
];

//dsfg
//sadgsdag
//dagsag
//4th
//from test
export default productsList