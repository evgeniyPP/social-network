import React from 'react';
import s from './Friends.module.css';

const Friends = props => {
    let friend = props.friends.map(friend => <p className={s.friend}>{friend.name}</p>)

    return (
        <div className={s.friendsBlock}>{ friend }</div>
    )
}

export default Friends;