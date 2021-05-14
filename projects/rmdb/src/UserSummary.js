export const UserSummary = ({user, onSignOut}) => (
    <div>
        <p>Username: {user.userName}</p>
        <button onClick={onSignOut}>SignOut</button>
    </div>
)