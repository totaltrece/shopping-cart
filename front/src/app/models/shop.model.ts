
export class Shop{
    shopItems: object;

    constructor(){

    this.shopItems = [
        {
            id:1,
            title: 'Curso Wordpress',
            desc: 'Aprende Wordpress desde 0 con David Piqué',
            picture: '/assets/wordpress.png',
            price: 164
        },
        {
            id:2,
            title: 'Curso Frontend',
            desc: 'Aprende desarrollo front end desde 0 con David Piqué',
            picture: '/assets/frontend.png',
            price: 220
        },
        {
            id:3,
            title: 'Curso Fullstack',
            desc: 'Aprende desarrollo frontend y backend desde 0 con David Piqué',
            picture: '/assets/fullstack.png',
            price: 420
        }
     ]
    }
}
