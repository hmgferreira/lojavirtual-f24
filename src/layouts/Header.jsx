import Menu from './Menu';

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                Logo
            </div>
            <div style={styles.menu}>
                <Menu />
            </div>
        </header>
    )
}

const styles = {
    header: {
        backgroundColor: 'red',
        height: '100px',
        display: 'flex'
    },
    logo: {
        width: '20%',
    },
    menu: {
        width: '80%'
    }
};

export default Header;