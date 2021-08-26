import React, { useState, useEffect, createContext, useContext } from 'react';

import { getUsers, addGuest } from '../api/getUsersActions';

const useStateValue = () => useContext(createContext)

const GuestList = props => {
    const [userSearch, setUserSearch] = useState("");
    const [displayedUsers, setDisplayedUsers] = useState([]);

    const [{users}, dispatch] = useStateValue();

    const searchHandler = evt => {
        setUserSearch(evt.target.value)
    };

    const userCompare = toCompare => {
        let searchGuests = users.data;
        console.log(users);
        searchGuests = searchGuests.filter(
            user => user.full_name.toLowerCase().includes(toCompare.toLowerCase())
        );
        setDisplayedUsers(searchGuests);
    };

    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch, userSearch]);

    return(
        <div className="Guest-list">
            <form onSubmit={evt => {
                evt.preventDefault();
                userCompare(userSearch);
            }}>
                <input
                    value={userSearch}
                    placeholder="Search Guests by username"
                    onChange={evt => searchHandler(evt)}
                />
                <button>Submit</button>
            </form>
            <li>
                {displayedUsers.map(user => {
                    return (
                        <label key={user.user_id} onClick={evt => {
                            evt.preventDefault();
                            addGuest(dispatch, props.eventID, {
                                user_id: user.user_id,
                                attending: false
                            });
                        }}>
                            <p>{user.username}</p>
                        </label>
                    );
                })}
            </li>
        </div>
    )
};

export default GuestList;


