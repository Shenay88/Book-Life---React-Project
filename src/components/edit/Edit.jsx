import './edit.css';

export default function Edit() {
    return (
        <form action="#" method="post">
            <h1>Edit Book</h1>
            <div className="container">

                <input type="text" name="name" className="title" placeholder="Title" />
                <input type="text" name="image" className="image" placeholder="Image URL" />

                <div className="row">
                    <div className="half">
                        <input type="number" name="year" className="year" placeholder='Year' />
                    </div>

                    <div className="half">
                        <select name="type" className="type">
                            <option value="">Choose one</option>
                            <option value="motivational">Motivational</option>
                            <option value="fiction">Fiction</option>
                        </select>
                    </div>
                </div>

                <input name="text" className="description" placeholder='Description'></input>

                <div className='buttons'>
                    <input type="submit" value="Edit Book" />
                    <input type="submit" value="Delete Book" />
                </div>


            </div>
        </form>
    );
}
