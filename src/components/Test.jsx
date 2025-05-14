const Test = () => {
    const name = 'John Doe';
    const names = ['Alice', 'Bob', 'Charlie'];
    const loggedIn = true;
    const styles = {
        color : 'green',
        fontSize: '22px'
    }

    return(
        <>
            <h1 style={{ color: 'Red', fontSize: '38px' }}>Hello, {name}!</h1>
            <p>This is a simple React application.</p>
            <ul>
                { names.map( (name, indx) => <li key={indx}>{name}</li> ) }
            </ul>
            { loggedIn && <h2 style={styles}>Hello Memeber</h2> }
        </>
    )
}

export default Test;