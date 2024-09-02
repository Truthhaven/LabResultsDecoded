import cbcImage from './cbcImage.jpeg';

function Card(){
    return(
        <div className = "card">
            <img className = "card-img" src = {cbcImage} alt = "Image of sample cbc test"></img>
            <h2 className = "card-title"> CBC</h2>
            <p className="card=text" >A complete blood count, also known as a full blood count, is a set of medical laboratory tests that provide information about the cells in a person's blood</p>
        </div>
    );
}
export default Card