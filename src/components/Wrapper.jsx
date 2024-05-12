import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import español from "/src/languages/español.json"
import ingles from "/src/languages/ingles.json"


export const Context = React.createContext();


const local = navigator.language;

let lang;
if (local === "en"){
    lang = español;
} else{
    lang = ingles;
}


export default function Wrapper(props) {

    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang(event) {
        const newLocale = event.target.value;
        setLocale(newLocale);
        if (newLocale === "en"){
            setMessages(español);
        } else {
            setMessages(ingles);
        }
    }


    

return (
    <Context.Provider value={{locale, selectLang}}>
        <IntlProvider messages={messages} local={locale}>
            {props.children}
        </IntlProvider>
    </Context.Provider>
)
}
