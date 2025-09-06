"use client";

export default function CardModal(){
    return (<>
        <dialog id="popup">
            <h2>Popup Title</h2>
            <p>This is a native HTML popup!</p>
            <button onclick="document.getElementById('popup').close()">Close</button>
        </dialog>
    </>)
}