import Menu from './Menu';

function Header() {
    return (
        <header style={styles.header}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-2">
                        Logo
                    </div>
                    <div className="col-12 col-md-9">
                        <Menu />
                    </div>
                </div>
            </div>
        </header>
    )
}

const styles = {
    header: {
        backgroundColor: 'red',
        height: '100px',
    }
};

export default Header;