ReactJS
-----------------------------------------------------------------------------------

    java-script framework for SPA apps.

    SPA - Single Page Applications.

    Pre-Requisite Knowledge

        HTML 5
        CSS 3
        JavaScript (ES6)
        NodeJS
        
    Web

        WebSite -  a folder having pre-scripted html documents hosted on a HTTP public ip.

        Dynamic Web Applications

            Server                              Client / Browser

                Server Side Programs
                (PHP,ASP,JSP,...etc)    
                                        <---------REQ1---
                    the prog is executed
                    on the server and it
                    generated HTML content
                    on the go..

                                -----RESP ( generated HTML)---->

        Single Page Applications - WebApp has one and only page (index.html).

            Server                              Client / Browser
                spa-bundle
                (index.html + .js)
                      <---------REQ1----------------
                      -----RESP ( spa-bunle)------->    index.html is laoded along witht he JS

                                                        any event like buttons or links or
                                                        form submitions are handled on the client
                                                        by the JS. These events can generate
                                                        html content dynamically on the client
                                                        and they replace the index.html content
                                                        with the generated content.

                rest-api    <------(.xml/.json)--------->  spa data operations

            Angular
            AngularJS
            ReactJS
            VueJS
            ..etc., are a few SPA frameworks.

    ReactJS Introduction

        1. Pure javascript based framework
        2. Component based archetecutre
        3. HTML Extendability   (we can add our own html-eleemnts and attributes, each React Component is an html-element)
        4. JSX support. (JSX - JavaScript eXtended).

    JavaScript eXtended 

        is a script where html is embeded into javascript to minimize the DOM related code.

        JSX rules
            1. 'class' attribute is banned. 'className' attribute is to be used instead.
            2. the script is case sensitive, all html elements and attributes are used in lower case and
                the react components are used as Initial-capitals.
            3. A object can refer to only one html element.

                    let x = ( <p> soem text </p> )  //is a valid statement
                    let y = ( <p> soem text </p> <p> some other para</p> )  //is a in-valid statement
                    let z = ( <div> <p> soem text </p> <p> some other para</p> </div> )  //is a valid statement

        .js

            let userName = "Vamsy Kiran";
            let para1 = document.createElement("p");
            para1.innerText = "Hello "+userName+"! Welcoem to our app.";

        .jsx

            let userName = "Vamsy Kiran";
            let para1 = <p> Hello {userName} Welcoem to our app. </p> ;

        .js

            let team = ["Vamsy","Murthy","Suresh","Ramesh"];
            let friendsList = document.createElement("ol");

            team.forEach( f => {
                let friendLi =document.createElement("li");
                friendLi.innderText = f;
                friendsList.appendChild(friendLi);
            });

        .jsx

            let team = ["Vamsy","Murthy","Suresh","Ramesh"];
            let friendsList = (
                <ol>
                    { team.map( f => <li> {f} </li> ) }
                </ol>
            );

    Creating a React App

        npx create-react-app app-name

        cd app-name
        
        npm start

    ReactJS Components

        A component is a react based html element.

        Function Components

            is any javascript function that accepts an optional parameter called 'props'
            and returns an HTML Element.

            const App = () => (
                <header>
                    <h3>My First ReactJS SPA</h3>
                </header>
            );

            <App />

            'props' short for properties will allow a parent component to define
            attrobutes on a child component through which the parent component
            can pass data to the child component.

            const Header = props => (
                <header>
                    <h3> {props.title ?? 'A Demo ReactJS App.' } </h3>
                </header>
            );

            const App = () => (
              <Header title="My First ReactJS SPA" />
            );

        Class Components

            is any class that extends React.Component.

            From React.Component, the class component inherits
                1. 'state'
                2. 'setState()'
                3. 'render()'
                4. 'componentDidMount()'
                5. 'componentDidUpdate()'
                6. and a few more life cycle methods.

            'render()' is to be overridden to return the html content to be displayed for this component.

            'state' is a immutable object the holds all the data related to our component.

            the 'state' is continously monitored and as and when a change in the 'state' is
            detected the render() method is reexecuted.

            'state' as is immutable, can not be changed but is always repalced using 'setState()' method.

            class Dashboard extends React.Component {
                constructor(){
                    super();
                    this.state = {}; //initialize the state.
                }

                render(){
                    return (
                        <div>
                        </div>
                    );
                }
            }

            <Dashboard />
    
    Integrating Bootstrap

        npm i bootstrap

        into index.js 
        import 'bootstrap/dist/css/bootstrap.min.css'
        import 'bootstrap/dist/js/bootstrap.bundle'

    ReactJS Shadow DOM
    Working With Forms
    Inter Component Communication

    Life Cycle Methods

        constructor()
            |
            ↓
         render()
            |
            ↓
        componentDidMount()     //is used to invoke any operation immediatly after the first render
            |
            ↓
            /*************************************************************/
                the component will be idle until any event occurs
                and any event handlet is invoked and
                if 'setState()' is called in there...!
            /*************************************************************/    
                                |
                                ↓
                            render()
                                |
                                ↓
                            componentDidUpdate()    //is sued to excute any operation after every render()

    
    React Hooks

        A React Hook is a special function that provides special features to a function component.

        useState        is a react hook that allows a function component to have state.

                        let [reader,writer] = useState(initalValue);

                        let [x,setX] = useState(0);

                        x is sued to get the value
                        setX is used to modify the value, and each tiem setX is called the component renders.

        useEffect       is a react hook that can compensate componentDidMount and componentDidUpdat life 
                        cycle method for a function compoent.

                        useEffect(callBack,[]);

                            the 'callback' method is executed only once after the first render of teh component.
                            Equivalent to componentDidMount

                        useEffect(callBack,[field1,field2]);

                            the 'callback' method is executed after every render of the component whenever the any of those fields are modified. Equivalent to componentDidUpdate
    
    React Routing

        npm i react-router react-router-dom --save

            <BrowserRouter>

                <Header />

                <Routes>
                    <Route path="/" element={<C1 />} />
                    <Route path="/a" element={<C2 />} />
                    <Route path="/b" element={<C3 />} />
                    <Route path="/c/:pathVariable" element={<C4 />} />
                </Routes>

                <Footer />

            </BrowserRouter>

            <Link to"" ></Link>       instead of <a></a>

            <Navigate to="" />  