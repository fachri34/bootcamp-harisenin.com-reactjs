import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <header>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid d-flex justify-content-between container mx-auto ">
                    <p class="navbar-brand  mt-3 ml-5 fw-bold">Navbar</p>
                    <div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </div>
                    <div>
                        <div class="collapse navbar-collapse fw-bold container gap-15" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to={"/home"} class="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/porto'} class="nav-link active">Portofolio</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/kontak'} class="nav-link active">Kontak</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
