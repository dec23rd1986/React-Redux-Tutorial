import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return (
        <div className="container">
            <h4 className="centered">This is the Contact page</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, distinctio nam dicta mollitia placeat corrupti consequuntur provident dolorem quis voluptatem fuga corporis sapiente eligendi ratione recusandae cum doloribus? Ea, in?</p>
        </div>
    )
}
export default Contact