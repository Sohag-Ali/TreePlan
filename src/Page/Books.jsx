import React, { useState } from "react";
import TreeCard from "./TreeCard";
import Navbar from "../Components/Navbar";
import NotFound from "./NotFound";
import Loading from "../Components/Loading";
import useHooks from "../Hooks/useHooks";

const Books = () => {
        const { trees, loading } = useHooks();
//   cont skillData = useLoaderData();


  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchbook = term
    ? trees.filter((tree) => tree.plantName.toLowerCase().includes(term))
    : trees;
if (loading) return <Loading></Loading>
    if (!trees) return <NotFound></NotFound>
    
  return (
    <div>
      {/* <header>
        <div className="max-w-[1340px] mx-auto px-4">
          <nav className="h-fit sticky top-0 z-50 left-0 py-5">
            <Navbar></Navbar>
          </nav>
        </div>
      </header> */}
      <div className="text-center mb-6 md:mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Our All Plants</h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Explore All Trees on the Market developed by us. We code for Millions
        </p>
      </div>
      <hr className="mb-5" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 px-4 md:px-0">
        <p className="font-bold text-sm md:text-base">
          <span>({searchbook.length})</span> Plants Found
        </p>
        <label className="input input-bordered w-full sm:w-auto max-w-xs">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Plants"
            className="w-full"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
          //  skillData.map(skill => <TreeCard key={skill.skillId} skill={skill}></TreeCard>)
          searchbook.length > 0 ? (
          searchbook.map((t) => (
            <TreeCard key={t.plantId} tree={t} />
          ))
        ) : (
            <p className="col-span-full text-center text-gray-400">
      <NotFound></NotFound>
    </p>
          
        )
          
        }
       
      </div>
    </div>
  );
};

export default Books;
