import { useState } from "react";
import './search.css'

export default function Search() {

    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <form className="search" role="search">
            <input id="search" type="search" placeholder="Search..." autoFocus required />
        </form>

    )
}