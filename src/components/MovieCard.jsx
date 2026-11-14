/*function MovieCard() {

  return (
    <article className="movie-card">
      <h2>Inception</h2>
      <p>שנת יציאה: 2010</p>
      <p>דירוג: 8.8</p>
    </article>
  );
}
  */

//רכיב הילד מקבל מידע מרכיב האב ומשתמש במידע הזה כדי להציג אותו על המסך, אבל הוא לא יכול לשנות את המידע בעצמו.
/*                way1:
function MovieCard(props) {
  return (
    <article className="movie-card">
      <h2>{props.title}</h2>
      <p>שנת יציאה: {props.year}</p>
      <p>דירוג: {props.rating}</p>
    </article>
  );
}
  */
//הפרמטר props הוא אובייקט שמכיל את המידע שהרכיב
//  קיבל. כל ערך מופיע ב־JSX דרך props ושם התכונה.

//אפשר לקבל את הערכים ישירות באמצעות destructuring



//               way2:

function MovieCard({ title, year, rating, available, popular, genre }) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
       <p>ז׳אנר: {genre}</p>
      {popular && <p>בחירת הצוות</p>}
      {available && <p>זמין לצפייה</p>}
{typeof duration === "number" && (<p>משך הסרט: {duration} דקות</p>)}
      {/* הביטוי && מציג את הצד הימני רק כאשר popular הוא true */}
    </article>
  );
}




export default MovieCard;











