import React from 'react'

const Shop = () => {
    // console.log("jnjn");
    // console.log(shop);
    let key = "shop"
    let url = '/shop/lmlml?c="men'

    if (url) {
        if (url) {
            const urlParams = url.substring(url.indexOf("/" + key + "/") + (key.length + 2));
            const [category, query] = urlParams.split("?");
            // return [category.split("-"), query];
            console.log([category.split("-"), query]);
        }
    }
    return (
        <div>index</div>
    )
}
export async function getServerSideProps(context) {
    console.log("--------------------------------------------------");
    console.log(context);
    return {
        props: {
            name: "Mohan"
        }
    }
}

export default Shop;

