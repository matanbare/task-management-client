import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function SingIn(props) {

    return (
        <>
            <main className="mx-auto form-control w-50  p-5">
                <h2 className={"grid text-center"}>
                    Tasks Manager App
                </h2>
                <hr/>
                <form className={""}>
                    <h3 className="h3 mb-3 fw-normal">Please sign in</h3>

                    <div className="form-floating mb-3 mt-3">
                        <input type="tel" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Personal Id</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; By Matan Bar Eliyahu 2022</p>
                </form>
            </main>
        </>
    )

}