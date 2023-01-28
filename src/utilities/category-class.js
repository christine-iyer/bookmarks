
export default function setClass(bookmark, styles){
     if(bookmark.category === 'Work'){
          return styles.work
     }
     if(bookmark.category === 'Family'){
          return styles.family
     }
     if(bookmark.category === 'Code'){
          return styles.code
     }
     if(bookmark.category === 'Misc'){
          return styles.misc
     }
     if(bookmark.category === 'Friends'){
          return styles.friends
     }

     

}