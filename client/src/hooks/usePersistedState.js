import { useState } from 'react'

/*
1. usePersistedState is not a hook itself, but is a factory that accepts a storage key and an optional storage provider (default = localStorage) and returns a hook that you can use as a direct replacement for useState.

2. We can replace usePersistedState with useState and remove the func that we give inside the useState in AuthProvider.
 
3. useState accept value by default(in this case - defaultValue). Next by default is an array contains state and setState (in our case - return [state, setPersistedState]).

4. We need to create our internal (вътрешен) state as we need to store the state we create actually in useState.

5. setPersistedState - a new setState function.

6. Key is 'user'('auth' - Ivaylo Papazov), we pass it from authContext.jsx. This is the name we store it in local storage.

7. Единствената цел на функцията подадена в useState е да калкулира началнoто състояние(state) на useState т.е ще се изпълни само при mount първия пъп повече няма да се изпълнява.

8. Връщаме -> return JSON.parse(persistedState) <-, тъй като каквото върнем това и ще бъде началната стойност на useState.

9. setPersistedState function that is a wrapper. It receives a value that we will set in setState. At the same time we need to store the value in the localeStorage. При всяко актуализиране, който ще се направи със setUser ще обнови localeStorage, както и локалния state ще обновява localeStorage. The value in setPersistedState can be a function(example: setUser(state => {...oldState, something}))

10. serializedValue - we need to serialized because the value can be string, function, an object. Тук всеки път когато stringify стойността ще има забавяне.

11. Serializable value - the process whereby an object or data structure is translated into a format suitable for transfer over a network, or storage
*/

export default function usePersistedState(key, defaultValue) {

    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {

            return JSON.parse(persistedState);  
        }

        // if there no persistedState
        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializedValue; //стойност обърната към текстов формат

        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state))
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue)
    }

    return [
        state,
        setPersistedState
    ]
}