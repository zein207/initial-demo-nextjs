
export const DarkLayout = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rebeccapurple',
            padding: '10px',
            borderRadius: '5px'
        }}>
            <h3>Dark Layout</h3>
            <div>
                { children }
            </div>
        </div>
    )
}
