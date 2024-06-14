import useAuth from "../../../../hooks/useAuth";


const UserRow = () => {
    const {user} = useAuth()
    console.log(user);
    return (
        <div>
            <img src={user?.photoURL || 'ni'} alt="" />
        </div>
    );
};

export default UserRow;