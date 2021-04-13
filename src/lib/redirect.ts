import Router from 'next/router'

const redirect = (target: string) => {
    if (target.length > 0) {
        Router.push(target);
        // Router.replace(target);
    }
}

export default redirect;
