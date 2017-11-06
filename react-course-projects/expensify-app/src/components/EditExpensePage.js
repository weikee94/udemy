import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
            Edit {props.match.params.id}
        </div>
    )
};

export { EditExpensePage };