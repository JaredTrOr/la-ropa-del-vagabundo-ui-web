import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className="bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col">La ropa del vagabundo</div>
                    <div className="col">Define tu propio estilo / <Link to="/" className="text-light">Explora más</Link> </div>
                    <div className="col"><i className="fa-brands fa-instagram"></i>  ropa_del_vagabundo_oficial</div>
                </div>
            </div>
        </header>
    )
}