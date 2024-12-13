import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleUserAsy, UserUpdateAcy } from "../services/action/UserAction";

const UserEdit = () => {
    const { user, isSuceess } = useSelector((state) => state.UserReducer);
    console.log("get user", user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const [userForm, setUserForm] = useState({
        user_name: "",
        user_age: "",
        user_city: "",
        user_email: "",
        user_phone: "",
        user_post: "",
        startdate: "",
        user_image: "",
    });

    const onSubmit = (e) => dispatch(UserUpdateAcy(id, userForm));

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUserForm((prev) => ({
                ...prev,
                user_image: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (id) dispatch(SingleUserAsy(id));
    }, [id]);

    useEffect(() => {
        if (user) setUserForm(user);
    }, [user]);

    useEffect(() => {
        if (isSuceess) navigate("/userview");
    }, [isSuceess]);

    return (
        <>
            <section className="h-screen my-16 flex items-center justify-center flex-col">
                <Container fluid>
                    <Row>
                        <header className="">
                            <ul className="flex items-center justify-center gap-4 flex-col flex-lg-row m-0 py-3">
                                <li><Link to="/" className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] text-white rounded-lg hover:bg-green-700">Home</Link></li>
                                <li><Link to="/usercart" className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] text-white rounded-lg hover:bg-green-700">User Cart</Link></li>
                                <li><Link to="/userview" className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] text-white rounded-lg hover:bg-green-700">UserView</Link></li>
                            </ul>
                        </header>

                    </Row>
                </Container>

                <Container>
                    <Row className="flex items-center justify-center">
                        <Col lg={6}>
                            <h1>{isSuceess}</h1>
                            <form action="" className="bg-green-900 p-4 rounded-lg">
                                <h1 className="text-2xl font-bold text-white mb-4">Update User{id}</h1>
                                <div className="flex flex-col">
                                    {/* Name */}
                                    <div className="relative mb-3">
                                        <label className="block text-sm font-medium text-white" htmlFor="name">Name*</label>
                                        <input type="text" id="name" name="user_name" value={userForm.user_name} placeholder="Enter your name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-green-900 text-white" required onChange={(e) => setUserForm({ ...userForm, user_name: e.target.value })} />
                                    </div>

                                    {/* Age */}
                                    <div className="relative mb-3">
                                        <label className="block text-sm font-medium text-white" htmlFor="age">Age*</label>
                                        <input type="number" id="age" name="user_age" value={userForm.user_age} placeholder="Enter your age" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-green-900 text-white" required onChange={(e) => setUserForm({ ...userForm, user_age: e.target.value })} />
                                    </div>

                                    {/* City */}
                                    <div className="relative mb-3">
                                        <label className="block text-sm font-medium text-white" htmlFor="city">City*</label>
                                        <input type="text" id="city" name="user_city" value={userForm.user_city} placeholder="Enter your city" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-green-900 text-white" required onChange={(e) => setUserForm({ ...userForm, user_city: e.target.value })} />
                                    </div>

                                    {/* Email */}
                                    <div className="relative mb-3">
                                        <label className="block text-sm font-medium text-white" htmlFor="email">Email*</label>
                                        <input type="email" id="email" name="user_email" value={userForm.user_email} placeholder="Enter your email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-green-900 text-white" required onChange={(e) => setUserForm({ ...userForm, user_email: e.target.value })} />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative mb-3">
                                        <label className="block text-sm font-medium text-white" htmlFor="phone">Phone*</label>
                                        <input type="tel" id="phone" name="user_phone" value={userForm.user_phone} placeholder="Enter your phone" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-green-900 text-white" required onChange={(e) => setUserForm({ ...userForm, user_phone: e.target.value })} />
                                    </div>

                                    {/* Post */}
                                    <div className="relative mb-3">
                                        <label className="block text-sm font-medium text-white" htmlFor="post">Post*</label>
                                        <input type="text" id="post" name="user_post" value={userForm.user_post} placeholder="Enter your post" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-green-900 text-white" required onChange={(e) => setUserForm({ ...userForm, user_post: e.target.value })} />
                                    </div>

                                    {/* Start Date */}
                                    <div className="relative mb-3">
                                        <label className="block text-sm font-medium text-white" htmlFor="startDate">Start Date*</label>
                                        <input type="date" id="startdate" name="startdate" value={userForm.startdate} placeholder="Enter your date" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-green-900 text-white" required onChange={(e) => setUserForm({ ...userForm, startdate: e.target.value })} />
                                    </div>

                                    {/* Image Upload */}
                                    <div className="relative col-span-2">
                                        <label className="block text-sm font-medium text-white" htmlFor="image">Profile Image*</label>
                                        <input type="file" id="image" name="user_image" onChange={handleImageChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-green-900 text-white" />
                                    </div>

                                    <div className="edit-button text-center pt-3">
                                        <Link onClick={onSubmit} variant="primary" className="bg-primary px-3 py-2 no-underline text-white rounded-lg inline-block">Submit</Link>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
};

export default UserEdit;