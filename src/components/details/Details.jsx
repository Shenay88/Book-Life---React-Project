import './details.css'

export default function Details() {
    return (
        <section className="detailsPage">
            <div className="wrapper">
                <div className="bookImage">
                    <img src="https://m.media-amazon.com/images/I/51hxjozCakL._SY445_SX342_.jpg"/>
                </div>
                <div className="bookInfo">
                    <div className="bookDetails">

                        <h1>Title: Charlie and the Chocolate Factory</h1>
                        <h3>Type: Fiction</h3>
                        <h4>Year: 1964</h4>
                        <p>Description: Melodrama is the second studio album by New Zealand singer-songwriter Lorde.
                            It was released on 16 June 2017 by Lava and Republic Records and distributed through
                            Universal.</p>
                    </div>

                    {/* <!-- Only for registered user and creator of the album--> */}
                    <div className="actionBtn">
                        <a href="#" className="edit">Edit</a>
                        <a href="#" className="remove">Delete</a>
                    </div>
                </div>
            </div>
        </section>
    )
}