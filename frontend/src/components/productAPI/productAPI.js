import axios from "axios"

export async function fetchAllProduct() {
        await axios.get('https://dummyjson.com/products?limit=100')
            .then((res) => {
                // console.log(res.data.products)
                return res.data.products
            })
            // .catch((error) => console.log(error))
}