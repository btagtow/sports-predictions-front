import React, {useState} from 'react'

export default function Group (){
    const [groupMembers, setGroupMembers] = useState('No group members')

    const addGroupMember = () => {
        setGroupMembers(() => "New Group Member")
    }


    return (
        <>
            <button className="group-button" onClick={addGroupMember}>Add a group member</button>
            {/* {groupMembers} */}
        </>
        
    )
}