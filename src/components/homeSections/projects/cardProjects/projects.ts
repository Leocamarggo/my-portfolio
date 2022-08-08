export interface ICardProjects {
    name: string,
    about: string,
    preview: string,
    url: string
}

export const projects: ICardProjects[] = [
    {
        name: "E-commerce Product",
        about: "Website",
        preview: "/assets/images/project-01.png",
        url: "https://ecommerce-product-pg.vercel.app/"
    },
    {
        name: "Loja Kafnet",
        about: "Website",
        preview: "/assets/images/project-02.png",
        url: "https://challenge-loja-kafnet.vercel.app/"
    },
    {
        name: "Breto Calçados",
        about: "Website",
        preview: "/assets/images/project-03.png",
        url: "https://challenge-hello-world.vercel.app/"
    }
]