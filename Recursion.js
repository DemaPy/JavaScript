let data = [
    {tag: 'table', child: [
        {tag: "tr", child: [
            {tag: "td", child: [
                {tag: "span", text: "test"}
            ]}
        ]},
        {tag: "tr", child: [
            {tag: "td", child: [
                {tag: 'table', child: [
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "span", text: "test 1"}
                        ]}
                    ]},
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "span", text: "test 2"}
                        ]}
                    ]},
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "span", text: "test 3"}
                        ]}
                    ]},
                    {tag: "tr", child: [
                        {tag: "td", child: [
                            {tag: "span", text: "test 4"}
                        ]}
                    ]},
                ]}
            ]}
        ]},
    ]}
]

function getObj(arr) {
    return arr.map(item => {
        console.log(item)
        print(item)
    })
}

function print(item) {
    if (item.child) {
        item.child.map(item => {
            console.log(item)
            print(item)
        })
    }
}

getObj(data)
