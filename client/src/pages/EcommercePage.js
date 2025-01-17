import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from "../components/Ecommerce/Footer";
import Header from "../components/Ecommerce/Header";
import CartScreen from '../components/Ecommerce/Screen/CartScreen';
import ForgetPasswordScreen from '../components/Ecommerce/Screen/ForgetPasswordScreen';
import HomeScreen from '../components/Ecommerce/Screen/HomeScreen';
import LoginScreen from '../components/Ecommerce/Screen/LoginScreen';
import PasswordResetScreen from '../components/Ecommerce/Screen/PasswordResetScreen';
import ProductScreen from '../components/Ecommerce/Screen/ProductScreen';
import ProfileScreen from '../components/Ecommerce/Screen/ProfileScreen';
import RegisterScreen from '../components/Ecommerce/Screen/RegisterScreen';
import '../styles/ecommerce.css';

function EcommercePage() {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/search/:keyword" component={HomeScreen} exact/>
                    <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} />
                    <Route path="/page/:pageNumber" component={HomeScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/forget-password" component={ForgetPasswordScreen} />
                    <Route path="/reset-password/:resetToken" component={PasswordResetScreen} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default EcommercePage
