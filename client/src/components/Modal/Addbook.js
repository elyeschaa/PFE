import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
function Addbook(props) {
    const [bookImg, setBookImg] = useState("");
    const [newBook, setNewBook] = useState({
        author: "",
        title: "",
        date: "",
        type: "",
        price: 0,
        rating: 0,
    });
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    // const handleSetBookImg = (e) => {
    //     setBookImg(e.target.files[0]);
    // };

    const handleAddBook = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    };

    const addBook = async () => {
        const formData = new FormData();

        formData.append("author", author);
        formData.append("title", title);
        formData.append("date", date);
        formData.append("type", type);
        formData.append("price", price);
        formData.append("rating", rating);
        formData.append("bookImg", bookImg);
        const config = {
            method: "POST",
            body: formData,
        };
        const req = await fetch("/api/books/createBook", config);
        if (req.ok) {
            const res = await req.json();
            console.log(res);
        }
        // const res = await axios.post(
        //     "/api/books/createBook",
        //     { name: "hello" },
        //     {
        //         headers: {
        //             "Content-Type": `multipart/form-data`,

        //             "Access-Control-Allow-Origin": "*",
        //         },
        //     }
        // );
        // console.log(res);

        props.handleModal();
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ajouter un livre
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <input
                    type="file"
                    placeholder="image"
                    name="bookImg"
                    accept="image/png, image/jpeg "
                    onChange={(e) => setBookImg(e.target.files[0])}
                /> <br/>
                {/* <input
          placeholder="bookImg"
          type="file"
          value={props.bookImg}
          name="bookImg"
          onChange={props.handleSetBookImg}
        /> */}
                <input
                    placeholder="author"
                    type="text"
                    value={author}
                    name="author"
                    onChange={(e) => setAuthor(e.target.value)}
                /><br/>
                <input
                    placeholder="title"
                    type="text"
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                /><br/>
                <input
                    placeholder="date"
                    type="date"
                    value={date}
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                /><br/>
                <input
                    placeholder="type"
                    type="text"
                    value={type}
                    name="type"
                    onChange={(e) => setType(e.target.value)}
                /><br/>
                <input
                    placeholder="rating"
                    type="number"
                    value={rating}
                    name="rating"
                    onChange={(e) => setRating(e.target.value)}
                /><br/>
                <input
               
                    placeholder="price"
                    type="number"
                    value={price}
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                /><br/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleModal}>Fermer</Button>
                <Button onClick={addBook} variant="success">
                    Ajouter
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default Addbook;
// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);
