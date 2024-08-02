
import { useCount, useSearch } from 'remoteApp/store'

export const Navbar = () => {

  const [count] = useCount()
  const [searchItem, setSearchItem] = useSearch('');

  return (
    <div className='flex justify-evenly items-center text-3xl font-bold text-center fixed bg-black/20 w-full h-20'>
      Total Count: {count}
      <div className="flex justify-center items-center gap-5 text-lg font-medium">
        <label htmlFor="search">Search for {JSON.stringify(searchItem).slice(1, -1)}</label>
        <input className="rounded-lg p-2" placeholder="Search for a pokemon" type="text" onChange={e => setSearchItem(e.target.value)} />
      </div>
    </div>
  )
}
