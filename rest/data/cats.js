let cats = [
    {
        id: 0,
        name: "Jiji",
        color: "black",
        human: "Kiki",
        image: "images/jiji.png"
    },
    {
        id: 1,
        name: "Lion",
        color: "pink",
        human: "Steven",
        image: "images/lion.png"
    },
    {
        id: 2,
        name: "Hobbes",
        color: "orange and black",
        human: "Calvin",
        image: "images/hobbes.png"
    },
];

const getCats = () => {
    return cats;
}

const getCatById = (id) => {
    return cats.find(cat => cat.id === id)
}

const deleteCatById = (id) => {
    cats = cats.filter(cat => cat.id !== id);  // Fix reassigning cats array
    console.log("remaining cats:", cats);
}

export {getCats, getCatById, deleteCatById};
