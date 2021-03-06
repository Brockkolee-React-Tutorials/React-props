import React from "react";
import Card from "./Card"

function App() {
    return (
        <div>
        <h1>My Contacts</h1>
        <Card name="Beyonce" tel="+123 456 789" email="b@beyonce.com" alt="avatar_img" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"></Card>
        <Card name="Jack Bauer" tel="+987 654 321" email="jack@nowhere.com" alt="avatar_img" src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"></Card>
        <Card name="Chuck Norris" tel="+918 372 574" email="gmail@chucknorris.com" alt="avatar_img" src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"></Card>
      </div>
    )
}

export default App