import { Link } from 'react-router-dom';

export default function NavBar() {
     return (
          <nav>
               <Link to='/bookmarks'>Bookmarks</Link>
               &nbsp; | &nbsp;
               <Link to='/bookmarks/new'>New Bookmark</Link>
          </nav>
     )
}