import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
  Row,
  Col
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../redux/actions/categoryActions";
import socketIOClient from "socket.io-client";
import { BsSearch } from "react-icons/bs";
import { setChatRooms, setSocket, setMessageReceived, removeChatRoom } from "../redux/actions/chatActions";
// import compare from "../images/compare.svg";
// import wishlist from "../images/wishlist.svg";
// import user from "../images/user.svg";
// import cart from "../images/cart.svg";
// import menu from "../images/menu.svg";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const { categories } = useSelector((state) => state.getCategories);
  const { messageReceived } = useSelector((state) => state.adminChat);

  const [searchCategoryToggle, setSearchCategoryToggle] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const submitHandler = (e) => {
    if (e.keyCode && e.keyCode !== 13) return;
    e.preventDefault();
    if (searchQuery.trim()) {
      if (searchCategoryToggle === "All") {
        navigate(`/product-list/search/${searchQuery}`);
      } else {
        navigate(`/product-list/category/${searchCategoryToggle.replaceAll("/", ",")}/search/${searchQuery}`);
      }
    } else if (searchCategoryToggle !== "All") {
      navigate(`/product-list/category/${searchCategoryToggle.replaceAll("/", ",")}`);
    } else {
      navigate("/product-list");
    }
  }

  useEffect(() => {
    if (userInfo.isAdmin) {
      var audio = new Audio("/audio/chat-msg.mp3");
      const socket = socketIOClient();
      socket.emit("admin connected with server", "Admin" + Math.floor(Math.random() * 1000000000000));
      socket.on("server sends message from client to admin", ({ user, message }) => {
        dispatch(setSocket(socket));
        //   let chatRooms = {
        //     fddf54gfgfSocketID: [{ "client": "dsfdf" }, { "client": "dsfdf" }, { "admin": "dsfdf" }],
        //   };
        dispatch(setChatRooms(user, message));
        dispatch(setMessageReceived(true));
        audio.play();
      })
      socket.on("disconnected", ({ reason, socketId }) => {
        //   console.log(socketId, reason)
        dispatch(removeChatRoom(socketId));
      })
      return () => socket.disconnect();
    }
  }, [userInfo.isAdmin])

  return (
    <>
      <header className="header-top-strip py-3">
        <Container fluid="xxl">
          <Row>
            <Col xs={6}>
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </Col>
            <Col xs={6}>
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <Navbar collapseOnSelect expand="lg" bg="dark" className="header-upper">
        <Container>

          <LinkContainer to="/">
            <Navbar.Brand className="text-white" href="/"><h2>Shopee</h2></Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <InputGroup>
                <DropdownButton id="dropdown-basic-button" title={searchCategoryToggle}>
                  <Dropdown.Item onClick={() => setSearchCategoryToggle("All")}>All</Dropdown.Item>
                  {categories.map((category, id) => (
                    <Dropdown.Item key={id} onClick={() => setSearchCategoryToggle(category.name)}>{category.name}</Dropdown.Item>
                  ))}
                </DropdownButton>
                <Form.Control onKeyUp={submitHandler} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Search product here..." />
                <Button onClick={submitHandler} variant="warning">
                  {/* <i className="bi bi-search text-dark"></i> */}
                  <BsSearch className="fs-6" />
                </Button>
              </InputGroup>
            </Nav>
            <Nav>
              {userInfo.isAdmin ? (
                <LinkContainer to="/admin/orders">
                  <Nav.Link>
                    <p className="text-white">Admin</p>
                    {messageReceived && <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>}

                  </Nav.Link>
                </LinkContainer>
              ) : userInfo.name && !userInfo.isAdmin ? (
                <NavDropdown title={<p className="text-white p-0">{`${userInfo.name} ${userInfo.lastName}`}</p>}  id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    eventKey="/user/my-orders"
                    as={Link}
                    to="/user/my-orders"
                  >
                    My orders
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                    My profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => dispatch(logout())} >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link > <p class="text-white">Login </p></Nav.Link>
                  </LinkContainer>
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>
                  <Badge pill bg="danger">
                    {itemsCount === 0 ? "" : itemsCount}
                  </Badge>
                  <i className="bi bi-cart-dash text-white"></i>
                  <span className="ms-1 text-white">CART</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
