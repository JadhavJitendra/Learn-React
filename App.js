// const heading= React.createElement(
//     "h1",
//      {id:"changeColor"},
//       "Hello world From React !");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


        // const parent = React.createElement("div",
        // {id:"parent"},
        // React.createElement("div",
        // {id:"child"},
        // [ React.createElement("h1",{},
        // "i am Jitendra") ,
        // React.createElement("h2",{},
        // "i am Jitendra Jadhav")
        //     ]
        //     ));
        // const root= ReactDOM.createRoot(document.getElementById("root"));
        // root.render(parent);


        const parent= React.createElement(
            "div",
            {id:"parent"},
            [React.createElement(
                "div",
                {id:"child"},
                [React.createElement(
                    "h1", {}, "I AM H1 TAG"
                ), 
                React.createElement(
                    "h2", {}, "I AM H2 TAG"
                )
                ]
            ),
            React.createElement(
                "div",
                {id:"child"},
                [React.createElement(
                    "h1", {}, "I AM H1 TAG"
                ), 
                React.createElement(
                    "h2", {}, "I AM H2 TAG"
                )
                ]
            )]
        );
        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);