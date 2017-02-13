let array = [{
        "name": "3ndlevelChild1",
        "parentId": 301,
        "id": 401
    },
    {
        "name": "3ndlevelChild2",
        "parentId": 301,
        "id": 402
    },
    {
        "name": "3ndlevelChild3",
        "parentId": 302,
        "id": 403
    },
    {
        "name": "4ndlevelChild1",
        "parentId": 401,
        "id": 501
    },
    {
        "name": "1stlevelChild1",
        "parentId": 100,
        "id": 201
    },
    {
        "name": "root",
        "parentId": null,
        "id": 100
    },
    {
        "name": "1stlevelChild2",
        "parentId": 100,
        "id": 202
    },
    {
        "name": "2ndlevelChild1",
        "parentId": 201,
        "id": 301
    },
    {
        "name": "2ndlevelChild2",
        "parentId": 201,
        "id": 302
    }
]
console.log("initial array: \n", array)

try {
    checkValidity()
    let dict = {}
    array.map((elem) => {
        dict[elem.id] = elem
    })
    array.sort((a, b) => {
        return b.parentId - a.parentId
    })

    array.map((childElem) => {
        const parentId = childElem.parentId
        initChildren(childElem)
        if (parentId !== null) {
            let parentElem = dict[parentId]
            if (parentElem == undefined) {
                throw "Parent not found for element with id = " + childElem.id
            }
            initChildren(parentElem)
            parentElem.children.push(childElem)
        }
    })

    const result = array[array.length - 1]
    console.log("result: \n", JSON.stringify(result, null, 2))
} catch (err) {
    console.log(err)
}

function checkValidity() {
    if (array === []) {
        throw "Array is empty"
    }
    array.map((elem) => {
        if (!("id" in elem) || !("parentId" in elem)) {
            throw "Invalid structure of object"
        }
    })
}

function initChildren(elem) {
    if (elem.children === undefined) {
        elem.children = []
    }
}
