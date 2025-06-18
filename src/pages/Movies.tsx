import { AppSidebar } from "@/components/AppSidebar" 
import MoviesList from "@/components/MoviesList"
import { defaultMovies } from "@/data/movies-data"
import { useParams } from "react-router-dom"
import { useGhibliMovies } from "@/hooks/useGhibliMovies"

function Movies() {
    const {category} = useParams();
    const selectedCategory = category === "all" || !category ? undefined : category;
    const {movies: ghibliMovies, loading, error} = useGhibliMovies();

    let allMovies = defaultMovies;
    if (selectedCategory === "ghibli") {
      allMovies = ghibliMovies;
    } else if (!selectedCategory) {
      allMovies = [...defaultMovies, ...ghibliMovies];
    } else if (selectedCategory) {
      allMovies = defaultMovies;
    }

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
            <div className="w-64 flex-shrink-0">
                <AppSidebar />
            </div>
            <div className="flex-1">
              {/* MoviesList filters by category itself */}
                <MoviesList movies={allMovies} category={selectedCategory} />
                {loading && <div>Loading Ghibli movies...</div>}
                {error && <div className="text-red-500">{error}</div>}
            </div>
        </div>
      </div>
    </>
  )
}

export default Movies