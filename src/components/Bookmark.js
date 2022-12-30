export default function Bookmark({ bookmark, buttonAction, buttonText }) {
     return(
          <div>{bookmark.title} 
                    <button onClick={() => buttonAction(bookmark._id)  }>{buttonText}</button>
                </div>

     )
}