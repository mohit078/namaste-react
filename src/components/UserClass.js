import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, location } = this.props;
        return (
            <div>
                <h1>User Class Component</h1>
                <h1>{name}</h1>
                <h1>{location}</h1>
            </div>
        );
    }
}

export default UserClass;