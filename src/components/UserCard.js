
import Loading from "./Loading";

const UserCard = (props) => {
    const userdata = props.userdata
    const isLoading = props.isLoading

    const listUser = userdata.map((data) =>
    <div className="column" key={data.id}>
        <div className="card">
            <img src={data.avatar} alt="" />
            <h1>{data.first_name} {data.last_name}</h1>
            <h3>{data.email}</h3>
        </div>
    </div>
    );

    setTimeout(() => {
        props.setLoading(false);
        }, 3000);

    return (
        <div className="user-data">
            {isLoading ? (<Loading />) : null}
            {!isLoading ? (listUser) : null}
        </div>
    )
}

export default UserCard
