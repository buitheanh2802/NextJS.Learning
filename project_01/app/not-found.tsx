import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {}

const NotFound: React.FC<Props> = (props): React.ReactNode => {
    return (
        <React.Fragment>
            hello notfound
        </React.Fragment>
    )
};

export default NotFound;