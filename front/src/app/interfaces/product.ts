interface ProductData {
    id: number;
    title: string;
    desc: string;
    price: number;
    picture: string;
}

interface ProductView {
    id?: number;
    title?: string;
    desc?: string;
    price?: number;
    picture?: string;
    selected : boolean;
}

export { ProductData, ProductView };