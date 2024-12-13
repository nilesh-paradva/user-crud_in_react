import { Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddUserModalAct, PostUserAsy } from "../../services/action/UserAction";

const IndexPage = () => {

    const { isSuceess, isError } = useSelector((state) => state.UserReducer);

    const navigate = useNavigate();

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

    const { addUserModal } = useSelector((state) => state.UserReducer)
    const dispatch = useDispatch();

    const handleShow = () => {
        dispatch(AddUserModalAct());
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(PostUserAsy(userForm));
    }

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
        if (isSuceess) {
            navigate("/userview");
        }
    }, [isSuceess]);

    return (
        <>
            <Modal show={addUserModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton onClick={handleShow} className="bg-green-900 border-none">
                    <Modal.Title className="text-white">Add User Detail</Modal.Title><span>{isError}</span>
                </Modal.Header>
                <Modal.Body className="bg-green-900">
                    <form action="">
                        <div className="flex  flex-col">
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
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className="flex justify-center border-0 bg-green-900">
                    <Link onClick={onSubmit} variant="primary" className="bg-primary px-3 py-2 no-underline text-white rounded-lg">Submit</Link>
                </Modal.Footer>
            </Modal>

            <section className="h-screen">
                <Container fluid>
                    <Row>
                        <header className="fixed top-0 left-0 z-40 w-full">
                            <ul className="flex items-center justify-center gap-4 flex-col flex-lg-row m-0 py-3">
                                <li className=""><Link to={"/"} className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] !border-2 text-white rounded-lg !border-green-900 hover:bg-green-700 transition duration-500">Home</Link></li>
                                <li className=""><Link to={"/usercart"} className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] !border-2 text-white rounded-lg !border-green-900 hover:bg-green-700 transition duration-500">User Cart</Link></li>
                                {/* <li className=""><Link to={"//useredit"} className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] !border-2 text-white rounded-lg !border-green-900 hover:bg-green-700 transition duration-500">User Edit</Link></li> */}
                                {/* <li className=""><Link to={"/usersingleview"} className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] !border-2 text-white rounded-lg !border-green-900 hover:bg-green-700 transition duration-500">UserSingleView</Link></li> */}
                                <li className=""><Link to={"/userview"} className="no-underline inline-block px-3 py-2 font-sans bg-[#549854] !border-2 text-white rounded-lg !border-green-900 hover:bg-green-700 transition duration-500">UserView</Link></li>
                            </ul>
                        </header>
                        <Col className="position-relative h-screen bg-[url('assets/images/userimage.jpeg')] bg-cover bg-center ">
                            <div className="position-absolute top-0 left-0 w-full bg-black opacity-85 h-[100%]">
                                <div className="flex items-center justify-center text-white my-5 h-screen ">
                                    <Button onClick={handleShow} className="btn btn-success px-3 py-2 text-white rounded-md hover:bg-green-700 transition duration-200 !font-bold relative z-50">Add Usre<PersonAddIcon className="ms-2" /></Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default IndexPage