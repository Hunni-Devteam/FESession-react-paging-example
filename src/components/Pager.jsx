import { memo } from 'react';

function Pager(props) {
    return (
        <div>
            {props.page}
        </div>
    );
}

export default memo(Pager)