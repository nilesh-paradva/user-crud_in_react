import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleUserAsy } from "../services/action/UserAction";
import { use } from "react";

const UserSingleView = () => {

    const { user } = useSelector((state) => state.UserReducer);
    console.log("user single view", user);

    const [viewUser, setViewUser] = useState({
        user_name: "",
        user_age: "",
        user_city: "",
        user_email: "",
        user_phone: "",
        user_post: "",
        startdate: "",
        user_image: "",
    });

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(SingleUserAsy(id));
        }
    }, [id]);

    useEffect(() => {
        if (user) {
            setViewUser(user);
        }
    }, [user]);

    // if (!user) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>

        <section className="h-screen flex items-center justify-center bg-[#4B5945]">
            <div className="max-w-lg mx-auto mt-8 bg-[#B2C9AD] text-white p-6 shadow-lg rounded-lg">
                <div className="flex items-center justify-center flex-col flex-lg-row">
                    <img src={viewUser.user_image} alt={viewUser.user_name} className="profile rounded-xl mr-4" />
                    <div>
                        <h1 className="text-3xl font-bold p-2 text-center text-[#4B5945]">{viewUser.user_name}</h1>
                        <p className="text-lg hover:bg-[#91AC8F] p-2 rounded-md transition-all duration-300 text-[#485643]"><span className="font-bold text-[#464545]">Age :</span> {viewUser.user_age}</p>
                        <p className="text-lg hover:bg-[#91AC8F] p-2 rounded-md transition-all duration-300 text-[#485643]"><span className="font-bold text-[#464545]">City :</span> {viewUser.user_city}</p>
                        <p className="text-lg hover:bg-[#91AC8F] p-2 rounded-md transition-all duration-300 text-[#485643]"><span className="font-bold text-[#464545]">Email&nbsp;:</span>&nbsp;{viewUser.user_email}</p>
                        <p className="text-lg hover:bg-[#91AC8F] p-2 rounded-md transition-all duration-300 text-[#485643]"><span className="font-bold text-[#464545]">Phone :</span>{viewUser.user_phone}</p>
                        <p className="text-lg hover:bg-[#91AC8F] p-2 rounded-md transition-all duration-300 text-[#485643]"><span className="font-bold text-[#464545]">Post :</span> {viewUser.user_post}</p>
                        <p className="text-lg hover:bg-[#91AC8F] p-2 rounded-md transition-all duration-300 text-[#485643]"><span className="font-bold text-[#464545]">Date :</span> {viewUser.startdate}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default UserSingleView