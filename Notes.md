hitesh choudary-journey notes

1)intro

2)how to react?
    why?
        makes easy to manage and build complex frontend
    when?
        after javascript
        most projects dont need react in intial phase
    why react was created?
        ghost/phantom message problem
        no consistency in UI
    library vs framework-
        framework-military strict rules
        library-cool dude less strict rules
        REACT IS A LIBRARY
    topics-
        core state
        components resusability
        props
        hooks
        -------
        routers
        state management(redux)
        class based components
        BAAS apps(social media clones,e-commerce apps)
        why frameworks(nextJS)>react
            no SEO
            broswer rendering
            no routing
        
3)create react projects
    vite vs CRA
        vite- less time
              less packages installed
              faster
              better functionality
    react-
        react-dom
        react-native
        
4)Understand react flow and structure
    npm build and npm run dev are different
    build has
        html
        css 
        js
    React has
        make function and render it somewhere
        React breaks the UI into reusable, self-contained components (e.g., buttons, forms)
5)Creating your own library and JSX
    building your own react library-i didnt make it due to repetitive code
6)why hooks
    you cant just update things with function
    because it deals with "UI"

    hence react provides a mechanism to manipulate the "UI"

    if(
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    ){
        only one increment
    }
    else if(
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)

    ){
        n increments
    }

7)virtual DOM,fibre and reconcilliation
    VDOM-
        creates a duplicate DOM known as virtual dom(vdom)
        when something click,vdom is compared to dom and then the vdom is re-rendered only where there are changes
    reconcilliation-
        comparison of dom and vdom to determine whether or not to update the vdom
    fibre-
        characteristics-
            1 pause work and come back to it later
            2 assign priorities to different types of work
            3 reuse previously completed work
            4 abort work if no longer needed
8)Tailwind and Props
    components were present in PHP way before
    but react has
        vdom
        doesnt update the whole page
        client side rendering design
        faster than php
    props- have to pass it to the child component to work eg-function Card(props)
        wherever u are calling some component you can give it username/job to render the name, you dont have to manually change the children component but you can assing values to the parent component
        defaultprops-
            1 use conditional rendering(username||'rohan')
            2 pass into the the component function eg-function Card({username="rohan"})
    how to add arrays/objects-
        make a arr/obj before hand
        add to the return statement only the variable name
9)build background changer
    used-
        state
        tailwind
        changing css with state

10)useEffect,useRef and useCallback
    
    onChange={(e)=>setLength(e.target.value)}
        onchange
        e->react event object automatically passed by react
        e.target->points to where the event occured
        setLength is set to value(current length)
    
    onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
        we're using callback(prev) for it to
        update asap in react 
        if used otherwise it wouldnt have been this fast
    
    memoisation(to understand useCallback)- 
        Memoization is an optimization technique used to improve the performance of functions by caching their computed results. When a function is called with the same inputs, memoization allows the program to return the cached result instead of recalculating it.

    useCallback
        react hook while lets you cache a function definition between re-renders
        read-
        https://react.dev/reference/react/useCallback

        you jus have to wrap in arrow function 
        useCallback(()=>{},[])then
         function,dependencies

    useEffect
        React Hook that lets you synchronize a component with an external system.
        {setup,dependencies}

    useRef
        is a React Hook that lets you reference a value that’s not needed for rendering.
        u get a reference of the following now u can manipulate anywhere u want
        
11)Custom hooks
    currency converter 
        destructuring-
            in this project we have used destructuring instead of props
            props and destructuring provide same functionalaties
            but destructuring provides cleaner code in comparison to props

    index.js
        -index.js is a common practice for developers in which you import all components and export all components 
        -it serves as a library for all components so that you dont have to call components repeatitevely
    making your own customised hook-
        a custom hook is nothing but a function thats reusable
        its main feature is resusability
        in our project, useCurrencyInfo fetches the data from an API.

    useId hook-
        FAANG and big shots use this  hook
        The useId hook in React is a built-in hook introduced in React 18. It generates unique IDs for components to ensure accessibility and prevent conflicts when rendering components on the server and client.

    input box accepts-  
        currency options
        amount disabled
        label
        amount
        on amount change
        on currency change
        selected currency 
    
    label- from
           to
    
    functions 
        onAmountChange-
            (number(e.target.value)) is taken and is used as a parameter
        onCurrencyChange-
            e.target.value again used as a parameter
        useCurrencyInfo-
            fetches the value of string currency.
            
    currency options are looped through with options.

12)React Router
    install react-router-dom

    to put route inside route example smtg.com/about/company then

    see syntax in project and docs for better understanding
    its a pretty straightforward concept according to me

    <Route path='about'>
        <Route path='company'/>
    </Route>

    when we use <a></a> tag it reloads.
    instead use LINK tag
    or use NAVLINK tag

    NAVLINK>LINK(NAVLINK HAS MORE FEATURES
        ISACTIVE?
        ISPENDING?)

    READ ROUTER DOCUMENTATION(KINDA CONFUSING.)

    useParams-
        in main (where routing is happening) when a 
        : (colon) spotted it means that useParam is called and The return value of useParams is an object where the keys correspond to the parameter names in the route, and the values are the actual values from the URL.

        -in simple words
            catches the dynamic routes and grabs the url itself,makes a fetch request and get the data

    learned-
        routing
        link/navlink
        useParams

13)ContextAPI
    to pass data into multiple components state management is used.

    we make a central place to put all data in so that we can access it easily
    
    workflow-

    start-
        react app
            -create context
                -provide context
                    -consume the context
                        -end