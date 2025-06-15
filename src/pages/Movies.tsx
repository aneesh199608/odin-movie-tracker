import { AppSidebar } from "@/components/AppSidebar" 
import MoviesList from "@/components/MoviesList"
import { defaultMovies } from "@/data/movies-data"
import { useParams } from "react-router-dom"

function Movies() {
    const {category} = useParams();
    const selectedMovie = category === "all" || !category ? undefined : category;

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
            <div className="w-64 flex-shrink-0">
                <AppSidebar />
            </div>
            <div className="flex-1">
                <MoviesList movies={defaultMovies} category={selectedMovie} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Movies