import React from "react";

function RecentUsers(){

    const users=[
        "Sai Anvesh",
        "Rahul",
        "Kiran",
        "Praveen",
        "Charan"
    ];

    return(

        <div className="dashboard-card-small">

            <h3>Latest Users</h3>

            <ul>

                {users.map((user,index)=>(

                    <li key={index}>

                        👤 {user}

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default RecentUsers;