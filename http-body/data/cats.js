let cats = [
    {
        id: 0,
        name: "Jiji",
        color: "black",
        human: "Kiki",
        image: "/images/jiji.png"
    },
    {
        id: 1, 
        name: "Lion",
        color: "pink",
        human: "Steven",
        image: "/images/lion.png"
    },
    {
        id: 2,
        name: "Hobbes",
        color: "orange and black",
        human: "Calvin",
        image: "/images/hobbes.png"
    },
];

// We store the id in a global variable --
// this is a stand-in solution for our in-memory data implementation.
let currentId = cats.length - 1;
const nextId = () => {
    currentId += 1;
    return currentId;
}

const getCats = () => {
    return cats;
};
const getCat = (id) => {
    return cats.find(cat => cat.id === id);
};

const createCat = (data) => {
    const newCat = {
        id: nextId(),
        ...data
    };
    cats.push(newCat);
    return newCat; // Return the entire cat object, not just the ID
};


const updateCat = (id, data) => {
    let catToUpdate = cats.find(cat => cat.id === id)
    cats = cats.map(cat => {
        if(cat.id !== id){
            return cat
        }

        let updatedCat = {
            ...catToUpdate,
            ...data
        }
        return updateCat;
    })

    let updateCat = cats.find(cat => cat.id === id);
    return updateCat;
};

const deleteCat = (id) => {
};

export {getCats, getCat, createCat, updateCat, deleteCat};