import { useEffect } from 'react';

const TitleUpdater = ({title, children}) => {
    useEffect(()=>{
        if (title) document.title=title;
    },[title]);
    return children;
}

export default TitleUpdater;