import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersAsy, DeleteUserAsy } from "../services/action/UserAction";
import { Link, useNavigate } from "react-router-dom";

const UserView = () => {
    const { users, isError, isLoading } = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const UserRecDelete = (id) => {
        dispatch(DeleteUserAsy(id));
    };

    const handleEdit = (id) => {
        navigate(`/useredit/${id}`);
    };

    const handleView = (id) => {
        navigate(`/usersingleview/${id}`);
    };

    useEffect(() => {
        if(users){
            dispatch(GetUsersAsy());
        }
    }, [users]);

    return (
        <section className="py-4 bg-[#252525]">
            <Container>
                <Row className="g-4">
                    <ul className="flex items-center justify-center gap-4 flex-col flex-lg-row m-0 py-3">
                        <li><Link to="/" className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] !border-2 text-white rounded-lg !border-green-900 hover:bg-green-700 transition duration-500">Home</Link></li>
                        <li><Link to="/usercart" className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] !border-2 text-white rounded-lg !border-green-900 hover:bg-green-700 transition duration-500">User Cart</Link></li>
                    </ul>

                    {users.map((rec) => {
                        const formattedStartDate = new Date(rec.startdate).toLocaleDateString('en-GB').split('/').join('-');

                        return (
                            <Col lg={4} key={rec.id}>
                                <div className="rounded overflow-hidden shadow-lg bg-white h-full flex flex-col">
                                    <div className="flex items-center flex-grow space-x-4 px-3 py-2 pt-4 justify-center flex-col">
                                        <img className="profile rounded-xl" src={rec.user_image || "https://via.placeholder.com/150"} alt={`${rec.user_name}'s profile`} />
                                        <div className="my-2 text-center">
                                            <h2 className="text-2xl font-semibold text-gray-800">{rec.user_name}</h2>
                                            <p className="text-gray-600">{rec.user_post}</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex-grow flex-col">
                                        <div className="flex justify-between text-gray-700 border-b px-3 py-2">
                                            <p className="font-medium">Name:</p>
                                            <p>{rec.user_name}</p>
                                        </div>
                                        <div className="flex justify-between text-gray-700 mt-2 border-b px-3 py-2">
                                            <p className="font-medium">Age:</p>
                                            <p>{rec.user_age}</p>
                                        </div>
                                        <div className="flex justify-between text-gray-700 mt-2 border-b px-3 py-2">
                                            <p className="font-medium">Email:</p>
                                            <p className="truncate">{rec.user_email}</p>
                                        </div>
                                        <div className="flex justify-between text-gray-700 mt-2 border-b px-3 py-2">
                                            <p className="font-medium">Phone:</p>
                                            <p>{rec.user_phone}</p>
                                        </div>
                                        <div className="flex justify-between text-gray-700 mt-2 border-b px-3 py-2">
                                            <p className="font-medium">City:</p>
                                            <p>{rec.user_city}</p>
                                        </div>
                                        <div className="flex justify-between text-gray-700 mt-2 border-b px-3 py-2">
                                            <p className="font-medium">Start Date:</p>
                                            <p>{formattedStartDate}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-6 px-3 py-2 pb-4">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200" onClick={() => handleView(rec.id)}> View</button>
                                        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200" onClick={() => handleEdit(rec.id)}>Edit</button>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200" onClick={() => UserRecDelete(rec.id)}>Delete</button>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default UserView;