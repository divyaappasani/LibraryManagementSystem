import React, { Component } from 'react'
import { Jumbotron, Card, Button, CardGroup } from 'react-bootstrap'
import withLogin from './withLogin'

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cartCount: 0
        }
    }
    handleAddToCart = () => {
        this.setState({
            cartCount: this.state.cartCount + 1

        })
    }
    handleRemove = () => {
        {
            this.state.cartCount > 0 ?
            this.setState({
                cartCount: this.state.cartCount - 1
            }) : alert("cart count cannot be less than zero")
        }

    }



    render() {
        //const{username,password,handleUsernameChange,handlePasswordChange}=this.props
        var { username } = this.props.match.params
        return (
            <div>
                <Jumbotron className="jumbo">
                    <h1>Hi {username},Welcome to Ekart</h1>
                </Jumbotron>
                <h2>Cart Total:{this.state.cartCount}</h2>
                <div className="cart">
                    <CardGroup>
                        <Card style={{ width: '18rem', height: '85%' }}>
                            <Card.Img variant="top" src="https://giftzbag.com/wp-content/uploads/2018/02/Giftzbag_cake_IMGL8262-800x800.jpg" height="50%" />
                            <Card.Body>
                                <Card.Title>Fantasy Butterscotch Cake</Card.Title>
                                <Card.Text>
                                    $35.00<br /> Fantasy Butterscotch Cake to your Some one special-Delivery.

                            </Card.Text>
                                <Button variant="warning" onClick={this.handleAddToCart} className='button' id='add'>Add to Cart</Button>
                                <br />
                                <Button variant="danger" onClick={this.handleRemove} className='button' id='remove'>Remove from Cart</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem', height: '85%' }}>
                            <Card.Img variant="top" src="https://data.thefeedfeed.com/recommended/post_2566209.jpg" height="50%" />
                            <Card.Body>
                                <Card.Title>Chocolate Strawberry Cake</Card.Title>
                                <Card.Text>
                                    $42.50 <br /> Glazed Strawberry and Chocolate Cake||Delivery Available

                                </Card.Text>

                                <Button variant="warning" onClick={this.handleAddToCart} id='add'>Add to Cart</Button>
                                <Button variant="danger" onClick={this.handleRemove} id='remove'>Remove from Cart</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', height: '85%' }}>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2725/9456/products/flavourtown-bakery-london-cakes_redvelvet-vs-oreo_2048x2048.jpg?v=1583340375" height="50%" />
                            <Card.Body>
                                <Card.Title>Red Velvet Cake</Card.Title>
                                <Card.Text>
                                    $56.52 <br />Red velvet cake with layers of Oreo truffle filling||Delivery Available

                                </Card.Text>

                                <Button variant="warning" onClick={this.handleAddToCart} id='add'>Add to Cart</Button>
                                <Button variant="danger" onClick={this.handleRemove} id='remove'>Remove from Cart</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
                <div>
                    <footer>
                        <p>Author: DivyaAppasani<br></br>
                            <a href="#">divya@hclexample.com</a></p>
                    </footer>
                </div>
            </div>

        )
    }
}

export default User
