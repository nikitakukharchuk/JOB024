import React from "react";

export function Header() {
    return (
        <div className="flex justify-between m-5">
        <h1 className="text-3xl font-mono">Rabota024.by</h1>
        <div className="flex">
            <div className="flex mr-5">
                <img src="../../public/logo192.png" alt="#" />
                <p className="font-mono font-bold">Войти</p>
            </div>
            <div className="flex">
                <img src="../logo.svg" alt="#" />
                <p className="font-mono font-bold">Регистрация</p>
            </div>
            
        </div>
        </div> 
    )
}