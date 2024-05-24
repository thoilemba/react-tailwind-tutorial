import { createContext, useContext } from 'react';

// Create a context with a default value
const MyContext = createContext("Default Value");

// App component to provide the context value
const ContextExample = () => {
    return (
        <div>
            <MyContext.Provider value="Provided Value">
                <ParentComponent />
            </MyContext.Provider>
            {/* Using the default value */}
            <AnotherComponent />
        </div>
    );
};

const ParentComponent = () => {
    return (
        <div>
            <h2>Parent Component</h2>
            <ChildComponent />
        </div>
    );
};

// ChildComponent consuming the context using useContext hook
const ChildComponent = () => {
    const contextValue = useContext(MyContext);
    return (
        <div>
            <h3>Child Component</h3>
            <p>Context Value: {contextValue}</p>
        </div>
    );
};

const AnotherComponent = () => {
    const contextValue = useContext(MyContext);
    return (
        <div>
            <h3>Another Component</h3>
            <p>Context Value: {contextValue}</p>
        </div>
    );
};

// Alternatively, ChildComponent component consuming the context using MyContext.Consumer
// const ChildComponent = () => {
//   return (
//     <MyContext.Consumer>
//       {(contextValue) => (
//         <div>
//           <h3>Child Component</h3>
//           <p>Context Value: {contextValue}</p>
//         </div>
//       )}
//     </MyContext.Consumer>
//   );
// };

export default ContextExample;

